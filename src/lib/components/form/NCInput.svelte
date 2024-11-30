<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import NCErrorInput from './NCErrorInput.svelte';

	export let type: 'number' | 'password' | 'text' = 'text';
	export let label: string | null = null;
	export let value: unknown = undefined;
	export let min: string | undefined = undefined;
	export let max: string | undefined = undefined;
	export let error: Array<string> | undefined = undefined;

	// const dispatch = createEventDispatcher();

	// function handleInput(event: Event) {
	// 	const input = event.target as HTMLInputElement;
	// 	let newValue: unknown;

	// 	if (type === 'number') {
	// 		newValue = input.value ? parseFloat(input.value) : undefined;
	// 	} else {
	// 		newValue = input.value;
	// 	}

	// 	value = newValue;

	// 	dispatch('input', newValue);
	// }

	// $: {
	// 	console.log(value);
	// }
</script>

<div class="nc-input {$$props.class}">
	{#if type === 'text'}
		<input
			class="nc-input__field"
			type="text"
			class:nc-input_filled={value || value === 0}
			autocomplete="off"
			bind:value
		/>
	{:else if type === 'number'}
		<input
			class="nc-input__field"
			type="number"
			class:nc-input_filled={value || value === 0}
			autocomplete="off"
			{min}
			{max}
			bind:value
		/>
	{:else if type === 'password'}
		<input
			class="nc-input__field"
			type="password"
			class:nc-input_filled={value || value === 0}
			autocomplete="off"
			bind:value
		/>
	{/if}
	{#if label !== null}
		<label class="nc-input__label" for="nc-input">
			{label}
		</label>
	{/if}
	<NCErrorInput {error} />
</div>

<style lang="scss">
	.nc-input {
		position: relative;
		padding-top: 5px;
		padding-bottom: 10px;
		margin-bottom: 10px;

		&__field {
			border: none;
			border-bottom: 1px solid var(--grey);
			appearance: none;
			font-size: 16px;
			width: 100%;
			height: 40px;
			background: none;
			&:focus-visible {
				outline: none;
			}
			&:focus {
				border-bottom: 1px solid var(--primary);
			}
		}
		&__label {
			white-space: nowrap;
			width: 100%;
			color: var(--grey);
			position: absolute;
			left: 0;
			top: 10px;
			transition: all 0.1s linear;
			cursor: text;
			pointer-events: none;
		}
		&__field:focus,
		&_filled {
			& + .nc-input__label {
				font-size: 12px;
				top: -4px;
			}
		}
	}
</style>
