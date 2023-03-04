<svelte:options immutable />

<script lang="ts">
	import Logo from '$lib/images/logo/Crumbled_Cakery_Logo.svelte';
	import { useStoryblokApi } from '@storyblok/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Hoverable from './Hoverable.svelte';
	// import { quintOut, quadIn, sineIn } from 'svelte/easing';
	// import { fade, draw, fly, scale } from 'svelte/transition';

	let products;
	onMount(async () => {
		const storyblokApi = useStoryblokApi();

		const { data } = await storyblokApi.get('cdn/stories', {
			version: 'published',
			starts_with: 'order',
			is_startpage: false
		});
		products = data.stories.sort((a, b) => {
			const nameA = a.name.toUpperCase(); // ignore upper and lowercase
			const nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		});
		console.log('PRODUCTS')
		console.log(products)
	});
</script>

<header>
	<a id="header-logo" href="/">
		<svelte:component this={Logo} />
	</a>
	<Hoverable let:hovering={hovering}>
		<div class="hover-div" class:active={hovering}>
			<h3>ORDER</h3>
			{#key hovering}
			{#if hovering}
			<ul transition:fly={{ y: -100, duration: 250 }}>
				{#each products as product}
				<li><a href='/{product.full_slug}'>{product.name}</a></li>
				{/each}
			</ul>
			{/if}
			{/key}
		</div>
	</Hoverable>
	<Hoverable let:hovering={hovering}>
		<div class="hover-div" class:active={hovering}>
			<h3>
				<a>EVENTS</a>
			</h3>
		</div>
	</Hoverable>
	<Hoverable let:hovering={hovering}>
		<div class="hover-div" class:active={hovering}>
			<h3>
				<a>CONTACT</a>
			</h3>
		</div>
	</Hoverable>	
	<Hoverable let:hovering={hovering}>
		<div class="hover-div" class:active={hovering}>
			<h3>
				<a>FAQ</a>
			</h3>
		</div>
	</Hoverable>
</header>

<style lang="postcss">

	.hover-div {
		margin:0;
		padding: 0;
		border: 0
	}

	#header-logo {
		width: 80%;
		object-fit: cover;
		margin-top: rfs(5rem)
	}

	header div:last-child{
		margin-bottom: rfs(5rem)
	}

	li {
		list-style: none
	}

	a:any-link {
		font-size: rfs(3rem);
		color: #000000;
		text-decoration: none;
	}

	header > a {
			min-width: 100px;			
		}

	/* media query for 600 px wide  */
	
	header {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 25vw;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		background: #efe4d9;
		z-index: 2;
	}

	header > h3 > a {
		margin-right: auto;
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
		font-weight: lighter;
		color: #000000;
		text-shadow: 1px 1px 4px;
		font-size: rfs(4rem);
	}

	h3 {
		margin-right: auto;
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
		font-weight: lighter;
		color: #000000;
		text-shadow: 1px 1px 4px;
		text-align: center;
		font-size: rfs(4rem);
	}

</style>
