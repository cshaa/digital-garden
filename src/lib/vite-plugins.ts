import type { Plugin } from 'vite';
import { readdir, writeFile, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

import type { Article } from '../../static/articles.d.ts';

async function* walkDirs(path: string, base = ''): AsyncIterable<string> {
	for (const entry of await readdir(path, { withFileTypes: true })) {
		const actualChildPath = join(path, entry.name);
		const displayChildPath = join(base, entry.name);

		if (entry.isDirectory()) {
			yield* walkDirs(actualChildPath, displayChildPath);
		} else {
			yield displayChildPath;
		}
	}
}

const readDir = async (path: string) => {
	const entries: string[] = [];
	for await (const entry of walkDirs(path)) entries.push(entry);
	return entries;
};

export const articleStats: Plugin = {
	name: 'article-stats',
	async buildStart() {
		const dir = await readDir('static/articles');
		const slugs = dir.map((path) => path.match(/^(.*)\.md$/)?.[1]).filter((s): s is string => !!s);
		const articles: Article[] = [];

		for (const slug of slugs) {
			const src = (await readFile(`static/articles/${slug}.md`, 'utf-8')).toString();

			const ast = unified()
				.use(remarkParse as any)
				.parse(src) as any;

			const name: string =
				ast.children?.find(({ type, depth }: any) => type === 'heading' && depth === 1)
					?.children?.[0]?.value ?? slug;

			articles.push({ slug, name });
		}

		const json = JSON.stringify(articles, undefined, '\t') + '\n';
		await writeFile('static/articles.json', json, 'utf-8');
	},
};
