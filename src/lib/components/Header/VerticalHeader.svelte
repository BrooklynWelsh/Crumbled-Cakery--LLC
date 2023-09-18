<script lang="ts">
	import Hoverable from "$components/Hoverable.svelte";
    import Logo from '$lib/images/logo/Crumbled_Cakery_Logo.svelte';
    import { fly } from "svelte/transition";

    export let products;
</script>

<header id="vertical-header" class="w-[22vw] h-screen justify-start">
    <a id="header-logo" href="/home">
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
                <a href='/updates'>UPDATES</a>
            </h3>
        </div>
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <div class="hover-div" class:active={hovering}>
            <h3>
                <a href='/contact'>CONTACT</a>
            </h3>
        </div>
    </Hoverable>	
    <Hoverable let:hovering={hovering}>
        <div class="hover-div" class:active={hovering}>
            <h3>
                <a href='/faq'>FAQ</a>
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
		color: #000000;
		text-decoration: none;
	}

	li > a:any-link {
		font-size: rfs(2.1rem);
	}

	header > a {
			min-width: 100px;			
		}

	/* media query for 600 px wide  */
	
	header {
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		z-index: 2;

		background: linear-gradient(to right, #FFE2CD 89%, #fffaf5 100%);
		background-size: 100%;
	}

	/** header:before, header:after {
		content: "";
		height: 1px;

		background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(147,147,147,1) 50%,rgba(0,0,0,0) 100%);
		display: block;
		margin-bottom: 10px;
		margin-top: 10px;
	} */

	header > h3 > a {
		margin-right: auto;
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
		font-weight: lighter;
		color: #000000;
		text-shadow: 1px 1px 4px;
		font-size: rfs(3rem);
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
		font-size: rfs(3rem);
	}
</style>