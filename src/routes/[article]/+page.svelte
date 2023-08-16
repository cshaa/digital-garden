<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import type { PageData } from './$types';
	export let data: PageData;
	$: console.log(data);
</script>

<Markdown md={data.source} />
