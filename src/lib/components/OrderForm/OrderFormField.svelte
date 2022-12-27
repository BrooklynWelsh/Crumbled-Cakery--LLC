<script lang="ts">
	import * as GenericFieldTypes from './../../../types/GenericOrderFormFields';
	export let fieldData: GenericFieldTypes.RadioOptionField | GenericFieldTypes.FreeTextField;
</script>

<fieldset>
	<legend>{fieldData.title}</legend>
	{#if GenericFieldTypes.isFreeTextField(fieldData)}
		<p>{fieldData.description}</p>
		<textarea form="order-form" id={fieldData.id} name={fieldData.title} />
	{:else if GenericFieldTypes.isRadioField(fieldData)}
		{#each fieldData.options as option}
			<input id={fieldData.id} type="radio" name={fieldData.title} value={option.name} />
			<label for={fieldData.id}>{option.name}</label>
		{/each}
	{/if}
</fieldset>
