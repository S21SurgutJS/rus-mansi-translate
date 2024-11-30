<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './form/Button.svelte';

	export let categories: string[] = [];

	let navbar: HTMLElement;
	onMount(() =>
		window.addEventListener(
			'scroll',
			(event) => {
				navbar.classList.toggle('navbar--sticky', window.scrollY > 0);
			},
			{
				passive: true
			}
		)
	); //TODO: fix
</script>

<header class="navbar" bind:this={navbar}>
	<div class="container mx-auto max-w-[1170px]">
		<div class="navbar__top">
			<a href="/" class="navbar__logo">
				<img src="/icons/logo.svg" alt="Дядя дёнер" />
			</a>

			<div class="navbar__info">
				<a class="navbar__phone" href="tel:+79227736373">+7(922)773-63-73</a>
				<div class="navbar__text">
					Круглосуточно
					<span class="navbar__rating">
						<span class="material-symbols-outlined"> star_rate </span>
						4.3
					</span>
				</div>
			</div>
			<Button size="medium">Личный кабинет</Button>
			<Button size="medium" primary>
				<span class="material-symbols-outlined"> shopping_bag </span>
				Корзина
			</Button>
		</div>
		<div class="navbar__bottom">
			<ul class="navbar__list">
				{#each categories as category}
					<li class="navbar__item">
						<a href="/">{category}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</header>

<style lang="scss">
	.navbar {
		background-color: var(--white);
		&--sticky {
			box-shadow: 0 5px 10px 0 #0000001c;
		}
		&__top {
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 15px 15px 5px 15px;
		}

		&__logo {
			width: 100px;
			margin-right: 40px;

			transition: transform 0.1s ease-in;
			&:hover {
				transform: scale(1.1);
			}
		}

		&__info {
			margin-right: auto;
		}

		&__phone {
			font-size: 18px;
			line-height: 20px;
			font-weight: bold;
		}

		&__text {
			display: flex;
			align-items: center;
			gap: 5px;

			font-size: 14px;
			line-height: 18px;

			opacity: 0.6;
		}

		&__rating {
			display: flex;
			align-items: center;

			span {
				color: var(--primary);
			}
		}

		&__bottom {
			padding: 5px 15px 15px 15px;
		}

		&__list {
			display: flex;
			align-items: center;
		}

		&__item {
			font-weight: 600;
			a {
				display: block;
				padding: 13px 15px;
			}
		}

		&__item:first-child a {
			padding-left: 0px;
		}
	}
</style>
