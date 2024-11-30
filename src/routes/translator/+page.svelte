<script lang="ts">
	import Divider from '$lib/components/general/Divider.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import LanguageToggler from '$lib/components/LanguageToggler.svelte';
	import { BaseApi } from '$lib/plugins/api/modules';
	import { fade } from 'svelte/transition';

	let searchValue = $state('');
	let translateValue = $state('');
	let language = $state('');
	let isLoading = $state(false);

	const customFetch = new BaseApi(fetch);

	async function translate() {
		const sourceLanguage = language === 'ru' ? 'rus_Cyrl' : 'mancy_Cyrl';
		const targetLanguage = language === 'ru' ? 'mancy_Cyrl' : 'rus_Cyrl';

		isLoading = true;

		const res = await customFetch.proxyFetch({
			text: searchValue,
			sourceLanguage,
			targetLanguage
		});
		isLoading = false;
		console.log(res.ok);
		translateValue = res.translatedText;
	}

	function reset() {
		searchValue = '';
		translateValue = '';
	}
</script>

<div class="translator">
	<header class="translator__header">
		<LanguageToggler bind:language {reset} />
	</header>
	<div class="translator__container container">
		<main class="translator__main">
			<form class="translator__form">
				<label class="translator__label">
					<textarea
						bind:value={searchValue}
						class="translator__textarea"
						placeholder="Введите текст"
					></textarea>
					<span class="visually-hidden">Введите текст для перевода</span>
				</label>
				{#if searchValue}
					<button class="translator__button" type="button" transition:fade onclick={translate}>
						<Icon iconId="right-arrow" width={27} height={25} />
						<span class="visually-hidden">Перевести</span>
					</button>
				{/if}
				<button class="translator__reset" type="button" onclick={reset}>
					<Icon iconId="cross" width={24} height={24} />
					<span class="visually-hidden">Очистить окно</span>
				</button>
			</form>
			<Divider />
			<p class="translator__result">{translateValue}</p>
		</main>
	</div>
	<Footer />
</div>

<style lang="postcss">
	.translator {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		height: 100vh;

		background-image: radial-gradient(
				at 99.11293262513044% 46.43232786340985%,
				hsla(0, 57.67195767195767%, 37.05882352941177%, 1) 0%,
				hsla(0, 57.67195767195767%, 37.05882352941177%, 0) 100%
			),
			radial-gradient(
				at 37.09849543078019% 41.927324850067805%,
				hsla(194.69387755102042, 44.144144144144136%, 21.764705882352942%, 1) 0%,
				hsla(194.69387755102042, 44.144144144144136%, 21.764705882352942%, 0) 100%
			),
			radial-gradient(
				at 1.8345066091675077% 55.22002448610755%,
				hsla(128.57142857142858, 34.99999999999999%, 23.52941176470588%, 1) 0%,
				hsla(128.57142857142858, 34.99999999999999%, 23.52941176470588%, 0) 100%
			),
			radial-gradient(
				at 96.3192387289689% 70.54505863696747%,
				hsla(23.84615384615384, 40.206185567010316%, 38.03921568627451%, 1) 0%,
				hsla(23.84615384615384, 40.206185567010316%, 38.03921568627451%, 0) 100%
			),
			radial-gradient(
				at 57.56247481410588% 4.45178066154619%,
				hsla(33.96226415094339, 72.6027397260274%, 42.94117647058824%, 1) 0%,
				hsla(33.96226415094339, 72.6027397260274%, 42.94117647058824%, 0) 100%
			),
			radial-gradient(
				at 86.60266980982459% 65.3320114933279%,
				hsla(0, 57.67195767195767%, 37.05882352941177%, 1) 0%,
				hsla(0, 57.67195767195767%, 37.05882352941177%, 0) 100%
			),
			radial-gradient(
				at 66.28004718355518% 52.297287086274146%,
				hsla(194.69387755102042, 44.144144144144136%, 21.764705882352942%, 1) 0%,
				hsla(194.69387755102042, 44.144144144144136%, 21.764705882352942%, 0) 100%
			),
			radial-gradient(
				at 21.991722964045145% 26.549432513155047%,
				hsla(128.57142857142858, 34.99999999999999%, 23.52941176470588%, 1) 0%,
				hsla(128.57142857142858, 34.99999999999999%, 23.52941176470588%, 0) 100%
			),
			radial-gradient(
				at 40.22948936091082% 22.24130418812773%,
				hsla(23.84615384615384, 40.206185567010316%, 38.03921568627451%, 1) 0%,
				hsla(23.84615384615384, 40.206185567010316%, 38.03921568627451%, 0) 100%
			),
			radial-gradient(
				at 65.91116707604195% 87.65678640360149%,
				hsla(33.96226415094339, 72.6027397260274%, 42.94117647058824%, 1) 0%,
				hsla(33.96226415094339, 72.6027397260274%, 42.94117647058824%, 0) 100%
			),
			radial-gradient(
				at 29.392354655473607% 7.0441099272863905%,
				hsla(0, 57.67195767195767%, 37.05882352941177%, 1) 0%,
				hsla(0, 57.67195767195767%, 37.05882352941177%, 0) 100%
			),
			radial-gradient(
				at 10.070092600065905% 81.7587757790269%,
				hsla(194.69387755102042, 44.144144144144136%, 21.764705882352942%, 1) 0%,
				hsla(194.69387755102042, 44.144144144144136%, 21.764705882352942%, 0) 100%
			);

		&__container {
			max-width: 370px;
			margin-right: auto;
			margin-left: auto;
		}

		&__header {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 15px;

			background-color: white;
		}

		&__main {
			position: relative;

			background-color: white;
			border-radius: 0 0 11px 11px;

			&::before {
				position: absolute;
				top: 0;
				left: -11px;
				content: '';

				width: 11px;
				height: 11px;

				background-image: url('icons/left-angle.svg');
				background-size: cover;

				transform: translate(1px, -1px);

				z-index: 100;
			}

			&::after {
				position: absolute;
				top: 0;
				right: -11px;
				content: '';

				width: 11px;
				height: 11px;

				background-image: url('icons/right-angle.svg');
				background-size: cover;
				transform: translate(-1px, -1px);
			}
		}

		&__form {
			position: relative;

			border-radius: 0 0 11px 11px;
			overflow: hidden;
		}

		&__label {
			position: relative;

			display: block;
		}

		&__textarea {
			width: 100%;
			min-height: 250px;
			padding: 20px;

			font-family: 'PT-Sans', sans-serif;
			font-size: 20px;
			font-weight: 400;
			color: var(--black);

			resize: none;

			&::placeholder {
				color: #c3c3c3;
			}

			&:focus {
				outline: none;
			}
		}

		&__button {
			position: absolute;
			right: 20px;
			bottom: 14px;
		}

		&__reset {
			position: absolute;
			right: 20px;
			top: 3px;
		}

		&__result {
			width: 100%;
			min-height: 250px;
			padding: 20px 20px;

			font-size: 20px;
			font-weight: 400;
			color: var(--black);
		}
	}
</style>
