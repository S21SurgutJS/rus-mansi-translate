<script>
	let { addValueToTextArea } = $props()
</script>

<button class="spaceBar flex items-center justify-center" onclick={()=>addValueToTextArea(' ')}>
    Пробел
</button>

<style>
    .spaceBar {
        width: 182px;
        height: 40px;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.27);
        background: #ccced5;
        border-radius: 5px;
    }
</style>
