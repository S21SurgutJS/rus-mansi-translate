<script>
	let { removeLetter, taskTranslation, searchValue} = $props()
    function count () {
		if (taskTranslation) return taskTranslation
        return searchValue
    }

</script>
<button class=" ml-2 backspace flex items-center justify-center" on:click={()=>removeLetter(count())}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 3H7C6.31 3 5.77 3.35 5.41 3.88L0 12L5.41 20.11C5.77 20.64 6.31 21 7 21H22C23.1 21 24 20.1 24 19V5C24 3.9 23.1 3 22 3ZM22 19H7.07L2.4 12L7.06 5H22V19ZM10.41 17L14 13.41L17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59L10.41 17Z"
              fill="rgb(71, 71, 71)"/>
    </svg>
</button>


<style>
    .backspace {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.27);
        background: #ccced5;
    }
</style>
