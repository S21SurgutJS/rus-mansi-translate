<script>
	let { toggleSwitchToSymbols } = $props()
</script>

<button class="switchToNumbers flex items-center justify-center p-1" onclick={() => {toggleSwitchToSymbols()}}>
    123
</button>

<style>
    .switchToNumbers {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.27);
        background: #ccced5;
    }
</style>
