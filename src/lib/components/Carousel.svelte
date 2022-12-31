<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '../css/splide-default.min.css';
	import { onMount } from 'svelte';
	import { BASE_PRODUCT_IMAGE_URL } from '$lib/consts';
	export let imageGlob: object;

	let main: Splide;
	let thumbs: SplideSlide;

	const mainOptions = {
		type: 'fade',
		fixedHeight: '70vh',
		width: '100%',
		pagination: false,
		arrows: false,
		cover: false
	};

	const thumbsOptions = {
		rewind: true,
		fixedWidth: 104,
		fixedHeight: 58,
		isNavigation: true,
		gap: 10,
		focus: 'center',
		pagination: false,
		cover: true,
		dragMinThreshold: {
			mouse: 4,
			touch: 10
		},
		breakpoints: {
			640: {
				fixedWidth: 66,
				fixedHeight: 38
			}
		}
	};

	const urls: string[] = [];
	for (const path in imageGlob) {
		urls.push(path);
	}

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide);
		}
	});
</script>

<div class="wrapper">
	<Splide options={mainOptions} bind:this={main} aria-labelledby="thumbnails-example-heading">
		{#each urls as image}
			<SplideSlide>
				<img
					style="display: block; margin: auto; max-height: 100%; max-width: 100%;"
					src="{image}"
					alt={image}
				/>
			</SplideSlide>
		{/each}
	</Splide>
	<Splide options={thumbsOptions} bind:this={thumbs}>
		{#each urls as image}
			<SplideSlide>
				<img src="{image}" alt={image} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	.wrapper {
		max-width: '50vw';
		margin: 2% auto;
	}
	.splide__slide {
		background: #eee;
	}
	.splide__slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		max-height: 100%;
		max-width: 100%;
	}
	.splide--nav {
		margin-top: 2rem;
		width: 50vw;
	}

	.splide__track {
	}
</style>
