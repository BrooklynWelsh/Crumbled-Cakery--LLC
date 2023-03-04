<script>
	import VisualBuilder from '$components/OrderForm/cakes/VisualBuilder.svelte';
import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	export let data;

	onMount(() => {
		if (data.story) {
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
				<!-- {#if data.slug === 'order/cakes'}
					<VisualBuilder blok={data.story}/>
				{/if} -->
				<StoryblokComponent slug={data.slug} blok={data.story.content} />
			{:else}
				<StoryblokComponent blok={data.story.content} />
			{/if}
		{/if}
	</div>
{/key}

<style>
	div {
		margin-top: 4%;
		margin-left: 26vw;
	}
</style>