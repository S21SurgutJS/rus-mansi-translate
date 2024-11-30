<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { notification } from '$lib/stores/notifyStore';
	import type { ImageResponse } from '@ddsgt_mono/lib';
	import Alert from '../form/Alert.svelte';
	import Icon from '../general/Icon.svelte';
	import { UploadsApi } from '$lib/plugins/api/modules/uploads';

	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let accept: string[];
	export let photo: Partial<ImageResponse> | null | undefined;
	export let errors: string[] | undefined = undefined;

	$: errorsMessage = errors?.join(', ');
	let inputEl: HTMLInputElement;
	let uploadsApi: UploadsApi;

	onMount(() => {
		uploadsApi = new UploadsApi(fetch);
	});

	const dispatch = createEventDispatcher();

	async function uploadFile(event: Event) {
		const target = event.target as HTMLInputElement;
		if (!target.files || target.files?.length === 0) {
			console.log('Ошибка загрузки файла');
			return;
		}
		const file = target.files[0];
		const formData = new FormData();
		formData.append('file', file);

		try {
			photo = await uploadsApi.uploadImage(formData);
			// imageId = photo.id;
			errorsMessage = undefined;
		} catch (error) {
			notification.error('Ошибка загрузки фотографии');
		}
	}

	function removePhoto(event: Event) {
		dispatch('remove');
	}

	$: cAccept = accept.map((el) => '.' + el).join(',');
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="upload-photo {$$props.class}" on:click={() => inputEl.click()}>
	<input
		type="file"
		class="upload-photo__input"
		bind:this={inputEl}
		accept={cAccept}
		on:change={uploadFile}
	/>
	{#if !photo}
		<div class="upload-photo__wrapper">
			<Icon iconId="upload" width={30} fill="grey" />
			<p class="upload-photo__title">{title}</p>
			{#if subtitle}
				<p class="upload-photo__subtitle">{subtitle}</p>
			{/if}
		</div>
	{:else}
		<img class="upload-photo__image" src={photo.fullSizeUrl} alt="Фото пользователя" />
		<button
			on:click|stopPropagation={removePhoto}
			class="upload-photo__button"
			aria-label="Удалить фотографию"
		/>
	{/if}
	<Alert class="!bottom-[0px] !right-[5px]" error={errorsMessage} />
</div>

<style lang="scss">
	.upload-photo {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		border: 1px dashed var(--grey);
		border-radius: 15px;
		aspect-ratio: 1/1;
		overflow: hidden;

		&__image {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		&__button {
			position: absolute;
			top: -1px;
			right: -1px;

			display: flex;
			justify-content: center;
			align-items: center;
			width: 30px;
			height: 30px;

			font-size: 20px;
			color: transparent;
			background-color: transparent;
			border: none;
			border-radius: 0 15px 0 15px;

			transition:
				color 0.1s ease-in-out,
				background-color 0.1s ease-in-out;
		}
		&:hover {
			cursor: pointer;
			.upload-photo__button {
				color: var(--dark);
				background-color: var(--primary);
				background-image: url('/icons/cross-small.svg');
				background-repeat: no-repeat;
				background-position: center center;
				background-size: 30px 30px;
				&:hover {
					color: var(--black);
				}
			}
		}
		&__wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 5px;
		}
		&__input {
			display: none;
		}

		&__title {
			font-size: 12px;
		}

		&__subtitle {
			font-size: 12px;
			color: var(--light-descr);
		}
	}
</style>
