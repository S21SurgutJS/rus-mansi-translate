import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

export const load = () => {
	setTimeout(() => {
		console.log('redirects');
		goto('/translator');
	}, 3000);
};
