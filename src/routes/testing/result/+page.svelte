<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/general/Footer.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import { answers } from '$lib/stores/answerStore';
	import { settings } from '$lib/stores/settingsStore';

	const result = $answers;
	console.log(result);
	console.log(result);

	let estimation = 0;

	result.forEach((item) => {
		if (item.correct) estimation++;
	}, 0);
</script>

<div class="result">
	<header class="result__header">
		<h1 class="result__title">Итоги:</h1>
	</header>
	<div class="result__container">
		<main class="result__main">
			<div class="result__wrapper">
				<p class="result__description">Твой результат:</p>
				<p class="result__estimation">{estimation} из {result.length}</p>
				<p class="result__congratulation">Ты большой молодец, продолжай в том же духе!</p>
				<ul class="result__list">
					{#each result as item, idx}
						<li class="result__item item">
							<p class="item__number">{idx + 1}</p>
							<div class="result__wrapper">
								<p class="item__word">{item.word} - {item.answer}</p>
								<p class="item__answer">Мой ответ: {item.translation}</p>
							</div>
							{#if item.correct}
								<Icon iconId="correct-answer" width={26} height={19} />
							{:else}
								<Icon iconId="incorrect-answer" width={20} height={20} />
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</main>
	</div>
	<Footer />
</div>

<style lang="postcss">
	.result {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		height: calc(100vh - 60px);

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

		&__list {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}

		&__container {
			width: 370px;
			margin-right: auto;
			margin-left: auto;
		}

		&__wrapper {
			max-width: 320px;
			margin: 0 auto;
		}

		&__language {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			gap: 10px;
			margin-bottom: 60px;
		}

		&__difficulty {
			display: flex;
			flex-direction: column;
			gap: 5px;
			margin-bottom: 100px;
		}

		&__header {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 15px;

			background-color: white;
		}

		&__title {
			font-size: 20px;
			font-weight: 700;
		}

		&__estimation {
			text-align: center;
			font-size: 64px;
			font-weight: 700;
			color: #8cc445;
		}

		&__congratulation {
			margin-bottom: 20px;
			font-size: 20px;
			text-align: center;
		}

		&__description {
			margin-bottom: 20px;

			font-size: 24px;
			font-weight: 700;
			text-align: center;
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 5px;
		}

		&__main {
			position: relative;

			/* height: calc(100% - 20px); */
			padding-top: 100px;
			padding-bottom: 20px;

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

		&__next-button {
			width: 100%;

			&:disabled {
				opacity: 0.5;
			}
		}
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 46px;
		padding: 10px;

		font-size: 20px;
		font-weight: 400;
		color: var(--black);

		box-shadow: inset 0 0 4px 0 #545454;
		border-radius: 12px;

		&__active {
			color: white;
			background-color: #519eaf;
		}
	}

	.item {
		display: grid;
		grid-template-columns: 30px 1fr min-content;
		justify-content: space-between;
		align-items: center;
		gap: 10px;

		&__number {
			font-size: 16px;
			font-weight: 700;
			color: #d0d0d0;
		}

		&__word {
			font-size: 20px;
			line-height: 1;

			font-weight: 700;

			color: #404040;
		}
		&__answer {
			font-size: 14px;
			line-height: 1;
			font-weight: 700;
			color: #959595;
		}
	}
</style>
