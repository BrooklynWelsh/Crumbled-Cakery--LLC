<script lang="ts">
	import * as GenericFieldTypes from '$types/GenericOrderFormFields';
	import OrderFieldDropDown from './OrderFieldDropDown.svelte';
	export let fieldData: GenericFieldTypes.ValidFormField;
	export let countOptionsAndPricing;

	console.log('Field Data')
	console.log(fieldData)
</script>

<section class="form-option">
	<fieldset>
		<label for="count">Count:</label>
		<OrderFieldDropDown countOptionsAndPricing={countOptionsAndPricing}/>
	</fieldset>
</section>

{#each fieldData as topLevelOption}
	<section class="form-option">
	{#if !topLevelOption.options} <!-- Must be a free text option -->
		<fieldset>
			<label for="{topLevelOption.component}">{topLevelOption.title}</label>
			<textarea id={topLevelOption.component} name={topLevelOption.component} rows="3" cols="33"/>
		</fieldset>
	{:else if topLevelOption.options} <!-- Must be a multiple choice option -->
		<fieldset>
			<label for={topLevelOption.component}>{topLevelOption.title}:</label>
			<OrderFieldDropDown topLevelOption={topLevelOption}/>
	</fieldset>
	{/if}
</section>
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
