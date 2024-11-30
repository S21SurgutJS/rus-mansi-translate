<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '../general/Icon.svelte';

	export let category: string = '';
	const dispatch = createEventDispatcher();

	function editCategory() {
		dispatch('edit');
	}
</script>

<li class="category__item">
	<button class="category__name link link_dark" on:click={editCategory}>
		<span>
			{category}
		</span>
		<Icon iconId="edit" class="category__edit" />
	</button>
</li>

<style lang="scss">
	.category__item {
		display: flex;
		flex-direction: column;
	}
	.category__name {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px;

		border-bottom: 1px solid var(--light-grey);
	}
</style>
