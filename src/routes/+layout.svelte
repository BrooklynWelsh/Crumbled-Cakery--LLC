<script lang="ts">
	import '../app.postcss';
	import '/src/app.postcss';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<slot />

<style>
	/* Header/Nav styles go here */
	@font-face {
		font-family: 'Garet Book';
		src: url('/fonts/garet-book.ttf') format('truetype'),
			url('/fonts/garet-book.ttf') format('woff'), url('/fonts/garet-book.ttf') format('woff2'),
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
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(select, textarea) {
		font-size: 100%;
	}

	:global(body) {
		background-color: #fffaf5;
	}
</style>
