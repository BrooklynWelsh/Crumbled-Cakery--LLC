<script lang="ts">
	import OrderForm from '$lib/components/OrderForm/OrderForm.svelte';
	import { DefaultOrderForm } from '$types/GenericOrderForm';
	import type { PageData } from './$types';
	export let data: PageData;
	const formData = new DefaultOrderForm(data.form);
</script>

<OrderForm form={data.formData} />
