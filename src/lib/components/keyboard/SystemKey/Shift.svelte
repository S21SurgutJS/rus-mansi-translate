<script>
	let { toggleCaps } = $props()
</script>

<button class=" mr-2 backspace flex items-center justify-center" onclick={()=>toggleCaps()}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6821 2.78863C12.3052 2.40379 11.6948 2.40379 11.3179 2.78863L2.78466 11.5052C2.17675 12.1266 2.60693 13.1893 3.46679 13.1893H6.49999V20.4778C6.49999 21.0423 6.94775 21.5 7.49999 21.5H16.5C17.0522 21.5 17.5 21.0423 17.5 20.4778V13.1893H20.5332C21.3931 13.1893 21.8232 12.1266 21.2153 11.5052L12.6821 2.78863Z"
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
