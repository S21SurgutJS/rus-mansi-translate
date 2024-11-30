<script lang="ts">
	export let hidden = false;
</script>

<td
	class="p-4 align-middle [&:has([role=checkbox])]:pr-0 {$$props.class || ''} buttton_hidden"
	on:click
	on:keydown
	data-hidden={hidden}
>
	<slot />
</td>

<style lang="scss">
	[data-hidden='true'] {
		opacity: 0;
	}
</style>
