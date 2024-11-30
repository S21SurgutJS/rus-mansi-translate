<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '../general/Icon.svelte';
	import type { SupplementsWithImage } from '@ddsgt_mono/lib';
	import NumberInput from '$lib/components/form/NumberInput.svelte';

	export let supplement: SupplementsWithImage;
	export let picked: boolean = false;
	export let edit: boolean = false;
	export let price: number = 0;
	export let quantity: number = 0;

	const dispatch = createEventDispatcher();

	function editSupplement() {
		if (edit) {
			console.log('dispatch');
			dispatch('edit');
		} else {
			if (quantity < 3) quantity += 1;
		}
	}
</script>

<li class="supplements__item" class:supplements__item_picked={picked}>
	<button
		class="supplement__button supplement"
		class:supplement_picked={picked}
		on:click={editSupplement}
	>
		<img src={supplement.image.thumbnailUrl} alt={supplement.name} />
		<span class="supplement__name">
			{supplement.name}
		</span>
		<span class:hidden={!edit} class:supplement__edit={edit}>
			<Icon iconId="edit" />
		</span>
	</button>
	<div class="supplements__number-input">
		<NumberInput bind:value={quantity} bgColor="primary" color="light" />
	</div>
</li>

<style lang="postcss">
	.supplements__item {
		position: relative;

		text-align: center;

		&.supplements__item_picked {
			& .supplements__number-input {
				transform: translateY(0);
				opacity: 0.8;
				pointer-events: all;
			}
		}
	}

	.supplements__number-input {
		transform: translateY(30px);
		opacity: 0;
		pointer-events: none;
		transition: all 0.1s ease-in;
		position: absolute;
		z-index: 200;
		left: 1px;
		right: 1px;
		bottom: 1px;
		border-radius: 0 0 10px 10px;
		background: var(--primary);
	}
	.supplement {
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding: 10px;
		height: 100%;

		font-size: 14px;
		line-height: 18px;

		border: 1px solid transparent;
		border-radius: 10px;
		box-shadow: rgba(6, 5, 50, 0.12) 0 4px 20px;

		transition:
			box-shadow 0.1s linear,
			background 0.1s ease-in;
		cursor: pointer;

		&:after {
			content: 'Выбрано';
			position: absolute;
			width: 100%;
			height: 100%;
			background: #c6ffbca6;
			top: 0;
			left: 0;
			border-radius: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			font-weight: bold;
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.1s ease-in;
			z-index: 1;
		}

		&.supplement_picked {
			border: 1px dashed #4eb74e;

			&:after {
				opacity: 1;
			}
		}

		&:hover {
			box-shadow: rgba(16, 5, 50, 0.12) 0 1px 5px;

			& .supplement__edit {
				background-color: var(--grey);
			}
		}
	}

	/* .supplement_picked .supplements__number-input {
		transform: translateY(0);
		opacity: 1;
		pointer-events: all;
	} */
	.supplement__name {
		margin-top: auto;
		margin-bottom: 10px;
		font-weight: 700;
	}

	.supplement__edit {
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
