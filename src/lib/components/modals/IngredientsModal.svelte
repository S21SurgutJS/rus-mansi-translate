<script lang="ts">
	import type { IngredientsDto, UpdateIngredientDto } from '@ddsgt_mono/lib';
	import AdminModal from '../AdminModal.svelte';
	import Button from '../form/Button.svelte';
	import NcInput from '../form/NCInput.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { IngredientsApi } from '$lib/plugins/api/modules/ingredients';
	import { notification } from '$lib/stores/notifyStore';
	import { ApiError } from '$lib/plugins/api';

	export let ingredientsData: Partial<IngredientsDto>;

	let errors: Record<string, string[]> | undefined = undefined;
	let ingredientsApi: IngredientsApi;

	const ingredientsDataClone = structuredClone(ingredientsData);
	const dispatch = createEventDispatcher();

	onMount(() => {
		ingredientsApi = new IngredientsApi(fetch);
	});

	async function onSubmit() {
		if (!ingredientsDataClone) {
			return;
		}

		try {
			if (ingredientsDataClone.id) {
				const res: IngredientsDto = await ingredientsApi.updateIngredient({
					id: ingredientsDataClone.id,
					name: ingredientsDataClone.name
				});
				notification.success(`Ингредиент: ${res.name} успешно обновлен`);
			} else {
				const res = await ingredientsApi.createIngredient({
					name: ingredientsDataClone.name
				});
				notification.success(`Ингредиент: ${res.name} успешно добавлен`);
				console.log('notification');
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
		if (id === undefined) {
			return;
		}

		try {
			const res = await ingredientsApi.deleteIngredient({ id });
			notification.success(`Ингредиент: ${res.name} успешно удален`);
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
			{ingredientsDataClone.id ? 'Редактирование ингредиента' : 'Добавление нового ингредиента'}
		</h2>
		<form class="modal__form">
			<NcInput
				label="Название"
				type="text"
				bind:value={ingredientsDataClone.name}
				error={errors?.name}
			/>
			<div class="modal__buttons">
				<Button on:click={onSubmit} size="medium" primary>Сохранить</Button>
				{#if ingredientsDataClone.id}
					<Button on:click={() => onDelete(ingredientsDataClone?.id)} size="medium">Удалить</Button>
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
