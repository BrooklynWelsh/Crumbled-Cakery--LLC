<script lang="ts">
	import { logo } from './../shape.js';
	import { quintOut, quadIn, sineIn } from 'svelte/easing';
	import { fade, draw, fly, scale } from 'svelte/transition';
</script>

<header>
	<a>Order</a>
	<a>About</a>
	<svg
		id="header-logo"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		width="1080"
		zoomAndPan="magnify"
		viewBox="0 120 810 509.999993"
		preserveAspectRatio="xMidYMid meet"
		version="1.0"
	>
		<g out:fade={{ duration: 400 }} opacity="1.2">
			<!-- <path
            in:expand={{ duration: 400, delay: 1000, easing: quintOut }}
            style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;"
            d={outer}
        /> -->
			<path
				in:fade={{ duration: 2000, easing: sineIn }}
				style="stroke: #000000; stroke-width: 1.5; fill: #000000;"
				d={logo}
			/>
		</g>
	</svg>
	<a>Contact</a>
	<a>About</a>
</header>

<style>
	header {
		height: 9vw;
		border-bottom: black solid 2px;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}

	header > a {
		margin-right: auto;
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
	}

	#header-logo {
		height: 100%;
		width: 100%;
		/* margin-left: auto;
		margin-right: auto;
		display: block; */
	}
</style>
