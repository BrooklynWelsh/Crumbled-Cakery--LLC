<script lang="ts">
	import * as GenericFieldTypes from '$types/GenericOrderFormFields';
	import OrderFieldDropDown from './OrderFieldDropDown.svelte';
	export let fieldData: GenericFieldTypes.ValidFormField;
	let selected;

	console.log('Field Data')
	console.log(fieldData)
</script>

{#each fieldData as topLevelOption}
	<section class="form-option">
	{#if !topLevelOption.options} <!-- Must be a free text option -->
		<fieldset>
			<label for="{topLevelOption.component}">{topLevelOption.title}</label>
			<textarea id={topLevelOption.component} name={topLevelOption.component} rows="5"/>
		</fieldset>
	{:else if topLevelOption.options} <!-- Must be a multiple choice option -->
		<fieldset>
			<label for={topLevelOption.component}>{topLevelOption.title}:</label>
			<OrderFieldDropDown topLevelOption={topLevelOption}/>
	</fieldset>
	{/if}



	<!-- <legend>{fieldData.title}</legend>
	{#if GenericFieldTypes.isFreeTextInput(fieldData)}
		<p>{fieldData.description}</p>
		<textarea form="order-form" id={fieldData.id} name={fieldData.title} />
	{:else if GenericFieldTypes.isRadioField(fieldData)}
		{#each fieldData.options as option}
			<input id={fieldData.id} type="radio" name={fieldData.title} value={option.name} />
			<label for={fieldData.id}>{option.name}</label>
		{/each}
	{/if} -->
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
		border: 5px solid rgba(0 0 0 / 50%);
	}



</style>
