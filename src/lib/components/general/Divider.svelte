<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<div class="divider">
	<div class="divider__icon-wrapper">
		<Icon iconId="hm-logo" width={27} height={13} />
	</div>
</div>

<style lang="postcss">
	.divider {
		display: flex;
		align-items: center;
		justify-content: center;

		&::before,
		&::after {
			content: '';
			width: 38%;
			height: 1px;
			background-color: #d0d0d0;
		}

		&__icon-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
		}
	}
</style>
