<script lang="ts">
	import type { CreateFeedbackDto } from '@ddsgt_mono/lib';
	import FeedbackModal from './modals/FeedbackModal.svelte';
	import { invalidate } from '$app/navigation';

	let editingFeedback: Partial<CreateFeedbackDto> | undefined;

	function createFeedback(data: Partial<CreateFeedbackDto>) {
		editingFeedback = data;
	}

	function onRefreshPage() {
		editingFeedback = undefined;
		invalidate('fetch:feedback');
	}
</script>

<footer class="footer">
	<div class="container mx-auto max-w-[1170px]">
		<div class="footer__content">
			<div class="footer__logo-wrap">
				<img src="/icons/logo-light.svg" class="footer__logo" alt="Дядя дёнер" />
				<div class="footer__company">
					<div>Компания ООО "ВКС"</div>
					<div>ИНН 8602173213</div>
					<div>ОГРН 1108602007260</div>
					<div>Филиал компании Дядя Дёнер</div>
				</div>
			</div>
			<div>
				<div>
					<a href="/" class="link link_light"> Главная </a>
				</div>
				<div>
					<a href="/faq" class="link link_light"> F.A.Q. </a>
				</div>
			</div>
			<div>
				<div>
					<a href="/delivery" class="link link_light"> Доставка </a>
				</div>
				<div>
					<a href="/cabinet" class="link link_light"> Личный кабинет </a>
				</div>
				<div>
					<a class="footer__social-icon icon-vk link link_light mr-2" href="https://vk.com/ddsgt" />
					<a
						class="footer__social-icon icon-instagram link link_light"
						href="https://www.instagram.com/ddenersgt/"
					/>
				</div>
			</div>
			<div class="footer__contacts">
				<div>
					<a href="tel:+79227736373" class="link link_light">+7(922)773-63-73</a>
				</div>
				<div>
					<a href="mailto:DDener.surgut@yandex.ru" class="link link_light"
						>DDener.surgut@yandex.ru</a
					>
				</div>
				<div>
					<span role="button" class="link link_underlined" on:click={() => createFeedback({})}>
						<!-- <span role="button" class="link link_underlined" @click="d_showFeedbackModal = true"> -->
						Связаться с нами</span
					>
				</div>
			</div>
		</div>
		<div class="footer__bottom">
			<a href="https://w1cked.ru/" class="d-flex align-items-center">
				<img src="/icons/logo-wicked_light.png" alt="wicked" />
			</a>
			<div class="d-flex align-items-center">
				<a href="/terms" class="link link_light"> Политики конфиденциальности </a>
			</div>
			<div class="d-flex align-items-center">
				<a href="/offer" class="link link_light"> Договор оферты </a>
			</div>
			<div class="footer__payments">
				<img src="/icons/payments/jsb.svg" alt="jsb" />
				<img src="/icons/payments/visa.svg" alt="visa" />
				<img src="/icons/payments/master_card.svg" alt="master" />
				<img src="/icons/payments/world.svg" alt="world" />
			</div>
		</div>
	</div>
	<!-- <feedback-modal v-if="d_showFeedbackModal"
                @close="d_showFeedbackModal = false"
/> -->
</footer>

{#if editingFeedback != undefined}
	<FeedbackModal
		feedbackData={editingFeedback}
		on:close={() => (editingFeedback = undefined)}
		on:refresh={onRefreshPage}
	/>
{/if}

<!-- <script>
export default {
  name: "VFooter",
  data() {
      return {
          d_showFeedbackModal: false,
      };
  },
  mounted() {
      window.showFeedbackModal = () => {
          this.d_showFeedbackModal = true;
      };
  },
};
</script> -->

<style lang="scss">
	.footer {
		margin-top: 50px;
		padding: 30px 0;
		background-color: var(--dark);
		color: white;

		.link_underlined {
			&:hover {
				color: var(--primary);
			}
		}
	}

	.footer__content,
	.footer__bottom {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;

		// @include media-breakpoint-down(md) {
		// 	grid-template-columns: 1fr;
		// }
	}

	.footer__content {
		font-size: 14px;
		line-height: 26px;

		// @include media-breakpoint-down(md) {
		// 	grid-template-columns: 1fr 1fr;
		// 	line-height: 30px;
		// 	flex-direction: column;
		// 	font-size: 12px;
		// 	grid-row-gap: 20px;
		// }
	}

	.footer__logo-wrap {
		// @include media-breakpoint-down(md) {
		// 	order: -2;
		// 	align-self: center;
		// 	margin-bottom: 0;
		// 	width: 85px;
		// }
	}

	.footer__contacts {
		text-align: right;

		// @include media-breakpoint-down(md) {
		// 	text-align: left;
		// 	order: -1;
		// }
	}

	.footer__logo {
		width: 150px;
		max-width: 100%;
	}

	.footer__bottom,
	.footer__company {
		margin-top: 30px;
		font-size: 12px;
		line-height: 14px;
		color: #6d6d6d;

		.link {
			color: #6d6d6d;
		}

		// @include media-breakpoint-down(md) {
		// 	grid-gap: 15px;
		// }
	}

	.footer__payments {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 15px;
		justify-content: flex-end;

		// @include media-breakpoint-down(md) {
		// 	justify-content: flex-start;
		// 	margin-top: 15px;
		// }
	}

	.footer__social-icon {
		font-size: 24px;
	}

	.footer__feedback {
		// @include media-breakpoint-down(md) {
		// 	background: $lightSup;
		// 	color: $dark;
		// 	padding: 11px;
		// 	text-align: center;
		// 	display: block;
		// 	width: 100%;
		// 	border: none;
		// 	margin-top: 15px;
		// }
	}
</style>
