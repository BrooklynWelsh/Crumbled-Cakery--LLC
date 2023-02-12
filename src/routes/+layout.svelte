<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/global.css">
</svelte:head>

<Header />
<slot />

<style>
	/* Header/Nav styles go here */
	@font-face {
		font-family: 'Garet Book';
		src:url('/fonts/garet-book.ttf') format('truetype'),
				url('/fonts/garet-book.ttf') format('woff'),
				url('/fonts/garet-book.ttf') format('woff2'),
				url('/fonts/garet-book.ttf') format('svg'),
				url('/fonts/garet-book.ttf') format('embedded-opentype');
		font-weight: normal;
		font-display: swap;
	}

	:global(*) {
		font-family: 'Garet Book';
	}

	:global(body) {
		font-family: 'Garet Book';
		overflow-y: visible;
		overflow-x: hidden;
		margin: 0;
	}

	:global(.body-container) {
		margin: 2.5% 1%;
	}

	:global(button, label, select, textarea) {
		font-family: inherit;
		font-size: 100%;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	@media screen and (min-width: 1240px) {
		:root {
			--fluid-screen: calc(var(--fluid-max-width) * 1px);
		}
	}
	:global(body) {
		font-size: var(--step-0);
		background-color: #d0b3a1;
	}
</style>
