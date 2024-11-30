<script lang="ts">
	import { fly } from 'svelte/transition';

	export let type: 'success' | 'error' = 'error';
	export let message: string = 'Ошибка при отправке данных'; //Данные успешно отправлены
</script>

<div
	class="flex items-center justify-center py-5 fixed bottom-0 left-0 right-0"
	transition:fly={{ y: 200, duration: 2000 }}
>
	<p class:message class={type === 'success' ? 'success' : 'error'}>
		{message}
	</p>
</div>

<style lang="scss">
	.message {
		bottom: 35px;
		max-width: 300px;
		padding: 10px 20px;
		border-radius: 5px;
		text-align: center;
		z-index: 1000;
	}
	.success {
		color: var(---white);
		background-color: var(--primary-transparent);
	}
	.error {
		color: var(--white);
		background-color: var(--danger-transparent);
	}
</style>
