<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import VisualBuilder from './cakes/VisualBuilder.svelte';
	import ProductOrderForm from './ProductOrderForm.svelte';
	export let blok;
	export let slug: string;
	console.log('blok')
	console.log(blok)
	console.log('slug')
	console.log(slug)
</script>

{#if slug && slug === 'order/cakes'}
	<VisualBuilder options={blok} />
{:else}
	<ProductOrderForm {blok} />
{/if}
