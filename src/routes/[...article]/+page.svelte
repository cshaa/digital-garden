<script lang="ts">
	import 'katex/dist/katex.min.css';

	import Markdown, { type Plugin } from 'svelte-exmarkdown';
	import { gfm, math } from '$lib/re-plugins.ts';
	const plugins = [gfm, math];

	export let data;
</script>

<Markdown md={data.source} {plugins} />
