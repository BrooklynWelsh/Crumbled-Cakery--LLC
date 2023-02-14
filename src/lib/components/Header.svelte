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
	<a href="/">
		<svelte:component this={Logo} />
	</a>
	<h3>
		<a>CONTACT</a>
	</h3>
	<h3>
		<a>FAQ</a>
	</h3>
</header>

<style>

header > a {
		height: 100%;
		width: 100%;
		min-width: 100px;
		flex: 2;
		object-fit: cover;
		margin-top: 1%;
	}

	/* media query for 600 px wide  */
	
	header {
		height: 9vw;
		display: flex;
		align-items: center;
		margin: 0 auto;
		background-image: url('/images/site_template/blurred_header.svg');
		background-size: cover;
		border-width: 0px 0 50px 0;
		border-style: solid;
		border-image-source: url('/images/site_template/header_border.svg');
		border-image-slice: 38% 0% 0% 7%;
		border-image-width: 100% 0% 0% 0%;
	}

	header > h3 > a {
		margin-right: auto;
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
		font-weight: normal;
		color: #cbae9d;
		text-shadow: 1px 1px 4px;
		font-size: rfs(2rem);
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
		position: absolute;
	}

	h3 {
		flex: 1;
		text-align: center;
	}

</style>
