<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import VisualBuilder from './cakes/VisualBuilder.svelte';
	import OrderFormField from './OrderFormField.svelte';
	export let blok;
	export let slug: string;
	console.log('blok')
	console.log(blok)
	console.log('slug')
	console.log(slug)
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
	console.log('all Options')
	console.log(allOptions)
</script>

{#if slug && slug === 'order/cakes'}
	<VisualBuilder options={blok}/>
{:else}
	<section class="form-section" use:storyblokEditable={blok}>
		<section class="flex-item">
			<img src={blok.image.filename} />
			{#if blok.image.filename.includes('placeholder')}
				<hr>
				<strong>WARNING: THIS IMAGE IS A PLACEHOLDER</strong><br>
				<strong>NOT FOR PUBLIC USE, CHANGE BEFORE GOING PUBLIC!!</strong>
			{/if}
		</section>
		<form id="order-form" method="POST">
			<section class="form-info-section" use:storyblokEditable={blok}>
				<h2>{blok.productName}</h2>
				<h4>Starting at ${blok.startingPrice}</h4>
				<h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
			</section>
			<OrderFormField fieldData={blokOptions} {allOptions} {countOptionsAndPricing} {setOptions} {sizeOptions}/>
			<section class="form-option gift-option">
				<fieldset>
					<label for="gift-wrap">Gift wrapping?</label>
					<input type="checkbox" id="gift-wrap" name="gift-wrap" />
				</fieldset>
			</section>
			<section class='add-to-cart-section'>
				<button type="submit" id='submit-button'>Add to Cart</button>
			</section>
		</form>
	</section>
{/if}

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

	:global(.form-option) {
		display: flex;
		flex-direction: column;
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
