<script lang="ts">
	import VisualBuilder from './cakes/VisualBuilder.svelte';
	import ProductOrderForm from './ProductOrderForm.svelte';
	export let blok;
	export let slug: string;
</script>

{#if slug && slug === 'order/cakes'}
	<VisualBuilder options={blok} />
{:else}
	<ProductOrderForm {blok} />
{/if}
