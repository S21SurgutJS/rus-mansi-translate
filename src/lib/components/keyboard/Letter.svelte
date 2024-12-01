<script>
	let { item, addValueToTextArea } = $props()
</script>


<button class="letter" on:click={()=>addValueToTextArea(item)}>
    {item}
</button>

<style>
    .letter {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 35px;
        border-radius: 6px;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.27);
        background: #fff;
        text-align: center;
        font-size: 20px;
    }
</style>
