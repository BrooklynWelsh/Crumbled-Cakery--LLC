<svelte:options immutable />

<script lang="ts">
	import { onMount } from 'svelte';
	import type ProductMetadata from '$types/ProductMetadata';
	import ProductCard from './ProductCard.svelte';
	import { useStoryblokApi } from '@storyblok/svelte';
	export let blok;

	export let products: ProductMetadata[] = []
	onMount(async () => {
		const storyblokApi = useStoryblokApi();

		const { data } = await storyblokApi.get('cdn/stories', {
			version: 'draft',
			starts_with: 'order',
			is_startpage: false
		});
		console.log('data inside productlist');
		console.log(data);
		console.log(data.stories)
		products = data.stories;
	});
</script>

<div id="product-list">
	<article class="container">
		{#each products as product}
			<ProductCard product={product.content} slug={product.full_slug}/>
		{/each}
	</article>
</div>

<style lang="postcss">

	html,
	body {
		position: relative;
		margin: 0;
		padding: 0;
		height: 100%;
		background: #fff;
	}

	.header {
		text-align: center;
		background: #333;
		color: #fff;
		padding: 20px 0px;
		margin: 0;
		margin-bottom: 10px;
	}

	#product-list {
		height: inherit;
		max-height: 99%;
		max-width: 99%;
	}

	.description {
		padding: 6px 30px;
		margin: 0;
		font-weight: 400;
	}

	.description li {
		padding: 3px 0px;
	}

	.wrapper {
		margin-top: 50px;
	}

	.container {
		width: 85%;
		height: auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17%, 2fr));
		grid-auto-rows: minmax(16%, 1fr);
		margin: auto;
		align-items: stretch;
		column-gap: rfs(13rem);
	}

	.item {
		display: inline-block;
		opacity: 1;
	}

	.masonrygrid.horizontal .item {
		width: auto;
		height: 250px;
	}

	.item.animate {
		transition: opacity ease 1s;
		transition-delay: 0.2s;
		opacity: 1;
	}

	.placeholder {
		width: 250px;
		border-radius: 5px;
		background: #eee;
		height: 250px;
	}

	.loading {
		position: absolute;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-weight: bold;
	}

	.button-area {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		text-align: center;
		height: 50px;
		z-index: 1;
	}
</style>
