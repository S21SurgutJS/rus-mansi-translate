<script lang="ts">
	import Icon from '../general/Icon.svelte';

	export let text: string;
	export let iconPlus: boolean = true;
</script>

<div class="wrapper">
	<button class="button link link_dark" on:click>
		{#if iconPlus}
			<Icon iconId="plus" />
		{/if}
		{text}
	</button>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
	button {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-right: 0;
		padding-left: 0;

		border-bottom: 2px solid var(--primary);
		border-radius: initial;
	}
</style>
