<script>
	let { data = $bindable(), searchValue= $bindable(), value, openKeyboard } = $props()
</script>


<textarea
        bind:value
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
</style>
