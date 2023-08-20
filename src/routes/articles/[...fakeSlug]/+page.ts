import { error } from '@sveltejs/kit';

/* Prevents infinite loop when fetching a nonexistent article */
export const load = () => {
	throw error(404);
};
