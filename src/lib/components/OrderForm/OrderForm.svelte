<script lang="ts">
	import type { DefaultOrderForm } from '$types/GenericOrderForm';
	import OrderFormField from './OrderFormField.svelte';

	export let form: DefaultOrderForm;
	console.log(form);
</script>

<div id="form-container">
	<h2>{form.productName}</h2>
	<h4>Starting at ${form.startingPrice}</h4>
	<h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
	<form>
		{#each [...form.getOptions().values()] as option}
			<OrderFormField fieldData={option} />
		{/each}
	</form>
</div>

<style>
</style>
