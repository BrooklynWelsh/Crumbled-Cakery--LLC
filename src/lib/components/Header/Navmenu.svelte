<script>
    import { fly } from "svelte/transition";
    import Drawer from 'svelte-drawer-component';
    import Hoverable from '$components/Hoverable.svelte';

	export let open = false
</script>

<Drawer { open } placement='top' duration=0.5>
    <button on:click={() => open = false}>
        <img id="close-menu-img" src="/images/icons/x.svg" alt="Close menu drawer" on:click={() => open = false}/>
    </button>

    <nav id="panel-flex-container">
        <Hoverable let:hovering={orderHovering}>
                <h3>ORDER</h3>
                {#key orderHovering}
                    {#if orderHovering}
                    <ul transition:fly={{ y: -100, duration: 250 }}>
                        {#each products as product}
                            <li><a href='/{product.full_slug}'>{product.name}</a></li>
                        {/each}
                    </ul>
                    {/if}
                {/key}
        </Hoverable>
        <div class="hover-div">
            <h3>
                <a href='/updates'>UPDATES</a>
            </h3>
        </div>
        <div class="hover-div">
            <h3>
                <a href='/contact'>CONTACT</a>
            </h3>
        </div>
        <div class="hover-div">
            <h3>
                <a href='/faq'>FAQ</a>
            </h3>
        </div>
    </nav>
</Drawer>

<style lang="postcss">
    li {
		list-style: none;
	}

    li > a:any-link {
		font-size: rfs(2.1rem);
	}

    :global(.drawer.open) {
        height: 100vh;
        width: 100vw;
    }

    :global(aside.drawer > .panel.top) {
        background: #FFE2CD;
		background-size: 100%;

        height: 100vh;
        width: 100vw;

        button {
            margin-top: rfs(calc(5.5rem / 2));
        }
    }

    #panel-flex-container {
        --button-margin: rfs(calc(5.5rem / 2));
        --button-height: rfs(5.5rem);
        --combined-button-height: calc(var(--button-height) + var(--button-margin));

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        z-index: 2;
        height: calc(100% - var(--combined-button-height));
        width: 100vw;

        h3 > a {
            margin-right: auto;
            margin-left: auto;
            margin-top: auto;
            margin-bottom: auto;
            font-weight: lighter;
            color: #000000;
            text-shadow: 1px 1px 4px;
		    font-size: rfs(3rem);
	    }
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

        a {
            margin-right: auto;
            margin-left: auto;
            margin-top: auto;
            margin-bottom: auto;
            font-weight: lighter;
            color: #000000;
            text-shadow: 1px 1px 4px;
            font-size: rfs(3rem);
	    }
	}


	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>