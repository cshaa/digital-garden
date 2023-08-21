<script lang="ts">
	import 'katex/dist/katex.min.css';

	import Markdown, { type Plugin } from 'svelte-exmarkdown';
	import { gfm, math } from '$lib/re-plugins.ts';
	import Link from '$lib/Link.svelte';
	import type { SvelteComponent } from 'svelte';

	const links: Plugin = {
		renderer: {
			a: Link as typeof SvelteComponent,
		},
	};
	const plugins = [gfm, links, math];

	export let data;
</script>

<Markdown md={data.source} {plugins} />
