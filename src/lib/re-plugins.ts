import type { ComponentConstructorOptions, ComponentType, SvelteComponent } from 'svelte';
import type { Plugin } from 'svelte-exmarkdown';

//
// GFM Plugin

export { gfmPlugin as gfm } from 'svelte-exmarkdown/gfm';

//
// Math Plugin

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const math: Plugin = {
	remarkPlugin: remarkMath,
	rehypePlugin: rehypeKatex,
};

//
// Link Plugin

import Link from './Link.svelte';

export const links: Plugin = {
	renderer: {
		a: Link as typeof SvelteComponent,
	},
};

//
// Raw HTML Plugin

import { unified } from 'unified';
import { toHtml } from 'hast-util-to-html';
import rehypeParse from 'rehype-parse';

export const rawHtml: Plugin = {
	rehypePlugin: () => (node) => {
		const str = toHtml(node, { allowDangerousHtml: true });
		return unified().use(rehypeParse, { fragment: true }).parse(str);
	},
};

//
// Log Plugin

import Log from './Log.svelte';

const curryComponent = (component: ComponentType, props: any) =>
	function (options: ComponentConstructorOptions) {
		return new component({ ...options, props: { ...options.props, ...props } });
	};

export interface LoggerOptions {
	name: string;
	rehype?: boolean;
	remark?: boolean;
	renderer?: boolean;
}
export const logger = (opts: string | LoggerOptions): Plugin => {
	const { name, rehype, remark, renderer } =
		typeof opts === 'object' ? opts : { name: opts, rehype: true, remark: true, renderer: true };

	return {
		rehypePlugin: !rehype ? undefined : () => (node) => (console.log(name, 'rehype', node), node),
		remarkPlugin: !remark ? undefined : () => (node) => (console.log(name, 'remark', node), node),

		// prettier-ignore
		renderer: !renderer ? undefined : new Proxy({}, {
			get: () => curryComponent(Log, { name }),
			has: () => true,
		}),
	};
};
