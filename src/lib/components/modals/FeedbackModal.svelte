<script lang="ts">
	import type { FeedbackDto } from '@ddsgt_mono/lib';
	import UserModal from '../UserModal.svelte';
	import Button from '../form/Button.svelte';
	import NcInput from '../form/NCInput.svelte';
	import NcTextArea from '../form/NCTextArea.svelte';
	import NcCheckbox from '../form/NCCheckbox.svelte';
	import { FeedbackApi } from '$lib/plugins/api/modules/feedback';
	import { createEventDispatcher, onMount } from 'svelte';
	import { ApiError } from '$lib/plugins/api';
	import { notification } from '$lib/stores/notifyStore';
	import { formatDateTime } from '$lib/assets/utils/formatDateTime';

	export let feedbackData: FeedbackDto;

	let checked: boolean = false;
	let feedbackApi: FeedbackApi;
	let errors: Record<string, string[]> | undefined = undefined;
	let feedbackDataClone = structuredClone(feedbackData);

	const dispatch = createEventDispatcher();

	onMount(() => {
		feedbackApi = new FeedbackApi(fetch);
	});

	async function onSubmit() {
		if (!feedbackDataClone) return;

		try {
			if (feedbackDataClone.id) {
				const res = await feedbackApi.updateFeedback({
					id: feedbackDataClone.id,
					answered: !feedbackDataClone.answered
				});
				notification.success(`Статус обращения от ${res.name} ${res.phone} успешно обновлен`);
			} else {
				const res = await feedbackApi.createFeedback({
					name: feedbackDataClone.name,
					phone: feedbackDataClone.phone,
					body: feedbackDataClone.body,
					userId: feedbackDataClone.userId
				});
				notification.success(`Обращение создано`);
			}
			dispatch('refresh');
		} catch (error) {
			if (error instanceof ApiError) {
				errors = error.body.errors;
				notification.error('Что-то пошло не так ;(');
			}
		}
	}
</script>

<UserModal on:close>
	{#if feedbackData.id}
		<div class="feedback-modal">
			<h2 class="feedback-modal__title">Сообщение</h2>
			<p class="feedback-modal__body">{feedbackData.body}</p>
			<div class="feedback-modal__createdAt">
				<span>Дата: </span>{formatDateTime(feedbackData.createdAt)}
			</div>
			<div class="feedback-modal__author"><span>Автор: </span>{feedbackData.name}</div>
			<div class="feedback-modal__phone"><span>Телефон: </span>{feedbackData.phone}</div>
			{#if !feedbackData.answered}
				<div class="feedback-modal__answer link_dark">
					<button on:click={onSubmit}>Пометить отвеченным</button>
				</div>
			{/if}
		</div>
	{:else}
		<div class="feedback-modal">
			<h2 class="feedback-modal__title">Свяжитесь с нами</h2>
			<form class="feedback-modal__form">
				<NcInput
					label="Представьтесь*"
					type="text"
					bind:value={feedbackDataClone.name}
					error={errors?.name}
				/>
				<NcInput
					label="Мобильный телефон*"
					type="text"
					bind:value={feedbackDataClone.phone}
					error={errors?.phone}
				/>
				<NcTextArea
					label="Ваше сообщение"
					class="mb-3"
					bind:value={feedbackDataClone.body}
					error={errors?.body}
				/>
				<NcCheckbox
					label="Я согласен не обработку персональных данных"
					class="mb-4"
					bind:value={checked}
				/>
				<Button disabled={!checked} size="medium" primary on:click={onSubmit}>Отправить</Button>
			</form>
		</div>
	{/if}
</UserModal>

<style lang="scss">
	.feedback-modal {
		&__title {
			margin-bottom: 15px;

			font-size: 24px;
			line-height: 115%;
			font-weight: 700;
		}

		&__body {
			margin-bottom: 1rem !important;
		}
		&__answer {
			display: flex;
			align-items: center;
			justify-content: center;

			min-height: 60px;

			font-size: 14px;
			line-height: 18px;

			background: #f2f2f2;

			margin: 50px -80px -50px;
		}
	}

	span {
		font-weight: 700;
	}
</style>
