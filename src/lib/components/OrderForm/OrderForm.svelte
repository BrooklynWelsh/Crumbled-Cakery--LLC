<script lang="ts">
	import type { IDefaultOrderForm } from '../../../types/type.GenericOrderForm';
	import OrderFormField from './OrderFormField.svelte';
	import {
		isFormField,
		isRadioField,
		isFreeTextField
	} from '../../../types/GenericOrderFormFields';

	async function importOrderForm() {
		const orderFormFile = `./../../../../src/types/SpecificOrderForms/${formType}.ts`;
		const orderFormModule = await import(orderFormFile);
		const orderFormObject = new orderFormModule.default();

		const options = [];
		for (const key of Object.keys(orderFormObject)) {
			const value = orderFormObject[key as keyof IDefaultOrderForm];
			if (isFormField(value)) {
				options.push(value);
			}
		}
		console.log(options);
		return options;
	}
	export let formType: string;

	let formPromise = importOrderForm();
</script>

<div id="form-container">
	<form>
		{#await formPromise then options}
			{#each options as option}
				<OrderFormField fieldData={option} />
			{/each}
		{/await}
	</form>
</div>

<style>
</style>
