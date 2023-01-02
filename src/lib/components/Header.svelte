<svelte:options immutable />

<script lang="ts">
	import Logo from '$lib/images/logo/Crumbled_Cakery_Logo.svelte';
	// import { quintOut, quadIn, sineIn } from 'svelte/easing';
	// import { fade, draw, fly, scale } from 'svelte/transition';
</script>

<header>
	<h3>
		<a href="/order">ORDER</a>
	</h3>
	<h3>
		<a>EVENTS</a>
	</h3>
	<svelte:component this={Logo} />
	<h3>
		<a>CONTACT</a>
	</h3>
	<h3>
		<a>FAQ</a>
	</h3>
</header>

<style>
	/* media query for 600 px wide  */
	:global(:root) {
		--fluid-min-width: 320;
		--fluid-max-width: 2560;

		--fluid-screen: 100vw;
		--fluid-bp: calc(
			(var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
				(var(--fluid-max-width) - var(--fluid-min-width))
		);

		--f--2-min: 12.5;
		--f--2-max: 12.8;
		--step--2: calc(
			((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) * var(--fluid-bp)
		);

		--f--1-min: 15;
		--f--1-max: 16;
		--step--1: calc(
			((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) * var(--fluid-bp)
		);

		--f-0-min: 18;
		--f-0-max: 20;
		--step-0: calc(
			((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) * var(--fluid-bp)
		);

		--f-1-min: 21.6;
		--f-1-max: 25;
		--step-1: calc(
			((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) * var(--fluid-bp)
		);

		--f-2-min: 25.92;
		--f-2-max: 31.25;
		--step-2: calc(
			((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) * var(--fluid-bp)
		);

		--f-3-min: 31.1;
		--f-3-max: 39.06;
		--step-3: calc(
			((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) * var(--fluid-bp)
		);

		--f-4-min: 37.32;
		--f-4-max: 48.83;
		--step-4: calc(
			((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) * var(--fluid-bp)
		);

		--f-5-min: 44.79;
		--f-5-max: 61.04;
		--step-5: calc(
			((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) * var(--fluid-bp)
		);

		--f-6-min: 53.75;
		--f-6-max: 76.29;
		--step-6: calc(
			((var(--f-6-min) / 16) * 1rem) + (var(--f-6-max) - var(--f-6-min)) * var(--fluid-bp)
		);
	}
	header {
		height: 9vw;
		display: flex;
		align-items: center;
		margin: 0 auto;
		background-image: url('/images/site_template/blurred_header.svg');
		background-size: cover;
		border-width: 20px 0 20px 0;
		border-style: solid;
		border-image-source: url('/images/site_template/header_border.svg');
		border-image-slice: 38% 0% 0% 7%;
		border-image-width: 100% 0% 0% 0%;
	}

	header > a {
		margin-right: auto;
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
		color: #cbae9d;
		font-weight: bolder;
		font-size: 1.8em;
		text-shadow: 3px 2px 1px;
	}

	#header-logo {
		height: 100%;
		width: 100%;
		/* margin-left: auto;
		margin-right: auto;
		display: block; */
	}

	header:after {
		content: ' ';
		display: block;
		width: 100%;
		height: 65px;
		position: absolute;
	}

	h3 {
		font-size: var(--step-2);
		flex: 1;
		text-align: center;
	}

	@media screen and (min-width: 1240px) {
		:root {
			--fluid-screen: calc(var(--fluid-max-width) * 1px);
		}
	}
</style>
