<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<slot />

<style>
	/* Header/Nav styles go here */
	@font-face {
		font-family: 'Garet Book';
		src: local('Garet Book'), local('Garet-Book'), local('garet book'), local('garet-book'),
			url('static/fonts/garet-book.ttf'), format('truetype');
		font-weight: normal;
		font-display: swap;
	}

	:global(body) {
		font-family: 'Garet Book', sans-serif;
		overflow-y: visible;
		margin-top: 0;
	}

	:global(.body-container) {
		margin: 2.5% 1%;
	}

	:global(button, label, select, textarea) {
		font-family: inherit;
		font-size: 100%;

		width: 150px;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(fieldset) {
		position: relative;
	}

	/* :global(legend) {
		position: absolute;
		bottom: 0;
		right: 0;
	} */

	/* @link https://utopia.fyi/type/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

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

	@media screen and (min-width: 1240px) {
		:root {
			--fluid-screen: calc(var(--fluid-max-width) * 1px);
		}
	}

	:global(:root) {
	}

	:global(body) {
		font-size: var(--step-0);
		background-color: #d0b3a1;
	}

	:global(:root) {
		--fc-3xs-min: (var(--fc-s-min) * 0.25);
		--fc-3xs-max: (var(--fc-s-max) * 0.25);

		--fc-2xs-min: (var(--fc-s-min) * 0.5);
		--fc-2xs-max: (var(--fc-s-max) * 0.5);

		--fc-xs-min: (var(--fc-s-min) * 0.75);
		--fc-xs-max: (var(--fc-s-max) * 0.75);

		--fc-s-min: (var(--f-0-min, 18));
		--fc-s-max: (var(--f-0-max, 20));

		--fc-m-min: (var(--fc-s-min) * 1.5);
		--fc-m-max: (var(--fc-s-max) * 1.5);

		--fc-l-min: (var(--fc-s-min) * 2);
		--fc-l-max: (var(--fc-s-max) * 2);

		--fc-xl-min: (var(--fc-s-min) * 3);
		--fc-xl-max: (var(--fc-s-max) * 3);

		--fc-2xl-min: (var(--fc-s-min) * 4);
		--fc-2xl-max: (var(--fc-s-max) * 4);

		--fc-3xl-min: (var(--fc-s-min) * 6);
		--fc-3xl-max: (var(--fc-s-max) * 6);

		/* T-shirt sizes */
		--space-3xs: calc(
			((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-3xs-max) - var(--fc-3xs-min)) * var(--fluid-bp)
		);
		--space-2xs: calc(
			((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp)
		);
		--space-xs: calc(
			((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-xs-min)) * var(--fluid-bp)
		);
		--space-s: calc(
			((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) * var(--fluid-bp)
		);
		--space-m: calc(
			((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) * var(--fluid-bp)
		);
		--space-l: calc(
			((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) * var(--fluid-bp)
		);
		--space-xl: calc(
			((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) * var(--fluid-bp)
		);
		--space-2xl: calc(
			((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-2xl-min)) * var(--fluid-bp)
		);
		--space-3xl: calc(
			((var(--fc-3xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-3xl-min)) * var(--fluid-bp)
		);

		/* One-up pairs */
		--space-3xs-2xs: calc(
			((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-3xs-min)) * var(--fluid-bp)
		);
		--space-2xs-xs: calc(
			((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-2xs-min)) * var(--fluid-bp)
		);
		--space-xs-s: calc(
			((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-xs-min)) * var(--fluid-bp)
		);
		--space-s-m: calc(
			((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) * var(--fluid-bp)
		);
		--space-m-l: calc(
			((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) * var(--fluid-bp)
		);
		--space-l-xl: calc(
			((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) * var(--fluid-bp)
		);
		--space-xl-2xl: calc(
			((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-xl-min)) * var(--fluid-bp)
		);
		--space-2xl-3xl: calc(
			((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-2xl-min)) * var(--fluid-bp)
		);

		/* Custom pairs */
		--space-s-l: calc(
			((var(--fc-s-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-s-min)) * var(--fluid-bp)
		);
	}
</style>
