import { fetchArticle } from '$lib/path.ts';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params: { article } }) => {
	if (article.startsWith('article/')) throw error(404);
	return await fetchArticle(fetch, article);
};
