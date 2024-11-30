<script lang="ts">
	import type { PickPointDto, UpdatePickPointDto } from '@ddsgt_mono/lib';
	import AdminModal from '$lib/components/AdminModal.svelte';
	import NcInput from '$lib/components/form/NCInput.svelte';
	import { PickPointsApi } from '$lib/plugins/api/modules/pick-points';
	import { createEventDispatcher, onMount } from 'svelte';
	import { notification } from '$lib/stores/notifyStore';
	import { ApiError } from '$lib/plugins/api';
	import NcTimePicker from '$lib/components/form/NCTimePicker.svelte';
	import Switch from '$lib/components/form/Switch.svelte';
	import * as Table from '$lib/components/table/index';
	import Button from '$lib/components/form/Button.svelte';
	import { days } from '$lib/assets/ts/weekdays';
	import NcErrorInput from '../form/NCErrorInput.svelte';

	export let pickPointData: PickPointDto;

	const pickPointDataClone = structuredClone(pickPointData);
	const dispatch = createEventDispatcher();

	let errors: Record<string, string[]> | undefined = undefined;
	let pickPointApi: PickPointsApi;

	onMount(() => {
		pickPointApi = new PickPointsApi(fetch);
	});

	async function onSubmit() {
		if (!pickPointDataClone) {
			return;
		}

		try {
			if (pickPointDataClone.id) {
				const res = await pickPointApi.updatePickPoint({
					id: pickPointDataClone.id,
					address: pickPointDataClone.address,
					schedule: pickPointDataClone.schedule,
					isActive: pickPointDataClone.isActive
				});
				notification.success(`Точка выдачи: ${res.address} успешно обновлена!`);
			} else {
				const res = await pickPointApi.createPickPoint({
					address: pickPointDataClone.address,
					schedule: pickPointDataClone.schedule,
					isActive: pickPointDataClone.isActive
				});
				notification.success(`Точка выдачи: ${res.address} успешно добавлена!`);
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
			const res = await pickPointApi.deletePickPoint({ id });
			dispatch('refresh');
			notification.success(`Точка выдачи: ${res.address} успешно удалена!`);
		} catch (error) {
			notification.error('Error!');
		}
	}

	function timeParse(time: string) {
		const [hours, minutes] = time.split(':');
		return { hours: parseInt(hours), minutes: parseInt(minutes) };
	}
</script>

<AdminModal on:close>
	<div class="modal">
		<h2 class="modal__title">{pickPointDataClone.id ? 'Редактирование' : 'Создание'} точки</h2>
		<form class="modal__form">
			<NcInput
				label="Адрес"
				type="text"
				bind:value={pickPointDataClone.address}
				error={errors?.address}
				class="mb-5"
			/>
			<Switch class="mb-5" label="Доступна для заказа" bind:checked={pickPointDataClone.isActive} />
			<h3 class="modal__subtitle">Режим работы</h3>
			<Table.Root class="mb-4" error={errors?.schedule}>
				<Table.Header>
					<Table.Row>
						<Table.Head>День недели</Table.Head>
						<Table.Head class="text-center">Время работы</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each days as day}
						<Table.Row class="hover:border-b-secondary border-b-0">
							<Table.Cell>
								{day.name}
							</Table.Cell>
							<Table.Cell class="flex gap-[20px] justify-center items-center">
								<NcTimePicker bind:timeValue={pickPointDataClone.schedule[day.id][0]} />
								-
								<NcTimePicker bind:timeValue={pickPointDataClone.schedule[day.id][1]} />
							</Table.Cell>
						</Table.Row>
					{/each}
					<Table.Row class="relative">
						<NcErrorInput error={errors?.schedule} />
					</Table.Row>
				</Table.Body>
			</Table.Root>
			<div class="modal__buttons">
				<Button on:click={onSubmit} size="medium" primary>Сохранить</Button>
				{#if pickPointDataClone.id}
					<Button on:click={() => onDelete(pickPointDataClone?.id)} size="medium">Удалить</Button>
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

		&__subtitle {
			// font-family:  serif;
			font-size: 18px;
			line-height: 115%;
			font-weight: 700;
			margin-bottom: 1rem;
		}

		&__buttons {
			display: flex;
			justify-content: space-between;
			gap: 10px;
		}
	}
</style>
