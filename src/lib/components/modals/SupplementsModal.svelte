<script lang="ts">
	import AdminModal from '../AdminModal.svelte';
	import Button from '../form/Button.svelte';
	import NCInput from '$lib/components/form/NCInput.svelte';
	import type { SupplementsWithImage, UpdateSupplementDto } from '@ddsgt_mono/lib';
	import { SupplementsApi } from '$lib/plugins/api/modules/supplements';
	import { createEventDispatcher, onMount } from 'svelte';
	import { notification } from '$lib/stores/notifyStore';
	import { ApiError } from '$lib/plugins/api';
	import UploadPhoto from '../uploads/UploadPhoto.svelte';

	export let supplementData: Partial<SupplementsWithImage>;

	const supplementsDataClone = structuredClone(supplementData);
	const dispatch = createEventDispatcher();

	let errors: Record<string, string[]> | undefined = undefined;
	let supplementsApi: SupplementsApi;

	onMount(() => {
		supplementsApi = new SupplementsApi(fetch);
	});

	async function onSubmit() {
		if (!supplementsDataClone) {
			return;
		}

		try {
			if (supplementsDataClone.id) {
				const res = await supplementsApi.updateSupplement({
					id: supplementsDataClone.id,
					name: supplementsDataClone.name,
					imageId: supplementsDataClone.image?.id,
					price: supplementsDataClone.price
				});
				notification.success(`Категория: ${res.name} успешно обновлена!`);
			} else {
				const res = await supplementsApi.createSupplement({
					name: supplementsDataClone.name,
					imageId: supplementsDataClone.image?.id,
					price: supplementsDataClone.price
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
			const res = await supplementsApi.deleteSupplement({ id });
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
		<h2 class="modal__title">
			{supplementsDataClone.id ? 'Редактирование' : 'Создание'} добавки
		</h2>
		<UploadPhoto
			bind:photo={supplementsDataClone.image}
			class="w-[40%] mx-auto"
			accept={['jpg', 'jpeg', 'png', 'webp']}
			title="Загрузите изображение"
			subtitle="формат файлов .jpg, .jpeg, .png или .webp до 1 МБ"
			on:remove={() => (supplementsDataClone.image = undefined)}
			errors={errors?.imageId}
		/>
		<form class="modal__form">
			<NCInput
				label="Название"
				type="text"
				bind:value={supplementsDataClone.name}
				error={errors?.name}
			/>

			<NCInput
				label="Цена"
				type="number"
				bind:value={supplementsDataClone.price}
				error={errors?.price}
			/>
			<div class="modal__buttons">
				<Button on:click={onSubmit} size="medium" primary>Сохранить</Button>
				{#if supplementsDataClone.id}
					<Button on:click={() => onDelete(supplementsDataClone?.id)} size="medium">Удалить</Button>
				{/if}
			</div>
		</form>
	</div>
</AdminModal>

<style lang="postcss">
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
