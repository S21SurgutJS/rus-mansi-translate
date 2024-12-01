<script>
	import Letter from './Letter.svelte'
	import Shift from './SystemKey/Shift.svelte'
	import Backspace from './SystemKey/Backspace.svelte'
	import SystemLineKeyboard from './SystemLineKeyboard.svelte'

	let {
		    data = $bindable(),
		    taskTranslation = $bindable(),
		    openKeyboard,
		    toggleSwitchLanguage,
		    addValueToTextArea,
		    toggleSwitchToSymbols,
		    toggleCaps,
	    } = $props()

	let lettersFirstLine = [
		'й',
		'ц',
		'у',
		// 'ӯ',
		'к',
		'е',
		// 'ё',
		// 'ē',
		'н',
		// 'ӈ',
		'г',
		'ш',
		'щ',
		'з',
		'х',
		'ъ',
	]
	let lettersSecondLine = [
		'ф',
		'ы',
		// 'ы̄',
		'в',
		'а',
		// 'а̄',
		'п',
		'р',
		'о',
		// 'о̄',
		'л',
		'д',
		'ж',
		'э',
		// 'э̄'
	]
	let lettersThirdLine = [
		'я',
		// 'я̄',
		'ч',
		'с',
		'м',
		'и',
		// 'ӣ',
		'т',
		'ь',
		'б',
		'ю',
		// 'ю̄'
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
    <SystemLineKeyboard {openKeyboard} {toggleSwitchLanguage} {toggleSwitchToSymbols} {addValueToTextArea}/>

</div>
<style>
    .firstLine, .secondLine, .thirdLine, .fourthLine, .mansyLine {
        gap: 3px;
    }

    .mansyKeyboard {
        gap: 5px;
        padding: 4px;
        /*width: 375px;*/
        height: 225px;
        background: #e8eaed;
    }
</style>
