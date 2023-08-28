<script lang="ts">
	import 'katex/dist/katex.min.css';

	import Markdown, { type Plugin } from 'svelte-exmarkdown';
	import { gfm, links, math, rawHtml } from '$lib/re-plugins.ts';

	const plugins = [gfm, links, math, rawHtml];

	export let data;
</script>

<Markdown md={data.source} {plugins} />
