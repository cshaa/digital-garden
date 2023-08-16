<script lang="ts">
	import 'katex/dist/katex.min.css';

	import Markdown, { type Plugin } from 'svelte-exmarkdown';
	import { gfm, math } from '$lib/plugins.ts';
	const plugins = [gfm, math];

	import type { PageData } from './$types.d.ts';
	export let data: PageData;
</script>

<Markdown md={data.source} {plugins} />
