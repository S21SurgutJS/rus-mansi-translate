<script lang="ts">
	import Icon from './general/Icon.svelte';

	type Language = 'ru' | 'mansi';
	let locale: Language = $state('ru');

	function toggleLanguage() {
		if (locale === 'mansi') {
			locale = 'ru';
		} else {
			locale = 'mansi';
		}
	}
</script>

<div class="language-toggler">
	<p class="language-toggler__title">{locale === 'ru' ? 'Русский' : 'Мансийский'}</p>
	<button class="language-toggler__button" onclick={() => toggleLanguage()}>
		<Icon iconId="toggler" width={14} />
	</button>
	<p class="language-toggler__title">{locale === 'ru' ? 'Мансийский' : 'Русский'}</p>
</div>

<style lang="postcss">
	.language-toggler {
		display: grid;
		grid-template-columns: 1fr min-content 1fr;
		align-items: center;
		max-width: 240px;
		height: 35px;
		flex-grow: 1;
		/* padding: 10px; */

		border-radius: 5px;
		box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.25);

		&__title {
			text-align: center;

			font-size: 12px;
			line-height: 1;
			font-family: 'PT-Sans', sans-serif;
			font-weight: 700;
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
