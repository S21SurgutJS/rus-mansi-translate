<script>
	import Letter from './Letter.svelte'
	import Shift from './SystemKey/Shift.svelte'
	import Backspace from './SystemKey/Backspace.svelte'
	import SystemLineKeyboard from './SystemLineKeyboard.svelte'

	let {
		    searchValue = $bindable(),
		    taskTranslation = $bindable(),
            openKeyboard,
		    toggleSwitchLanguage,
		    addValueToTextArea,
		    toggleSwitchToSymbols,
		    toggleCaps,
	    } = $props()

	let mansyLetter = [
		'ъ',
		'ё̄',
		'ӯ',
		'ē',
		'ӈ',
		'ӣ',
		'ы̄',
		'а̄',
		'о̄',
		'э̄',
		'я̄',
		'ю̄',
		// 'ё'
	]
	let lettersFirstLine = [
		'ё',
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
		// 'ъ'
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

	function removeLetter (task) {
        let letter = ''
		// if (letter === ' ') {
		// 	task = task.slice(0,
		// 		-1)
		// } else if (mansyLetter.indexOf(letter) !== -1) {
		// 	task = task.slice(0,
		// 		-2)
		// } else {
		// 	task = task.slice(0,
		// 		-1)
		// }
        if (searchValue) {
            letter = searchValue.slice(-1)

	        if (letter === ' ') {
		        searchValue = searchValue.slice(0,
			        -1)
	        } else if (mansyLetter.indexOf(letter) !== -1) {
		        searchValue = searchValue.slice(0,
			        -2)
	        } else {
		        searchValue = searchValue.slice(0,
			        -1)
	        }
		} else {
	        letter = taskTranslation.slice(-1)

	       if (letter === ' ') {
			        taskTranslation = taskTranslation.slice(0,
				        -1)
		        } else if (mansyLetter.indexOf(letter) !== -1) {
			        taskTranslation = taskTranslation.slice(0,
				        -2)
		        } else {
			        taskTranslation = taskTranslation.slice(0,
				        -1)
		        }
            }

	}

</script>

<div class="mansyKeyboard flex flex-col justify-center">

    <div class="mansyLine flex items-center justify-center">
        {#each mansyLetter as item}
            <Letter {item} {addValueToTextArea}/>
        {/each}
    </div>

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
        <Backspace {removeLetter} {taskTranslation} {searchValue}/>
    </div>

    <SystemLineKeyboard {openKeyboard} {toggleSwitchLanguage} {toggleSwitchToSymbols} {addValueToTextArea}/>
</div>
<style>
    .firstLine, .secondLine, .thirdLine, .mansyLine {
        gap: 3px;
    }

    .mansyKeyboard {
        gap: 5px;
        padding: 4px;
        /*width: 375px;*/
        height: 214px;
        background: #e8eaed;
    }
</style>
