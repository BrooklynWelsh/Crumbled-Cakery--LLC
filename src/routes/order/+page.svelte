<script lang="ts">
	import ProductList from '$lib/components/ProductList.svelte';
	import type { PageData } from './$types';
	import getProductMetadata from '$lib/utils/client/getProductMetadata';
	export let data: PageData;
</script>

<div id="product-grid" />
<ProductList products={getProductMetadata(data)} />

<style>
</style>
