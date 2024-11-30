<script lang="ts">
	import type { PickPointDto } from '@ddsgt_mono/lib';
	import Icon from '../general/Icon.svelte';
	import { createEventDispatcher } from 'svelte';
	import * as Table from '../table';
	import { days } from '$lib/assets/ts/weekdays';

	export let pickPoint: PickPointDto;
	export let picked: boolean = false;

	const dispatch = createEventDispatcher();

	function editPickPoint() {
		dispatch('edit');
	}
</script>

<li class="pick-points__item">
	<button
		class="pick-point__button pick-point"
		class:pick-point_disabled={!pickPoint.isActive}
		class:pick-point_picked={picked}
		on:click={editPickPoint}
	>
		<span class="pick-point__name">
			{pickPoint.address}
		</span>
		<span class="pick-point__title">График работы:</span>
		<span class="pick-point__schedule">
			<Table.Root class="mb-4">
				<Table.Body>
					{#each days as day}
						<Table.Row class="hover:border-b-secondary border-b-0">
							<Table.Cell class="text-left">
								{day.name}
							</Table.Cell>
							<Table.Cell class="flex gap-[20px] justify-center items-center">
								{pickPoint.schedule[day.id][0]}
								-
								{pickPoint.schedule[day.id][1]}
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</span>
		<span class="pick-point__edit">
			<Icon iconId="edit" />
		</span>
	</button>
</li>

<style lang="scss">
	.pick-point {
		position: relative;

		display: flex;
		flex-direction: column;
		padding: 10px;

		font-size: 14px;
		line-height: 18px;

		border: 1px solid transparent;
		border-radius: 10px;
		box-shadow: rgba(6, 5, 50, 0.12) 0 4px 20px;

		transition:
			box-shadow 0.1s linear,
			background 0.1s ease-in;
		cursor: pointer;

		&:hover {
			box-shadow: rgba(16, 5, 50, 0.12) 0 1px 5px;

			& .pick-point__edit {
				background-color: var(--grey);
			}
		}

		&.pick-point_picked {
			background: var(--primary);
		}

		&.pick-point_disabled {
			opacity: 0.5;
			// pointer-events: none;
		}
	}

	.pick-point__name {
		margin-bottom: 10px;
		font-weight: bold;
	}

	.pick-point__title {
		padding-left: 16px;
	}

	.pick-point__button {
		display: flex;
		flex-direction: column;
		gap: 5px;

		width: 100%;
	}

	.pick-point__edit {
		position: absolute;
		top: 0;
		right: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;

		background-color: var(--light-grey);
		border-radius: 0 10px 0 0;

		transition: background-color 0.1s linear;
		pointer-events: all;
	}
</style>
