<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowUpRightFromSquare as faExt } from '@fortawesome/free-solid-svg-icons';

	import Renderer from 'svelte-exmarkdown/renderer/Renderer.svelte';
	import type { HastElement } from 'svelte-exmarkdown/types';
	interface $$Props extends HastElement {}
	$$props; // ignore unknown props

	export let properties: $$Props['properties'] = {};
	export let children: $$Props['children'];

	$: href = <string>properties?.href ?? '';
	$: external = !!href.match(/https?:\/\//);
</script>

<!-- Waiting for a trim whitespace option 😔 -->
<!-- prettier-ignore -->
<a {...properties} {href}><!--
  -->{#each children as child}<Renderer astNode={child} />{/each}<!--
  -->{#if external}{" "}<Fa icon={faExt} />{/if}<!--
--></a>
