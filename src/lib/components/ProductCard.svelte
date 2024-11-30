<script lang="ts">
	import Button from './form/Button.svelte';

	export let title: string;
	export let price: number;
	export let image: string;
	export let isPromo: boolean = false;
	export let ingridients: string[] = [];
	export let isCustom: boolean = true;
	export let promoList: boolean = false;

	function openModal() {
		console.log('open modal');
	}
</script>

<div class="product-card">
	{#if promoList === true}
		<a
			href="/"
			aria-label="Карточка товара {title}"
			class="product-card__link"
			tabindex="-1"
			on:click|preventDefault={openModal}
		>
			<div class="product-card__promo">
				<img class="product-card__image product-card__image--promo" src={image} alt={title} />
				<div class="product-card__content">
					<h3 class="product-card__title product-card__title--promo">{title}</h3>
					<p class="product-card__price">{price} ₽</p>
				</div>
			</div>
		</a>
	{:else}
		<main class="product-card__main">
			<a
				href="/"
				aria-label="Карточка товара {title}"
				class="product-card__link"
				on:click|preventDefault={openModal}
			>
				<img class="product-card__image" src={image} alt={title} />
			</a>
			<div class="product-card__content">
				<h3 class="product-card__title">{title}</h3>
				<p class="product-card__ingridients">{ingridients.join(', ')}</p>
			</div>
		</main>
		<footer class="product-card__footer">
			<p class="product-card__price">{price} ₽</p>
			<Button size="medium" primary>
				{#if isCustom}
					Выбрать
				{:else}
					Купить
				{/if}
			</Button>
			<!-- <button class="product-card__button button" on:click|self={openModal}> -->

			<!-- </button> -->
		</footer>
	{/if}
</div>

<style lang="scss">
	.product-card {
		position: relative;

		&__promo {
			display: flex;
			align-items: center;
			gap: 10px;
		}

		&__main {
			display: flex;
			flex-direction: column;
		}

		&__image {
			transition: 0.3s ease-in transform;
			&--promo {
				width: 78px;
				height: 78px;
				object-fit: cover;
			}
			&:hover {
				transform: scale(1.1);
			}
		}

		&__title {
			margin-bottom: 5px;

			font-size: 20px;
			font-weight: 700;
			&--promo {
				font-size: 14px;
			}
		}

		&__ingridients {
			font-size: 14px;
			line-height: 18px;
			color: var(--light-descr);
		}

		&__footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__price {
			font-weight: 700;
		}
	}

	.product-card__main .product-card__content {
		margin-bottom: 25px;
	}

	.product-card__footer .product-card__price {
		font-size: 20px;
	}
</style>
