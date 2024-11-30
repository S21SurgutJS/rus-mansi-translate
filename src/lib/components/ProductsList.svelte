<script lang="ts">
	import ProductCard from './ProductCard.svelte';

	export let products;
</script>

<div class="products">
	{#each products as product}
		<ProductCard {...product} />
	{/each}
</div>

<style lang="scss">
	.products {
		display: grid;
		grid-gap: 40px;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>
