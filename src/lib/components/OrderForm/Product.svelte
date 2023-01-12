<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import OrderFormField from './OrderFormField.svelte';
	export let blok;
	console.log('blok')
	console.log(blok)
	const blokOptions = blok.options

	console.log('blokOptions')
	console.log(blokOptions)
</script>

<section class="form-info-section" use:storyblokEditable={blok}>
	<h2>{blok.productName}</h2>
	<h4>Starting at ${blok.startingPrice}</h4>
	<h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
</section>
<section class="form-section" use:storyblokEditable={blok}>
	<div class="flex-item">
		<img src={blok.image.filename} />
	</div>
	<form>
			<OrderFormField fieldData={blokOptions} />
	</form>
</section>


<style>

	.form-info-section {
		display: flex;
    flex-direction: column;
    align-items: center;
	}

	.form-section {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 5%;
	}

	.flex-item {
		display: flex;
    width: 44%;
		margin-left: 2%;
	}

	h4 {
		flex-basis: 50%;
	}
	form {
		flex-grow: 1;
		flex-shrink: 0;
		margin-right: 10%;
	}

	img {
		flex-basis: 30%;
    flex-shrink: 1;
    /* min-width: 20%; */
    object-fit: cover;
    max-width: 100%;
	}
</style>
