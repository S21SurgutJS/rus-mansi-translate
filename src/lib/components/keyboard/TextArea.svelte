<script>
	let { data = $bindable(), taskTranslation = $bindable(), searchValue= $bindable(), value, classForTextArea, openKeyboard } = $props()

    function generateClass () {
		if (classForTextArea) {
			return classForTextArea
        }
		return "translator__textarea"
    }
</script>


<textarea
        bind:value
        class={generateClass()}
        placeholder="Введите текст"
        onclick={()=>openKeyboard()}
        readonly
></textarea>

<style>
    .translator__textarea {
        width: 100%;
        min-height: 250px;
        padding: 20px;

        font-family: 'PT-Sans', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: var(--black);

        resize: none;
    }

    .task__textarea {
        width: 100%;
        min-height: 150px;
        padding: 20px;

        font-family: 'PT-Sans', sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: var(--black);

        resize: none;

    }
</style>
