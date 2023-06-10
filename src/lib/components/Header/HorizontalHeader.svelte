<script lang="ts">
    import Logo from '$lib/images/logo/Crumbled_Cakery_Logo.svelte';

    export let products;
    export let drawer = false;
    export let open;
</script>

<header id="horizontal-header">
    <a id="header-logo" href="/home">
        <svelte:component this={Logo} />
    </a>

    <button  on:click={() => open = true}>
        <img id="menu-img" src="/images/icons/menu.svg" alt="Menu drawer"/> 
    </button>

    
</header>

<style lang="postcss">
    header {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 15vh;
        margin: 0;
        display: flex;
        justify-content: space-between;
        z-index: 2;

        background: #FFE2CD;
		background-size: 100%;
    }

    
    :global(#menu-icon) {
        margin-right: 2vw;
        vertical-align: middle;
        height: 100%;
    }

    button {
        margin-left: auto;
        margin-right: 0;
        display: block;

        border: none;
        cursor: pointer;
        appearance: none;
        background-color: inherit;

        height: rfs(5.5rem);
        vertical-align: middle;
        align-self: center;

        img {
            height: 100%;
            width: 100%;
        }
    }

    

    #header-logo {
        margin-left: 2vw;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }

    :global(.panel > div) {
		margin:0;
		padding: 0;
		border: 0;
        width: fit-content;
	}

    svg {
        max-height: 100%;
    }

</style>