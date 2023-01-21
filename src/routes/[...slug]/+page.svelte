<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	export let data;
	onMount(() => {
		if (data.story) {
			console.log(data.story);
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory), {});
		}
	});
</script>

<svelte:head>
	<title>{data.story.name}</title>
</svelte:head>
{#key data}
	<div>
		{#if data.story}
			{#if data.slug}
				<StoryblokComponent slug={data.slug} blok={data.story.content} />
			{:else}
				<StoryblokComponent blok={data.story.content} />
			{/if}
		{/if}
	</div>
{/key}