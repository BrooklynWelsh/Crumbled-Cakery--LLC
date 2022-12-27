<script lang="ts">
	import OrderForm from '$lib/components/OrderForm/OrderForm.svelte';
	export let data;
</script>

<OrderForm formType={data.formType} />
