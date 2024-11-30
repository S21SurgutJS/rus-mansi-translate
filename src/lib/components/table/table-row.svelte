<script lang="ts">
	export let answered: boolean = false;
	export let hover: boolean = false;
</script>

<tr
	class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted {$$props.class}"
	on:click
	on:keydown
	class:answered
	class:hover
>
	<slot />
</tr>

<style lang="scss">
	// :global(tr:hover [data-hidden='true']) {
	// 	opacity: 1;
	// 	transition: opacity 0.7s ease-in-out;
	// }
	.hover:hover {
		background-color: #eaeaea;
	}

	.row_grid {
		display: grid;
		grid-gap: 15px;
		grid-template-columns: 150px 170px 170px auto;
	}

	.answered {
		background-color: var(--danger) !important;
		color: var(--white);
	}
</style>
