<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '../css/splide-default.min.css';
	import { onMount } from 'svelte';
	import type ProductMetadata from '$types/ProductMetaData';
	export let metadataObject: ProductMetadata[];

	let main: Splide;
	let thumbs: SplideSlide;

	const mainOptions = {
		type: 'loop',
		fixedHeight: '45vh',
		fixedWidth: '25vw',
		easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
		snap: true,
		flickPower: 200,
		flickMaxPages: 1,
		gap: '2rem',
		pagination: false,
		perPage: 3,
		perMove: 1,
		arrows: false,
	};

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide);
		}
	});
</script>

<div class="wrapper">
	<Splide options={mainOptions} bind:this={main} aria-labelledby="thumbnails-example-heading">
		{#each metadataObject as obj}
			<SplideSlide>
				<img
					style="display: block; margin: auto; max-height: 100%; max-width: 100%;"
					src={obj.imageLoc}
					alt={obj.imageLoc}
				/>
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style lang="postcss">
	.wrapper {
		max-width: 50vw;
		max-height: 25vh;
		margin: 25vh auto;
		z-index: 1;
	}

	img {
		border-radius: 20px;
		-webkit-box-shadow: 2px 2px 21px 4px rgb(0 0 0 / 60%);
		-moz-box-shadow: 2px 2px 21px 4px rgba(0, 0, 0, 60%);
		box-shadow: 2px 2px 21px 4px rgb(0 0 0 / 60%);
	}

	:global(.splide--slide) {
		margin-top: rfs(1rem);
	}

	:global(.splide__track) {
		overflow: visible;
		height: 40vh;
	}

	:global(.splide__slide > img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		max-height: 100%;
		max-width: 100%;
	}
</style>
