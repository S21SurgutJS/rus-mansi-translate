import { writable } from 'svelte/store';

export const answers = writable([
	{
		word: '',
		translation: '',
		answer: '',
		correct: false
	}
]);
