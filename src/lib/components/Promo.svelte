<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';
	import ProductCard from './ProductCard.svelte';

	type Products = {
		title: string;
		price: number;
		image: string;
		ingridients: string[];
		isPromo: boolean;
		isCustom: boolean;
		category: string;
	};

	type Data = {
		categories?: string[];
		products?: Products[];
	};

	export let products: Products[] = [];

	const promoData = products?.filter((i) => i.isPromo);
	console.log(promoData);

	register();
	let swiperEl: SwiperContainer;

	const swiperParams: SwiperOptions = {
		slidesPerView: 1.3,
		speed: 500,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true
		},
		effect: 'slide',
		cardsEffect: {
			slideShadows: false,
			perSlideOffset: 20,
			rotate: false
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination'
		},
		breakpoints: {
			768: {
				slidesPerView: 3.3
			},
			992: {
				slidesPerView: 4.3
			}
		}
	};

	onMount(() => {
		if (products?.length) {
			Object.assign(swiperEl, swiperParams);
			swiperEl.initialize();
		}
	});
</script>

<section class="hero">
	<h2 class="subtitle hero__title">Популярное</h2>

	<div class="hero__navigation">
		<button class="swiper-button-prev"></button>
		<div class="swiper-pagination"></div>
		<button class="swiper-button-next"></button>
	</div>
	<swiper-container bind:this={swiperEl} init="false">
		{#each promoData as item}
			<swiper-slide>
				<ProductCard {...item} promoList />
			</swiper-slide>
		{/each}
	</swiper-container>
</section>

<style lang="scss">
	.hero {
		margin-bottom: 50px;

		&__navigation {
			display: flex;
			gap: 10px;
			justify-content: center;
		}
	}
	.swiper-button-next,
	.swiper-button-prev {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--primary);
	}

	.swiper-pagination {
		display: flex;
		gap: 5px;
		// justify-content: center;
		align-items: center;

		background-color: transparent;
		border: 1px solid black;
	}
	// .swiper-pagination-bullet {
	// 	width: 10px;
	// 	height: 10px;
	// 	background-color: red;
	// }
	// .swiper-pagination .swiper-pagination-bullet {
	// 	width: 15px;
	// 	height: 15px;
	// 	background: black;
	// 	border-radius: 50%;
	// 	border: 1px solid black;
	// }

	// .swiper-pagination-bullet-active {
	// 	color: black;
	// 	background: #007aff;
	// }
</style>
