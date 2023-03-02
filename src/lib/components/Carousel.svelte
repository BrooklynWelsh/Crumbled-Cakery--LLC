<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '../css/splide-default.min.css';
	import { onMount } from 'svelte';
	import type ProductMetadata from '$types/ProductMetaData';
	export let metadataObject: ProductMetadata[];

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
	<Splide options={thumbsOptions} bind:this={thumbs}>
		{#each metadataObject as obj}
			<SplideSlide>
				<img src={obj.imageLoc} alt={obj.productName} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style lang="postcss">
	.wrapper {
		max-width: '50vw';
		margin: 2% auto;
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
