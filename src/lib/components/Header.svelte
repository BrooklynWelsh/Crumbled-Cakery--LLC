<svelte:options immutable />

<script lang="ts">
	import { useStoryblokApi } from '@storyblok/svelte';
	import { onMount } from 'svelte';
	import Hoverable from "$components/Hoverable.svelte";
    import Logo from '$lib/images/logo/Crumbled_Cakery_Logo.svelte';
    import { fly } from "svelte/transition";

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
</script>

<header id="vertical-header" class=" lg:bg-gradient-to-r from-[#FFE2CD] from-[89%] to-[#fff7eb] to-[100%] lg:flex lg:flex-col lg:items-center lg:w-[22vw] lg:h-screen lg:justify-start lg:fixed lg:t-0 lg:l-0">
    <a href="/home" class="mt-8 object-cover pr-8 pl-2 2xl:pr-12 2xl:pl-4 w-full ">
        <svelte:component this={Logo} />
    </a>
    <Hoverable let:hovering={hovering}>
        <div class="my-8" class:active={hovering}>
            <h3 class="text-lg lg:text-4xl text-center text-black">ORDER</h3>
            {#key hovering}
                {#if hovering}
                <ul transition:fly={{ y: -100, duration: 250 }} class="my-8 text-center">
                    {#each products as product}
                        <li class="lg:my-4"><a href='/{product.full_slug}' class="text-lg lg:text-3xl">{product.name}</a></li>
                    {/each}
                </ul>
                {/if}
            {/key}
        </div>
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <div class="my-8" class:active={hovering}>
            <h3 class="text-lg lg:text-4xl text-center text-black">
                <a href='/updates'>UPDATES</a>
            </h3>
        </div>
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <div class="my-8" class:active={hovering}>
            <h3 class="text-lg lg:text-4xl text-center text-black">
                <a href='/contact'>CONTACT</a>
            </h3>
        </div>
    </Hoverable>	
    <Hoverable let:hovering={hovering}>
        <div class="my-8" class:active={hovering}>
            <h3 class="text-lg lg:text-4xl text-center text-black">
                <a href='/faq'>FAQ</a>
            </h3>
        </div>
    </Hoverable>
</header>

<style lang="postcss">
	header {
		/* Dark mode: rich-black #0C1821 */
	}

	h3 {
		text-shadow: 1px 1px 4px;	/* No text-shadow support for TailwindCSS currently */
		}
</style>
