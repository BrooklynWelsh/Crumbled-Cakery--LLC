<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<script>
	import { quintOut, quadIn, sineIn } from 'svelte/easing';
	import { fade, draw, fly, scale } from 'svelte/transition';
	import { expand } from './src/custom-transitions.js';
	import { logo } from './src/shape.js';

	let visible = true;
</script>

{#if visible}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		width="1080"
		zoomAndPan="magnify"
		viewBox="0 0 810 809.999993"
		height="1080"
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
				out:scale={{ duration: 4000 }}
				style="stroke: #000000; stroke-width: 1.5; fill: #000000;"
				d={logo}
			/>
		</g>
	</svg>

	<div class="centered" out:fly={{ y: -20, duration: 800 }}>
		{#each 'SVELTE' as char, i}
			<span in:fade={{ delay: 1000 + i * 150, duration: 800 }}>{char}</span>
		{/each}
	</div>
{/if}

<label>
	<input type="checkbox" bind:checked={visible} />
	toggle me
</label>

<link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet" />

<style>
	svg {
		width: 100%;
		height: 100%;
	}

	path {
		fill: white;
		opacity: 1;
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
