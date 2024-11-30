<script lang="ts">
	import AdminModal from '../AdminModal.svelte';
	import Button from '../form/Button.svelte';
	import NCInput from '$lib/components/form/NCInput.svelte';
	import type { UpdateCategoryDto } from '@ddsgt_mono/lib';
	import { CategoriesApi } from '$lib/plugins/api/modules/categories';
	import { createEventDispatcher, onMount } from 'svelte';
	import { notification } from '$lib/stores/notifyStore';
	import { ApiError } from '$lib/plugins/api';

	export let categoriesData: Partial<UpdateCategoryDto>;

	const categoriesDataClone = structuredClone(categoriesData);
	const dispatch = createEventDispatcher();

	let errors: Record<string, string[]> | undefined = undefined;
	let categoriesApi: CategoriesApi;

	onMount(() => {
		categoriesApi = new CategoriesApi(fetch);
	});

	async function onSubmit() {
		if (!categoriesDataClone) {
			return;
		}

		try {
			if (categoriesDataClone.id) {
				const res = await categoriesApi.updateCategory({
					id: categoriesDataClone.id,
					name: categoriesDataClone.name,
					order: categoriesDataClone.order
				});
				notification.success(`Категория: ${res.name} успешно обновлена!`);
			} else {
				const res = await categoriesApi.createCategory({
					name: categoriesDataClone.name,
					order: categoriesDataClone.order
				});
				notification.success(`Категория: ${res.name} успешно добавлена!`);
			}
			dispatch('refresh');
		} catch (error) {
			if (error instanceof ApiError) {
				errors = error.body.errors;
				notification.error('Error!');
			}
		}
	}

	async function onDelete(id: number | undefined) {
		if (id === undefined) {
			return;
		}
		try {
			const res = await categoriesApi.deleteCategory({ id });
			dispatch('refresh');
			notification.success(`Категория: ${res.name} успешно удалена!`);
		} catch (error) {
			notification.error('Error!');
		}
		console.log(id);
	}
</script>

<AdminModal on:close>
	<div class="modal">
		<h2 class="modal__title">{categoriesDataClone.id ? 'Редактирование' : 'Создание'} категории</h2>
		<form class="modal__form">
			<NCInput
				label="Название"
				type="text"
				bind:value={categoriesDataClone.name}
				error={errors?.name}
			/>
			<NCInput
				label="Сортировка (Чем больше, тем первее)"
				type="number"
				bind:value={categoriesDataClone.order}
				error={errors?.order}
			/>
			<div class="modal__buttons">
				<Button on:click={onSubmit} size="medium" primary>Сохранить</Button>
				{#if categoriesDataClone.id}
					<Button on:click={() => onDelete(categoriesDataClone?.id)} size="medium">Удалить</Button>
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
		}
	}
</style>
