<script lang="ts">
	import type { AttributesDto } from '@ddsgt_mono/lib';
	import AdminModal from '../AdminModal.svelte';
	import Button from '../form/Button.svelte';
	import NcInput from '../form/NCInput.svelte';
	import { AttributesApi } from '$lib/plugins/api/modules/attributes';
	import { createEventDispatcher, onMount } from 'svelte';
	import Icon from '../general/Icon.svelte';
	import AdminAction from '../admin/AdminAction.svelte';
	import { ApiError } from '$lib/plugins/api';
	import { notification } from '$lib/stores/notifyStore';

	export let attributesData: AttributesDto;

	let errors: Record<string, string[]> | undefined = undefined;
	let attributesApi: AttributesApi;

	let attributesDataClone = structuredClone(attributesData);
	const dispatch = createEventDispatcher();

	onMount(() => {
		attributesApi = new AttributesApi(fetch);
	});

	function addOption() {
		attributesDataClone.type?.options.push('');
		attributesDataClone = attributesDataClone;
	}

	function deleteOption(idx: number) {
		attributesDataClone.type?.options.splice(idx, 1);
		attributesDataClone = attributesDataClone;
	}

	async function onSubmit() {
		if (!attributesDataClone) return;

		try {
			if (attributesDataClone.id) {
				const res: AttributesDto = await attributesApi.updateAttribute({
					id: attributesDataClone.id,
					name: attributesDataClone.name,
					type: {
						name: 'select',
						options: attributesDataClone.type.options
					},
					unit: null
				});
				notification.success(`Атрибут: ${res.name} успешно обновлен`);
			} else {
				const res: AttributesDto = await attributesApi.createAttribute({
					name: attributesDataClone.name,
					type: {
						name: 'select',
						options: attributesDataClone.type.options
					},
					unit: null
				});
				notification.success(`Атрибут: ${res.name} успешно добавлен`);
			}
			dispatch('refresh');
		} catch (error) {
			if (error instanceof ApiError) {
				errors = error.body.errors;
				notification.error('Что-то пошло не так ;(');
			}
		}
	}

	async function onDelete(id: number | undefined) {
		if (id === undefined) return;

		try {
			const res = await attributesApi.deleteAttribute({ id });
			notification.success(`Атрибут: ${res.name} успешно удален`);
			dispatch('refresh');
		} catch (error) {
			if (error instanceof ApiError) {
				errors = error.body.errors;
				notification.error('Что-то пошло не так ;(');
			}
		}
	}
</script>

<AdminModal on:close>
	<div class="modal">
		<h2 class="modal__title">
			{attributesDataClone.id ? 'Редактирование атрибута' : 'Добавление нового атрибута'}
		</h2>
		<form class="modal__form">
			<NcInput
				label="Название"
				type="text"
				bind:value={attributesDataClone.name}
				error={errors?.name}
			/>
			{#if attributesDataClone.type?.options.length > 0}
				{#each attributesDataClone.type?.options as option, idx}
					<div class="modal__options items-baseline">
						<NcInput
							label="Вариант {idx + 1}"
							type="text"
							class="w-full"
							bind:value={option}
							error={errors?.name}
						/>
						<button class="modal__options-remove" on:click={() => deleteOption(idx)}>
							<Icon iconId="cross" fill="logout-color" />
						</button>
					</div>
				{/each}
			{/if}
			<AdminAction text="Добавить вариант" iconPlus={false} on:click={addOption} />
			<div class="modal__buttons">
				<Button on:click={onSubmit} size="medium" primary>Сохранить</Button>
				{#if attributesDataClone.id}
					<Button on:click={() => onDelete(attributesDataClone?.id)} size="medium">Удалить</Button>
				{/if}
			</div>
		</form>
	</div>
</AdminModal>

<style lang="scss">
	.modal {
		display: flex;
		flex-direction: column;
		gap: 20px;

		&__title {
			font-size: 24px;
			line-height: 115%;
			font-weight: 700;
		}

		&__buttons {
			display: flex;
			justify-content: space-between;
			gap: 10px;
			margin-top: 1rem !important;
		}

		&__options {
			display: flex;
			justify-content: space-between;
			gap: 10px;
		}

		&__options-remove:hover {
			:global(svg) {
				fill: var(--primary);
			}
		}
	}
</style>
