import { writable } from 'svelte/store';

export let settings = writable({ language: '', difficulty: '' });
