<script lang="ts">
	export let size: number = 45;
	export let schema: 'primary' | 'secondary' = 'primary';
</script>

<div class="loading">
	<div
		class={`lds-ring lds-ring_${schema}`}
		style:width={size + 'px'}
		style:height={size + 'px'}
	>
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="loading__label">
		<slot />
	</div>
</div>

<style lang="scss">
	.loading {
		display: block;
		align-items: center;
		width: fit-content;
	}

	.lds-ring {
		display: inline-block;
		position: relative;
		width: 32px;
		height: 32px;
		vertical-align: top;
	}

	.lds-ring_primary {
		border-color: var(--primary) transparent transparent transparent;
	}

	.lds-ring_secondary {
		border-color: var(--secondary) transparent transparent transparent;
	}

	//noinspection CssReplaceWithShorthandSafely
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		border: 2px solid;
		border-color: inherit;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	}

	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}

	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}

	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.loading__label:not(:empty) {
		margin-left: 7px;
	}
</style>
