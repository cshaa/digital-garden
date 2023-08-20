import { fetchArticle } from '$lib/path.ts';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.d.ts';

export const load: PageLoad = async ({ fetch, params: { article } }) => {
	if (article.startsWith('article/')) throw error(404);
	return await fetchArticle(fetch, article);
};
