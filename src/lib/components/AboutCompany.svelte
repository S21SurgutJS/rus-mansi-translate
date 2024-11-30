<script>
	import Icon from './general/Icon.svelte';
</script>

<section class="about">
	<a
		class="about__card about-card"
		href="https://docs.google.com/forms/d/e/1FAIpQLSdgRX381NxjjtsDwiJKb3h4QfkaaDQFaT24p1gdR25JMS2RHQ/viewform"
		target="_blank"
	>
		<Icon iconId="comment" width={120} class="about-card__icon self-center" fill="grey" />
		<h3 class="about-card__title">Помогите нам стать&nbsp;лучше</h3>
		<div class="about-card__info">
			<p>Пройдите опрос и оцените качество обслуживания и еды.</p>
			<p>Опрос займёт не более 2 минут.</p>
		</div>
	</a>
	<div class="about__card about-card">
		<Icon iconId="phone" width={110} class="about-card__icon self-center" fill="grey" />
		<h3 class="about-card__title">Контакты</h3>
		<div class="about-card__info">
			<p>628400, ХМАО-Югра, Тюменская обл. г. Сургут. ул.Профсоюзов, д. 53</p>
			<p>
				<a href="tel:+79226529178" class="font-bold">+7(922)652 91 78</a>
			</p>
			<p>
				<a href="mailto:DDener.surgut@yandex.ru">DDener.surgut@yandex.ru</a>
			</p>
			<p>
				Режим работы <b class="font-bold">круглосуточно</b>
			</p>
		</div>
	</div>
	<a
		class="about__card about-card"
		href="https://yandex.ru/maps/org/dyadya_dyoner/122111796040/reviews/?ll=73.429160%2C61.263336&z=18"
		target="_blank"
	>
		<span class="about-card__icon font-bold self-center">4.3</span>
		<h3 class="about-card__title">Средняя оценка</h3>
		<div class="about-card__info">
			<p>Представлена оценка за текущий месяц по данным сервиса Яндекс.Карты.</p>
		</div>
	</a>
	<a class="about__card about-card" href="#delivery">
		<Icon iconId="pin" width={110} class="about-card__icon self-center" fill="grey" />

		<!-- <a class="about-card" href="#delivery" @click="d_showDelivery = true"> -->
		<h3 class="about-card__title">Зоны доставки</h3>
		<div class="about-card__info">
			<p>Посмотреть зоны доставки</p>
		</div>
	</a>
	<!-- <v-modal
		v-if="d_showDelivery"
		title="Зоны доставки"
		width="932px"
		@close="d_showDelivery = false"
	>
		<delivery-zones />
	</v-modal> -->
</section>

<style lang="scss">
	.about {
		display: grid;
		grid-gap: 30px;
		grid-template-columns: 1fr 1fr 1fr 1fr;

		// @include media-breakpoint-down(md) {
		// grid-template-columns: 1fr;
		// }
	}

	.about-card {
		display: grid;
		grid-gap: 10px;
		grid-template-rows: 120px 40px auto;
		justify-items: center;

		box-shadow: rgba(6, 5, 50, 0.12) 0 4px 20px;
		padding: 15px;
		border-radius: 20px;
		font-size: 14px;
		line-height: 16px;

		transition: color 0.1s ease-in-out;
		&__icon {
			height: 100px;
			margin-bottom: 15px;

			font-size: 100px;
			line-height: 1;
			color: var(--grey);
		}

		&__title {
			margin-bottom: 0.5rem;

			font-size: 18px;
			font-weight: 700;
			line-height: 115%;
			text-align: center;
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 10px;

			text-align: center;

			a {
				border-bottom: 1px dashed orange;
			}
		}
	}
	a.about-card:hover {
		color: var(--hover-color);
	}
</style>
