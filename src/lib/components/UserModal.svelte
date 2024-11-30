<script>
	import { fade, slide } from 'svelte/transition';
	import Icon from './general/Icon.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// export let idOpenModal = false;

	function onClose() {
		dispatch('close');
	}
</script>

<div class="shadow" transition:fade={{ duration: 150 }}>
	<div class="modal {$$props.class}">
		<button class="modal__btn" on:click={onClose}>
			<Icon iconId="close-cross" width={33} height={33} />
		</button>
		<slot />
	</div>
</div>

<style lang="scss">
	.shadow {
		position: fixed;
		inset: 0;

		display: flex;
		justify-content: center;
		align-items: center;

		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100;
	}
	.modal {
		position: relative;

		width: 580px;
		min-width: 300px;
		padding: 50px 80px;

		background-color: var(--white);
		border-radius: 15px;

		overflow: hidden;
	}
	.modal__btn {
		position: absolute;
		right: 0;
		top: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;

		background-color: var(--light-grey);
		border-radius: 0 0 0 50%;

		transition: all 0.15s ease-in;

		cursor: pointer;
		outline: none;

		&:hover {
			background: var(--grey);
		}
	}
</style>
