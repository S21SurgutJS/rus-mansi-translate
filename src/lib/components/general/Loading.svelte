<script lang="ts">
	export let size: number = 50;
</script>

<span class="loader" style:width={size + 'px'} style:height={size + 'px'}> </span>

<style lang="postcss">
	.loader {
		border: 5px solid gray;
		border-bottom-color: #519eaf;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
