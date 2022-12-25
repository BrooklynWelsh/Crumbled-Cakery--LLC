<script lang="ts">
	import ProductList from '$lib/components/ProductList.svelte';
	/** @type {import('./$types').PageData} */
	export let data: App.PageData;
</script>

<div id="product-grid" />
<ProductList products={data.products} />

<style>
</style>
