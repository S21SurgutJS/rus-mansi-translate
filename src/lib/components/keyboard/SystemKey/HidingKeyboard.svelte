<script>
    let {openKeyboard} = $props()
</script>

<button class="hidingKeyboard flex items-center justify-center" on:click={()=>openKeyboard('close')}>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve"><g><g id="keyboard-hide"><path d="M459,0H51C22.95,0,0,22.95,0,51v255c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M229.5,76.5h51v51h-51V76.5z M229.5,153h51v51h-51V153z M153,76.5h51v51h-51V76.5z M153,153h51v51h-51V153z M127.5,204h-51v-51 h51V204z M127.5,127.5h-51v-51h51V127.5z M357,306H153v-51h204V306z M357,204h-51v-51h51V204z M357,127.5h-51v-51h51V127.5z M433.5,204h-51v-51h51V204z M433.5,127.5h-51v-51h51V127.5z M255,510l102-102H153L255,510z" fill="rgb(71, 71, 71)"></path></g></g></svg>
</button>


<style>
    .hidingKeyboard {
        padding: 4px;
        width: 40px;
        height: 40px;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.27);
        background: #ccced5;
    }
</style>
