import { error } from '@sveltejs/kit';

export function safePath(path: string) {
	return path
		.split('/')
		.filter((s) => !['', '.', '..'].includes(s))
		.map(encodeURIComponent)
		.join('/');
}

export async function fetchArticle(
	fetch: typeof globalThis.fetch,
	path: string,
): Promise<{
	path: string;
	source: string;
}> {
	path = '/articles/' + safePath(path);
	let res = await fetch(path + '.md');
	if (!res.ok) {
		path += '/index';
		res = await fetch(path + '.md');
	}

	if (!res.ok) throw error(404);

	const source = await res.text();
	path += '.md';

	return { path, source };
}
