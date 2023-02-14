<script lang="ts">
	import OrderFormFields from "./OrderFormFields.svelte";

    export let blok;

    console.log('blok')
    console.log(blok)
    const blokOptions = blok.options
	const countOptionsAndPricing = blok.countOptionsAndPricing
	const setOptions = blok.setOptions
	const sizeOptions = blok.sizeOptions

    const ordering = {}, // map for efficient lookup of sortIndex
    sortOrder = ['countOptionsAndPricing', 'setOptions', 'sizeOptions', 'styleOptions', 'options'];
	for (let i=0; i<sortOrder.length; i++) {
		ordering[sortOrder[i]] = i;
	}
    const allOptions = Object.entries(blok)
						.filter((optionArr) => optionArr[0] !== "image" && Array.isArray(optionArr[1]) && optionArr[1].length > 0)
						.sort((a,b) => {
							return (ordering[a[0]] - ordering[b[0]]) || a[0].localeCompare(b[0])
						})
</script>

<OrderFormFields fieldData={blokOptions} {allOptions} {countOptionsAndPricing} {setOptions} {sizeOptions}/>

<style>	
    form > section {
        display: flex;
    flex-direction: column;
    align-items: center;
    }

    .form-section {
        display: flex;
        justify-content: center;
        gap: 5%;
        align-items: stretch;
        margin-left: 3%;
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
        border-radius: 3%;
    -webkit-box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 60%);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 60%);
    box-shadow: 2px 2px 13px 0px rgb(0 0 0 / 60%);
    }

    #submit-button {

    }
</style>