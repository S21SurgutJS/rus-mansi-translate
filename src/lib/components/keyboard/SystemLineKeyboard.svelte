<script>
	import HidingKeyboard from './SystemKey/HidingKeyboard.svelte'
	import SwitchToNumbers from './SystemKey/SwitchToNumbers.svelte'
	import SpaceBar from './SystemKey/SpaceBar.svelte'
	import Enter from './SystemKey/Enter.svelte'
	import SwitchLanguage from './SystemKey/SwitchLanguage.svelte'

	let { data = $bindable(), openKeyboard, toggleSwitchLanguage, toggleSwitchToSymbols, addValueToTextArea } = $props()

</script>


<div class="fourthLine flex items-center justify-center">
    <HidingKeyboard {openKeyboard}/>
    <SwitchToNumbers {toggleSwitchToSymbols}/>
    <!--        <Comma />-->
    <SwitchLanguage {toggleSwitchLanguage}/>
    <SpaceBar {addValueToTextArea}/>
    <!--        <Point />-->
    <Enter/>
</div>

<style>
    .fourthLine {
        gap: 4px;
    }
</style>
