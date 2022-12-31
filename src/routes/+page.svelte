<!-- out:scale={{ duration: 4000, opacity: 0.9 }} -->
<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: App.PageData;
	const urls = import.meta.glob('$src/images/products/*.{jpg, png,svg}', { eager: true });
	console.log(urls);
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<Carousel imageGlob={urls} />

<link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet" />

<style>
	#header-logo {
	}

	label {
		position: absolute;
		top: 1em;
		left: 1em;
	}

	.centered {
		font-size: 20vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Overpass';
		letter-spacing: 0.12em;
		color: #676778;
		font-weight: 400;
	}

	.centered span {
		will-change: filter;
	}
</style>
