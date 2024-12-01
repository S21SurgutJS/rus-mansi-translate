<script lang="ts">
	import Footer from '$lib/components/general/Footer.svelte';
</script>

<div class="tales">
	<header class="tales__header">
		<h1 class="tales__title">А̄кврись - а̄кврись</h1>
	</header>
	<div class="tales__container">
		<main class="tales__main">
			<div class="tales__wrapper">
				<p
					class="tales__description"
					on:selectionchange={() => {
						console.log('change');
					}}
				>
					А̄кврись - а̄кврись, тучаӈын хо̄та?<br /> - А̄мпын то̄твес.<br /> - А̄мпе хо̄та?<br /> - Во̄рна
					мӣнас.<br /> - Во̄ре хо̄та?<br />
					- На̄йна та̄йвес.<br /> - На̄йе хо̄та?<br /> - Раквна харыгтавес.<br /> — Ракве хо̄та?<br /> -
					Ма̄на посыс.<br /> - Матэ хо̄та?<br />
					- Виткасьна нильвес.<br /> - Виткасе хо̄та?<br /> - Тит ня̄лыу ё̄втыӈ пыгрисяквēгн ня̄лыл
					па̄хвтувес.<br /> - Тит ня̄лын ё̄втыӈ пыгрисяквēга хо̄т?<br /> - Эт хулм я̄ӈкын ра̄гпысыг.<br />
					- Эт хулм я̄ӈке хо̄та?<br /> - Хотална толтвес.<br /> — Хо̄талэ хо̄та?<br /> - Тул са̄йна
					па̄тырас.<br />
				</p>
			</div>
		</main>
	</div>
	<Footer />
</div>

<style lang="postcss">
	.tales {
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
			width: 370px;
			margin-right: auto;
			margin-left: auto;
		}

		&__wrapper {
			max-width: 320px;
			margin: 0 auto;
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

		&__description {
			font-size: 20px;
			font-weight: 400;
			text-align: center;

			overflow-x: scroll;
		}

		&__main {
			position: relative;

			/* height: calc(100% - 20px); */
			padding-top: 10px;
			padding-bottom: 10px;

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
</style>
