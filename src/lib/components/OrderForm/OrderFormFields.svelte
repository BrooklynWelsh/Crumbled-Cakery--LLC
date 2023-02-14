<script lang="ts">
	import type * as GenericFieldTypes from '$types/GenericOrderFormFields';
	import { onMount } from 'svelte';
	import OrderFieldDropDown from './OrderFieldDropDown.svelte';
	import SubForm from './SubForm.svelte'
	import CountOption from "./FormFields/CountOption.svelte";
  	import SizeOption from "./FormFields/SizeOption.svelte";
	export let blok;
	export let allOptions;

	let selectedProduct = null
	let selectedProductObject = null
	let productTypes = null
	let singularProductName = null
	let activeCounts = []


	console.log('alloptions')
	console.log(allOptions)

	console.log('blok')
	console.log(blok)

	if (blok && blok.productName.endsWith('s')) {
		singularProductName = blok.productName.slice(0, blok.productName.length - 1)
	}

	// If given product has sub-types, choose a default one to render
	if (Array.isArray(allOptions)) {
		console.log('productTypes')
		console.log(allOptions.productTypes)
		for (const optionArray of allOptions) {
			if (optionArray[0] === 'productTypes') {
					productTypes = optionArray[1]
					selectedProduct = optionArray[1][0].productName
					selectedProductObject = optionArray[1][0]
					
					console.log('selectedobject')
					console.log(selectedProductObject)
			}
		}
	}

	onMount(() => {
		if (document && selectedProductObject) document.getElementById('product-image').src = selectedProductObject.image.filename
	})

	const changeActiveProduct = () => {

		if (productTypes !== null) {
			for (const product of productTypes) {
				console.log('product')
				console.log(product)
				if (product.productName == selectedProduct) {
					selectedProductObject = product
					if (document) {
						document.getElementById('product-image').src = product.image.filename
					}
				}
			}
		}
	}
</script>

<!-- <section class="form-option">
	<fieldset>
		<OrderFieldDropDown {countOptionsAndPricing} {setOptions} {sizeOptions}/>
	</fieldset>
</section> -->

<!-- TODO: Both OrderFormFields and OrderFieldDropDown has similar if-else blocks, need to refactor -->
{#each allOptions as [optionTitle, optionArray]}
	{#if optionTitle === 'productTypes'}
		<section class="form-option">
			<fieldset>
				<legend>Which type of {singularProductName || blok.productName} would you like?</legend>
				{#each optionArray as product}
					<div>
						<label for="productType">{product.productName}</label>
						<input bind:group={selectedProduct} on:change={changeActiveProduct} value="{product.productName}" type="radio" name="productType" id="size" required/>
					</div>
				{/each}
			</fieldset>
		</section>
		{#key selectedProductObject}
		<SubForm blok={selectedProductObject} />
		{/key}
	{:else if optionTitle === 'sizeOptions'}
		<SizeOption sizeOptions={optionArray} bind:activeCounts={activeCounts}/>
	{:else if optionTitle === 'styleOptions'}
	<section class="form-option">
		<fieldset>
			<label for="{optionArray[0].component}">Style:</label>
			<OrderFieldDropDown topLevelOption={optionArray} />
		</fieldset>
	</section>
	{:else if optionTitle === 'countOptionsAndPricing'}
	<section class="form-option">
		<fieldset>
			<OrderFieldDropDown countOptionsAndPricing={optionArray} />
		</fieldset>
	</section>
	{:else}
		{#each optionArray as topLevelOption}
			<section class="form-option">
			{#if topLevelOption.title && Object.keys(topLevelOption).length <= 4} <!-- Must be a free text option -->
				<fieldset>
					<label for="{topLevelOption.component}">{topLevelOption.title}</label>
					<textarea id={topLevelOption.component} name={topLevelOption.component} rows="3" cols="33"/>
				</fieldset>
			{:else if topLevelOption.options} <!-- Must be a multiple choice option -->
				<fieldset>
					<label for={topLevelOption.component}>{topLevelOption.title}:</label>
					<OrderFieldDropDown {topLevelOption}/>
				</fieldset>
			{/if}
			</section>
		{/each}
	{/if}
{/each}

<style lang="postcss">

	:global(div) {
		margin-bottom: 10px;
	}

	:global(label) {
    	display: block;
		max-width: 100%;
		width: auto;
  	}

	:global(fieldset) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		border: none;
		margin-top: 2%;
	}

	:global(textarea) {
    margin-top: 1%;
    width: auto;
 	}

	:global(.form-option) {
		display: flex;
		flex-direction: column;
	}

</style>
