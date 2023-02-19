<script lang="ts">
	import VisualBuilder from './cakes/VisualBuilder.svelte';
	import ProductOrderForm from './ProductOrderForm.svelte';
	export let blok;
	export let slug: string;

	
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;

</script>

{#if slug && slug === 'order/cakes'}
	<VisualBuilder options={blok} />
{:else}
	<ProductOrderForm {blok} />
{/if}
