<script lang="ts">
	import * as GenericFieldTypes from '$types/GenericOrderFormFields';
	import OrderFieldDropDown from './OrderFieldDropDown.svelte';
	export let fieldData: GenericFieldTypes.ValidFormField;
	export let countOptionsAndPricing;
	export let setOptions;
	export let sizeOptions;
	export let allOptions; 

	console.log('alloptions')
	console.log(allOptions)
	
</script>

<!-- <section class="form-option">
	<fieldset>
		<OrderFieldDropDown {countOptionsAndPricing} {setOptions} {sizeOptions}/>
	</fieldset>
</section> -->

{#each allOptions as [optionTitle, optionArray]}
	{#if optionTitle === 'sizeOptions'}
		<section class="form-option">
			<OrderFieldDropDown sizeOptions={optionArray} />
		</section>
	{:else if optionTitle === 'styleOptions'}
	<section class="form-option">
		<label for="{optionArray[0].component}">Style:</label>
		<OrderFieldDropDown topLevelOption={optionArray} />
	</section>
	{:else if optionTitle === 'countOptionsAndPricing'}
	<section class="form-option">
		<OrderFieldDropDown countOptionsAndPricing={optionArray} />
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

<style>

	div {
		margin-bottom: 10px;
	}

	label {
    display: block;
		max-width: 100%;
		width: auto;
  }

	fieldset {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		border: none;
		margin-top: 2%;
	}

	textarea {
    margin-top: 1%;
    width: auto;
  }

	.form-option {
		display: flex;
		flex-direction: column;
	}

</style>
