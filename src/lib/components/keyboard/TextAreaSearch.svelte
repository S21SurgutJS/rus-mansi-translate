<script>
	let { data = $bindable(), taskTranslation = $bindable(), searchValue=$bindable(), value, classForTextArea, openKeyboard } = $props()

</script>

    <textarea
            bind:value={searchValue}
            class="translator__textarea"
            placeholder="Введите текст"
            onclick={()=>openKeyboard()}
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
