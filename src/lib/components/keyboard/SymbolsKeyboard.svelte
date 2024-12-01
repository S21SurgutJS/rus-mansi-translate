<script>
	import Letter from './Letter.svelte'
	import Shift from './SystemKey/Shift.svelte'
	import Backspace from './SystemKey/Backspace.svelte'
	import SystemLineKeyboard from './SystemLineKeyboard.svelte'

	let {
		    data = $bindable(),
		    taskTranslation = $bindable(),
		    openKeyboard,
		    translate,
		    toggleSwitchLanguage,
		    addValueToTextArea,
		    toggleSwitchToSymbols,
		    toggleCaps,
	    } = $props()

	let lettersFirstLine = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'-',
		'=',
	]

	let lettersSecondLine = [
		'@',
		'#',
		'$',
		'_',
		'&',
		'-',
		'+',
		'(',
		')',
        ',',
        '.'
	]

	let lettersThirdLine = [
		'*',
		'"',
		'\'',
		':',
		';',
		'!',
		'?',
	]

	function removeLetter () {
		data.textAreaValue = data.textAreaValue.slice(0,
			-1)
	}
</script>


<div class="mansyKeyboard flex flex-col justify-center">


    <div class="firstLine flex items-center justify-center">
        {#each lettersFirstLine as item}
            <Letter {item} {addValueToTextArea}/>
        {/each}
    </div>
    <div class="secondLine flex items-center justify-center">
        {#each lettersSecondLine as item}
            <Letter {item} {addValueToTextArea}/>
        {/each}
    </div>
    <div class="thirdLine flex items-center justify-center">
        <Shift {toggleCaps}/>
        {#each lettersThirdLine as item}
            <Letter {item} {addValueToTextArea}/>
        {/each}
        <Backspace {removeLetter}/>
    </div>
    <SystemLineKeyboard bind:data {translate} {openKeyboard} {toggleSwitchLanguage} {toggleSwitchToSymbols} {addValueToTextArea}/>

</div>
<style>
    .firstLine, .secondLine, .thirdLine {
        gap: 6px;
    }

    .mansyKeyboard {
        gap: 5px;
        padding: 4px;
        height: 225px;
        background: #e8eaed;
    }
</style>
