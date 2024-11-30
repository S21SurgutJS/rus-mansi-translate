<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '../general/Icon.svelte';

	let sidebarItems = [
		{
			title: 'Категории',
			url: '/admin/categories'
		},
		{
			title: 'Позиции меню',
			url: '/admin/positions'
		},
		{
			title: 'Заказы',
			url: '/admin/orders'
		},
		{
			title: 'Акции',
			url: '/admin/promos'
		},
		{
			title: 'Клиенты',
			url: '/admin/customers'
		},
		{
			title: 'Сотрудники',
			url: '/admin/staff'
		},
		{
			title: 'Атрибуты',
			url: '/admin/attributes'
		},
		{
			title: 'Ингредиенты',
			url: '/admin/ingredients'
		},
		{
			title: 'Добавки',
			url: '/admin/supplements'
		},
		{
			title: 'Точки выдачи',
			url: '/admin/pick-points'
		},
		{
			title: 'Обратная связь',
			url: '/admin/feedback'
		},
		{
			title: 'Зоны доставки',
			url: '/admin/delivery-areas'
		},
		{
			title: 'Настройки',
			url: '/admin/settings'
		}
	];

	$: currentUrl = $page.route.id;
	$: title = sidebarItems.find(
		(item) => item.url.split('/')[2] === currentUrl?.split('/')[2]
	)?.title;
</script>

<aside class="sidebar">
	<h1 class="sidebar__title">{title}</h1>
	<ul class="sidebar__list">
		{#each sidebarItems as item}
			<li class="sidebar__item link_dark" class:sidebar_active={currentUrl === item.url}>
				<a class="sidebar__link" href={item.url}>{item.title}</a>
			</li>
		{/each}
	</ul>
	<a href="/logout" class="sidebar__link sidebar__link_logout link_dark">
		Выйти
		<Icon iconId="logout" fill="logout-color" width={20} />
	</a>
</aside>

<style lang="scss">
	.sidebar {
		&__list {
			display: flex;
			flex-direction: column;
			gap: 10px;

			margin-bottom: 20px;
		}
		&__title {
			margin-bottom: 20px;

			font-family: 'Nunito', sans-serif;
			font-size: 36px;
			line-height: 115%;
			font-weight: 700;
		}
		&_active {
			a {
				border-bottom: 2px solid var(--primary);
			}
		}
		&__link_logout {
			display: flex;
			align-items: center;
			gap: 5px;

			color: var(--logout-color);
		}
	}
</style>
