<script lang="ts">
	export let data;
</script>

<h1>All articles</h1>
<ul>
	{#each data.articles as { slug, name }}
		<li><a href={slug}>{name}</a></li>
	{/each}
</ul>
