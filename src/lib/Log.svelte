<script lang="ts">
	import Renderer from 'svelte-exmarkdown/renderer/Renderer.svelte';
	import type { HastElement } from 'svelte-exmarkdown/types';
	interface $$Props extends HastElement {
		name: string;
	}
	$: astNode = $$props as HastElement;
	$: console.log($$props.name, 'render', astNode);
</script>

<Renderer {astNode} />
