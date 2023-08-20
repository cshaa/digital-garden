import type { Article } from '../../../static/articles.d.ts';

export const load = async ({ fetch }) => {
	const articles: Article[] = await (await fetch('/articles.json')).json();
	return { articles };
};
