<script lang="ts">
	import { onMount } from 'svelte';
	import type { DeliveryZone, EditingZone } from '@ddsgt_mono/lib';
	import DeliveryZoneEditor from './DeliveryZoneEditor.svelte';
	import { fly, fade } from 'svelte/transition';
	import Button from '../form/Button.svelte';
	import { SettingsApi } from '../../plugins/api/modules/settings';
	import { ApiError } from '../../plugins/api';
	import { notification } from '../../stores/notifyStore';
	import NcLoading from './NCLoading.svelte';
	import { useSettingsContext } from '../../assets/patches/context';
	const { getSettingsContext } = useSettingsContext();
	const settings = getSettingsContext();
	let mapEl: HTMLDivElement;
	let mapInstance: ymaps.Map;
	let editingZone: EditingZone | undefined = undefined;
	let zonesData: DeliveryZone[] = structuredClone($settings.deliveryZones);
	let saved = true;
	let isLoading = false;
	let errors: Record<string, string[]> | undefined = undefined;

	function syncCoordinates(zone: ymaps.Polygon, src: DeliveryZone) {
		const coords = zone.geometry?.getCoordinates();
		if (coords !== undefined) {
			src.coordinates = coords;
		}
	}

	function polyFactory(zone: DeliveryZone): ymaps.Polygon {
		const poly = new ymaps.Polygon(
			zone.coordinates,
			{
				hintContent: `${zone.properties.name}: ${zone.properties.price}р`
			},
			{
				fillColor: zone.properties.fillColor,
				strokeColor: '#00000055',
				strokeWidth: 1,
				opacity: 0.5
			}
		);
		poly.events.add('geometrychange', () => {
			syncCoordinates(poly, zone);
			saved = false;
		});
		poly.events.add('click', () => {
			if (editingZone !== undefined) {
				editingZone.poly.editor.stopEditing();
			}
			editingZone = {
				poly,
				src: zone
			};
			poly.editor.startEditing();
		});
		return poly;
	}

	function addZone() {
		const zone: DeliveryZone = {
			coordinates: [],
			properties: {
				name: 'Новая зона',
				fillColor: '#ed4543',
				price: 300
			}
		};
		zonesData.push(zone);
		const poly = polyFactory(zone);
		editingZone = {
			poly,
			src: zone
		};
		// const poly = new ymaps.Polygon([]);
		mapInstance.geoObjects.add(poly);
		const editor = poly.editor as ymaps.geometryEditor.Polygon;
		editor.options;
		editor.startDrawing();
	}

	function removeZone() {
		if (editingZone === undefined) {
			return;
		}
		const idx = zonesData.findIndex((i) => editingZone?.src === i);
		zonesData.splice(idx, 1);
		const res = mapInstance.geoObjects.remove(editingZone.poly);
		console.log(res);

		editingZone = undefined;
		saved = false;
	}

	async function onSave() {
		try {
			isLoading = true;
			const settingsApi = new SettingsApi(fetch);
			const res = await settingsApi.updateZones(zonesData);
			settings.set(res);
			saved = true;
			notification.success('Изменения успешно сохранены!');
		} catch (error) {
			if (error instanceof ApiError) {
				console.log(error);
				errors = error.body.errors;
				notification.error('Что-то пошло не так!');
			}
		} finally {
			isLoading = false;
		}
	}

	function initMap() {
		mapInstance = new ymaps.Map(mapEl, {
			center: [61.263522, 73.428965],
			zoom: 12,
			controls: []
		});
		mapInstance.events.add('click', (e) => {
			if (editingZone !== undefined) {
				editingZone.poly?.editor.stopEditing();
				editingZone = undefined;
			}
		});
		for (let zone of zonesData) {
			const poly = polyFactory(zone);
			mapInstance.geoObjects.add(poly);
		}
	}

	onMount(() => {
		ymaps.ready(initMap);
	});
</script>

<div class="map" bind:this={mapEl}>
	{#if editingZone !== undefined}
		<div class="map__editor" transition:fly={{ x: 200, duration: 300 }}>
			<DeliveryZoneEditor
				bind:zone={editingZone}
				on:change={() => (saved = false)}
				on:remove={removeZone}
			/>
		</div>
	{/if}
	{#if editingZone === undefined}
		<button on:click={addZone} class="map__btn" transition:fly={{ y: 100, duration: 300 }}
			>Добавить зону</button
		>
	{/if}
</div>
{#if !saved}
	<p class="map__notify" transition:fade>
		Без сохранения все изменения будут сброшены после перезагрузки страницы.
	</p>
	<div class="mt-3">
		{#if isLoading}
			<NcLoading />
		{:else}
			<Button primary on:click={onSave}>Сохранить</Button>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.map {
		height: 500px;
		border: 2px solid var(--primary);
		border-radius: 15px;
		overflow: hidden;
		position: relative;
		&__editor {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 100;
		}
		&__btn {
			position: absolute;
			z-index: 100;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			background: var(--primary);
			padding: 10px;
			border: 1px solid black;
			border-radius: 15px;
		}
		&__notify {
			color: var(--danger);
		}
	}
</style>
