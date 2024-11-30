<script lang="ts">
	let className = '';
	export let iconId: string = '';
	export let width: number = 20;
	export let height: number = width;
	export let fill: string = 'light';
</script>

{#if iconId}
	<svg
		viewBox="0 0 {width} {height}"
		{width}
		{height}
		fill="var(--{fill})"
		class={$$props.class}
	>
		<use xlink:href="/icons/sprite.svg#{iconId}" />
	</svg>
{/if}

<style>
	svg {
		display: block;
		transition: fill 0.5s linear;
	}
</style>
