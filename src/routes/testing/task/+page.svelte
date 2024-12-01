<script lang="ts">
	import { goto } from '$app/navigation';
	import { phrases, proposals, words } from '$lib/assets/data/correctTestData';
	import Divider from '$lib/components/general/Divider.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import { answers } from '$lib/stores/answerStore';
	import { settings } from '$lib/stores/settingsStore';
	import TextArea from '../../../lib/components/keyboard/TextAreaTask.svelte'
	import Keyboard from '../../../lib/components/keyboard/Keyboard.svelte'
	import TextAreaTask from '../../../lib/components/keyboard/TextAreaTask.svelte'

	let id = $state(0);
	let dto = $state<Array<Record<string, string | number>>>([]);

	if ($settings.difficulty === 'proposal') {
		dto = proposals;
	} else if ($settings.difficulty === 'phrase') {
		dto = phrases;
	} else {
		dto = words;
	}
	let data = $state({
		textAreaValue: '',
		keyboardValues: {
			1: 'mansy',
			2: 'rus',
			3: 'symbols'
		},
		keyboard: 'mansy',
		symbols: '',
		caps: false,
		enableKeyboard: false,
		keyboardStyle: 'none'
	});
	let taskText: string = $state('');
	let answer: string = $state('');
	let taskTranslation = $state('');

	$effect(() => {
		taskText = $settings.language === 'ru' ? dto[id].ru : dto[id].mansi;
		answer = $settings.language === 'ru' ? dto[id].mansi : dto[id].ru;
		taskTranslation = $answers[id] ? $answers[id].translation : '';
	});
	let classForTextArea = "task__textarea"
	function prevTask() {
		$answers[id] = {
			word: taskText,
			translation: taskTranslation,
			answer: answer,
			correct: taskTranslation === answer
		};
		id--;
		taskTranslation = '';
	}

	function nextTask() {
		console.log(taskTranslation);
		$answers[id] = {
			word: taskText,
			translation: taskTranslation,
			answer: answer,
			correct: taskTranslation === answer
		};
		id++;
		taskTranslation = '';
		console.log($answers);
	}
	function openKeyboard (el) {
		if (!data.enableKeyboard && data.keyboardStyle === 'none') {
			data.enableKeyboard = !data.enableKeyboard
		}
		if (el === 'close') {
			data.enableKeyboard = !data.enableKeyboard
		}
	}
	function finishTask() {
		$answers[id] = {
			word: taskText,
			translation: taskTranslation,
			answer: answer,
			correct: taskTranslation === answer
		};
		goto('/testing/result');
	}
</script>

<div class="task">
	<header class="task__header header">
		<a href="/testing" class="button task__link" target="_self">
			<Icon iconId="left-arrow" width={24} height={24} />
		</a>
		<p class="task__pagination">{id + 1} / {dto.length}</p>
	</header>
	<div class="task__container container">
		<main class="task__main">
			<p class="task__result">{taskText}</p>
			<Divider />
			<form class="task__form">
				<label class="task__label">
					<TextAreaTask bind:taskTranslation bind:data {openKeyboard}
							  {classForTextArea}/>
<!--					<textarea-->
<!--						bind:value={taskTranslation}-->
<!--						class="task__textarea"-->
<!--						placeholder="Введите перевод"-->
<!--					>-->
<!--					</textarea>-->
					<span class="visually-hidden">Введите текст для перевода</span>
				</label>
			</form>
		</main>
		<div class="controls">
			<button type="button" class="button controls__button" disabled={id === 0} onclick={prevTask}>
				&lt;
				<span class="visually-hidden">Предыдущий вопрос</span>
			</button>
			<button
				type="button"
				class="button controls__button"
				disabled={dto.length - 1 === id}
				onclick={nextTask}
			>
				&gt;
				<span class="visually-hidden">Следующий вопрос</span>
			</button>
		</div>
		{#if id === dto.length - 1}
			<button class="task__finish-button" type="button" onclick={finishTask}>
				Узнать результат
			</button>
		{/if}
	</div>
	{#if data.enableKeyboard}
		<Keyboard bind:data bind:taskTranslation {openKeyboard} />
	{/if}
	<Footer />
</div>

<style lang="postcss">
	.task {
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

		&__container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			max-width: 370px;
			margin-right: auto;
			margin-left: auto;
		}

		&__header {
			position: relative;

			display: flex;
			justify-content: center;
			align-items: center;
			padding: 15px;

			background-color: white;
		}

		&__link {
			position: absolute;
			top: 15px;
			left: 13px;
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

				background-image: url('/icons/left-angle.svg');
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

				background-image: url('/icons/right-angle.svg');
				background-size: cover;
				transform: translate(-1px, -1px);
			}
		}

		&__pagination {
			font-size: 20px;
			font-weight: 700;
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
			min-height: 150px;
			padding: 20px;

			font-family: 'PT-Sans', sans-serif;
			font-size: 24px;
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

		&__result {
			width: 100%;
			min-height: 150px;
			padding: 20px 20px;

			font-size: 24px;
			font-weight: 400;
			color: var(--black);
		}
	}

	.controls {
		position: absolute;
		top: 380px;
		right: 20px;

		display: flex;
		justify-content: space-between;
		gap: 10px;

		&__button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 44px;
			height: 44px;

			font-size: 36px;
			font-weight: 400;
			background-color: white;

			border-radius: 11px;

			&:disabled {
				opacity: 0.5;
			}
		}
	}
	.task__finish-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 46px;
		padding: 10px;

		font-size: 20px;
		font-weight: 400;
		color: var(--black);
		background-color: white;

		box-shadow: inset 0 0 4px 0 #545454;
		border-radius: 12px;

		&__active {
			color: white;
			background-color: #519eaf;
		}
	}
</style>
