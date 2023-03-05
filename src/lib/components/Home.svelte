<svelte:options immutable />

<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
    export let blok;

    console.log(blok)
</script>

<div class="collage" use:storyblokEditable={blok}>
    <figure id="tr">
        <img src={blok.topRightImage.filename} alt={blok.topRightImage.alt} />
    </figure>
    <figure  id="tl">
        <img src={blok.topLeftImage.filename} alt={blok.topLeftImage.alt} />
    </figure>
    <figure id="bl">
        <img src={blok.bottomLeftImage.filename} alt={blok.bottomLeftImage.alt} />
    </figure>
    <figure id="br">
        <img src={blok.bottomRightImage.filename} alt={blok.bottomRightImage.alt} />
    </figure>
</div>

<style lang="postcss">
    .collage {
        margin-top: 0;
		display: grid;
		grid-template-columns: repeat(11, 1fr);
		grid-auto-rows: 1fr;
		grid-template-areas:
		"tl tl tl tl tl tl tl tr tr tr tr"
		"tl tl tl tl tl tl tl tr tr tr tr"
		"tl tl tl tl tl tl tl tr tr tr tr"
		"tl tl tl tl tl tl tl tr tr tr tr"
        "tl tl tl tl tl tl tl tr tr tr tr"
        "tl tl tl tl tl tl tl br br br br"
        "bl bl bl bl bl bl bl br br br br"
        "bl bl bl bl bl bl bl br br br br"
        "bl bl bl bl bl bl bl br br br br"
        "bl bl bl bl bl bl bl br br br br";

        max-width: calc(100vw - 19vw);
        max-height: 100vh;
        column-gap: 1.5vw;
        row-gap: 1.5vw;
        overflow-y: hidden;
	}

    figure {
        margin: 0;
    }

    #tr {
        grid-area: tr;
    }

    #tl {
        grid-area: tl;
    }

    #bl {
        grid-area: bl;
    }

    #br {
        grid-area: br;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    :global(div .content-container) {
        margin-top: 0; /** Override global margin for collage to take up entire screen */
    }
</style>
