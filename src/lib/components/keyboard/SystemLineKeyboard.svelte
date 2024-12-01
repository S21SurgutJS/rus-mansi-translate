<script>
	import HidingKeyboard from './SystemKey/HidingKeyboard.svelte'
	import SwitchToNumbers from './SystemKey/SwitchToNumbers.svelte'
	import SpaceBar from './SystemKey/SpaceBar.svelte'
	import Enter from './SystemKey/Enter.svelte'
	import SwitchLanguage from './SystemKey/SwitchLanguage.svelte'

	let { data = $bindable(), translate, openKeyboard, toggleSwitchLanguage, toggleSwitchToSymbols, addValueToTextArea } = $props()

</script>


<div class="fourthLine flex items-center justify-center">
    <HidingKeyboard {openKeyboard}/>
    <SwitchToNumbers {toggleSwitchToSymbols}/>
    <SwitchLanguage {toggleSwitchLanguage}/>
    <SpaceBar {addValueToTextArea}/>
    <Enter {translate}/>
</div>

<style>
    .fourthLine {
        gap: 4px;
    }
</style>
