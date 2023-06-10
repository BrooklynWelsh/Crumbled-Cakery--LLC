<svelte:options immutable />

<script lang="ts">
	import { useStoryblokApi } from '@storyblok/svelte';
	import { onMount } from 'svelte';
	import Breakpoints from 'svelte-breakpoints';
	import type { Readable } from 'svelte/store';
	import type { BreakpointMatch } from 'svelte-breakpoints';
	import VerticalHeader from './Header/VerticalHeader.svelte';
	import HorizontalHeader from './Header/HorizontalHeader.svelte';

	let products;
	let open = false;
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
	});

	const mediaQueries = {
		sm: '(min-width: 0px)',
		md: '(min-width: 834px)',
		lg: '(min-width: 1440px)',
	};

	let match: Readable<BreakpointMatch>;
	// type BreakpointMatch = 'sm' | 'md' | 'lg' | 'xl' | undefined
</script>


	<Breakpoints queries={mediaQueries} bind:match>
		{#if $match === 'lg'}
			<VerticalHeader {products}/>
		{:else if $match === 'md' || $match === 'sm'}
			<!-- Med/small screens use horizontal top header with expandable menu -->
			<HorizontalHeader bind:drawer={open} {products}/>
		{/if}
		<!-- End Med/Small screen header-->

	</Breakpoints>

<style lang="postcss">

</style>
