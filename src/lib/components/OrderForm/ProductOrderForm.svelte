<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import OrderFormFields from "./OrderFormFields.svelte";

    export let blok;

    let productImage
    const blokOptions = blok.options

    const ordering = {}, // map for efficient lookup of sortIndex
    sortOrder = ['productTypes',  'countOptionsAndPricing', 'setOptions', 'sizeOptions', 'styleOptions', 'options'];
	for (let i=0; i<sortOrder.length; i++) {
		ordering[sortOrder[i]] = i;
	}
    const allOptions = Object.entries(blok)
						.filter((optionArr) => optionArr[0] !== "image" && Array.isArray(optionArr[1]) && optionArr[1].length > 0)
						.sort((a,b) => {
							return (ordering[a[0]] - ordering[b[0]]) || a[0].localeCompare(b[0])
						})

</script>

<section class="form-section" use:storyblokEditable={blok}>
    <section class="flex-item">
        <img bind:this={productImage} id="product-image" src={blok.image.filename} />
        {#key productImage}
            {#if productImage && productImage.src.includes('placeholder')}
                <hr>
                <strong>WARNING: THIS IMAGE IS A PLACEHOLDER</strong><br>
                <strong>NOT FOR PUBLIC USE, CHANGE BEFORE GOING PUBLIC!!</strong>
            {/if}
        {/key}
    </section>
    <form id="order-form" method="POST" action="?/add_to_cart">
        <section class="form-info-section" use:storyblokEditable={blok}>
            <h2>{blok.productName}</h2>
            <h4>Starting at ${blok.startingPrice}</h4>  <!-- TODO: Get rid of explicit field and just grab the minimum price from countOptionsAndPricing (or other option) -->
            <h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
        </section>
        <OrderFormFields {blok} {allOptions}/>
        <section class="form-option gift-option">
            <fieldset>
                <label for="giftWrap">Gift wrapping?</label>
                <input type="checkbox" id="giftWrap" name="giftWrap" />
            </fieldset>
        </section>
        <section class='add-to-cart-section'>
            <button type="submit" id='submit-button'>Add to Cart</button>
        </section>
    </form>
</section>

<style>	
    form > section {
        display: flex;
    flex-direction: column;
    align-items: center;
    }

    .form-section {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: stretch;
        gap: 5%;
        margin-right: 3%;
    }

    .gift-option {
        align-items: flex-start;
    }

    .add-to-cart-section {
        margin-top: 5%;
    }

    button {
        border-radius: 13px;
    }

    .flex-item {
        flex-basis: auto;
        align-self: flex-start;
        max-width: 40%;
    }

    h4 {
        flex-basis: 50%;
        margin-top: 0;
    }
    form {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
        max-width: 60%;
    }

    img {
        flex-basis: 30%;
        flex-shrink: 1;
        /* min-width: 20%; */
        object-fit: cover;
        max-width: 100%;
        max-height: 62vh;
        border-radius: 3%;
        -webkit-box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 60%);
        -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 60%);
        box-shadow: 2px 2px 13px 0px rgb(0 0 0 / 60%);
    }

    #submit-button {

    }
</style>