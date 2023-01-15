<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import OrderFormField from './OrderFormField.svelte';
	export let blok;
	console.log('blok')
	console.log(blok)
	const blokOptions = blok.options
	const countOptionsAndPricing = blok.countOptionsAndPricing
	console.log('blokOptions')
	console.log(blokOptions)
</script>

<section class="form-section" use:storyblokEditable={blok}>
	<section class="flex-item">
		<img src={blok.image.filename} />
	</section>
	<form id="order-form" method="POST">
		<section class="form-info-section" use:storyblokEditable={blok}>
			<h2>{blok.productName}</h2>
			<h4>Starting at ${blok.startingPrice}</h4>
			<h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
		</section>
			<OrderFormField fieldData={blokOptions} countOptionsAndPricing={countOptionsAndPricing}/>
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
    align-items: center;
    gap: 5%;
		margin-left: 3%;
		margin-right: 3%;
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
    margin-top: 8%;
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
