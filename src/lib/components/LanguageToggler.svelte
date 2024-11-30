<script lang="ts">
	import Icon from './general/Icon.svelte';
	let { language = $bindable(), reset } = $props();

	function toggleLanguage() {
		if (language === 'mansi') {
			language = 'ru';
		} else {
			language = 'mansi';
		}
		reset();
	}
</script>

<div class="language-toggler">
	<p class="language-toggler__title">{language === 'ru' ? 'Русский' : 'Мансийский'}</p>
	<button class="language-toggler__button" onclick={() => toggleLanguage()}>
		<Icon iconId="toggler" width={20} />
	</button>
	<p class="language-toggler__title">{language === 'ru' ? 'Мансийский' : 'Русский'}</p>
</div>

<style lang="postcss">
	.language-toggler {
		display: grid;
		grid-template-columns: 1fr min-content 1fr;
		align-items: center;
		max-width: 300px;
		min-height: 35px;
		flex-grow: 1;

		border-radius: 5px;
		box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.25);

		&__title {
			text-align: center;

			font-size: 20px;
			line-height: 1;
			font-family: 'PT-Sans', sans-serif;
			font-weight: 400;
		}

		&__button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 100%;
		}
	}
</style>
