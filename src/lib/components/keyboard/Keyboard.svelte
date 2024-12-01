<script>
	import MansyKeyboard from './MansyKeyboard.svelte'
	import SymbolsKeyboard from './SymbolsKeyboard.svelte'
	import RussianKeyboard from './RussianKeyboard.svelte'

	let { data = $bindable(), taskTranslation=$bindable(), translate, searchValue=$bindable(), openKeyboard } = $props()

	function addValueToTextArea (value) {
		if (data.caps) {
			data.textAreaValue += value.toUpperCase()
            searchValue += value.toUpperCase()
		} else {
			data.textAreaValue += value.toLowerCase()
            searchValue += value.toLowerCase()
		}
	}

	function toggleCaps () {
		data.caps = !data.caps
	}

	function toggleSwitchLanguage () {
		console.log(data.keyboard)
		if (data.keyboard === 'mansy') {
			data.keyboard = data.keyboardValues[2]
		} else {
			data.keyboard = data.keyboardValues[1]
		}
	}

	function toggleSwitchToSymbols () {
		console.log(data.keyboard)
		console.log(data.symbols)

		let count = data.keyboard

		if (count === data.keyboardValues[1] && data.symbols === '') {
			data.keyboard = data.keyboardValues[3]
			data.symbols = count
			return 1
		}
		if (count === data.keyboardValues[2] && data.symbols === '') {
			data.keyboard = data.keyboardValues[3]
			data.symbols = count
			return 1
		}
		if ((count === data.keyboardValues[3] || data.symbols === data.keyboardValues[3]) && data.symbols ===
			data.keyboardValues[1]) {
			data.keyboard = data.keyboardValues[1]
			data.symbols = ''
		}
		if ((count === data.keyboardValues[3] || data.keyboardValues[3]) && data.symbols === data.keyboardValues[2]) {
			data.keyboard = data.keyboardValues[2]
			data.symbols = ''
		}

	}


</script>

<div class="keyboardFrame">
    {#if data.keyboard === 'mansy'}
        <MansyKeyboard bind:data {openKeyboard} {toggleSwitchLanguage} {addValueToTextArea} {toggleSwitchToSymbols}
                       {toggleCaps}/>
    {:else if data.keyboard === 'rus'}
        <RussianKeyboard bind:data {openKeyboard} {toggleSwitchLanguage} {addValueToTextArea} {toggleSwitchToSymbols}
                         {toggleCaps}/>
    {:else}
        <SymbolsKeyboard bind:data {translate} {openKeyboard} {toggleSwitchLanguage} {addValueToTextArea} {toggleSwitchToSymbols}
                         {toggleCaps}/>
    {/if}
</div>


<style>
    .keyboardFrame {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>
