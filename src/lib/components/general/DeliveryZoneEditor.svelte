<script lang="ts">
	import type { EditingZone } from '@ddsgt_mono/lib';
	import { createEventDispatcher } from 'svelte';
	export let zone: NonNullable<EditingZone>;
	const dispatch = createEventDispatcher();
	let previousName = zone.src.properties.name;
	let previousPrice = zone.src.properties.price;
	let previousFillColor = zone?.src.properties.fillColor;

	$: if (zone.src.properties.name !== previousName) {
		previousName = zone.src.properties.name;
		updateZone();
	}

	$: if (zone.src.properties.price !== previousPrice) {
		previousPrice = zone.src.properties.price;
		updateZone();
	}

	$: if (zone.src.properties.fillColor !== previousFillColor) {
		previousFillColor = zone.src.properties.fillColor;
		updateZone();
	}

	function updateZone() {
		zone.poly.properties.set(
			'hintContent',
			`${zone.src.properties.name}: ${zone.src.properties.price}р`
		);
		zone.poly.options.set('fillColor', zone.src.properties.fillColor);
		dispatch('change');
	}
</script>

<div class="delivery-zone-editor">
	<form class="delivery-zone-editor__form">
		<div class="flex flex-col gap-3">
			<label class="flex flex-col">
				Название
				<input
					class="delivery-zone-editor__input"
					type="text"
					bind:value={zone.src.properties.name}
				/>
			</label>
			<label class="flex flex-col">
				Цена
				<input
					class="delivery-zone-editor__input"
					type="number"
					bind:value={zone.src.properties.price}
				/>
			</label>
			<label class="flex flex-col">
				Цвет
				<input
					class="delivery-zone-editor__input-color"
					type="color"
					bind:value={zone.src.properties.fillColor}
				/>
			</label>
		</div>
		<div class="flex flex-col gap-3">
			<button class="delivery-zone-editor__btn" on:click={() => dispatch('remove')}
				>Удалить зону</button
			>
		</div>
	</form>
</div>

<style lang="postcss">
	.delivery-zone-editor {
		background: rgba(255, 255, 255, 0.9);
		height: 100%;
		padding: 20px;
		border-left: 2px solid var(--primary);
		&__form {
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: space-between;
		}
		&__input {
			border: 1px solid black;
			border-radius: 5px;
			padding: 5px;
		}
		&__input-color {
			border: 1px solid black;
			border-radius: 5px;
			width: 100%;
		}
		&__btn {
			background: var(--primary);
			padding: 5px;
			border-radius: 5px;
		}
	}
</style>
