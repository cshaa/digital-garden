import type { Plugin } from 'svelte-exmarkdown';

export { gfmPlugin as gfm } from 'svelte-exmarkdown/gfm';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const math: Plugin = {
	remarkPlugin: remarkMath,
	rehypePlugin: rehypeKatex,
};

// import Link from './Link.svelte';
// import type { SvelteComponent } from 'svelte';

// export const links: Plugin = {
// 	renderer: {
// 		a: Link as typeof SvelteComponent,
// 	},
// };
