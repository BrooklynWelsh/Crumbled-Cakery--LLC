<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
	console.log('blok')
	console.log(blok)
</script>

<section class="container" use:storyblokEditable={blok}>
	<h2>{blok.productName}</h2>
	<h4>Starting at ${blok.startingPrice}</h4>
	<h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
	<img src={blok.image.filename} />
	<!-- <form>
		{#each [...blok.options] as option}
			<OrderFormField fieldData={option} />
		{/each}
	</form> -->
</section>

<style>
	.container {
		display: flex;
		flex-flow: column wrap;

	}

	h2, h4 {
		flex: 2
	}

	form {
		flex: 1
	}

	img {
		flex: 1
	}
</style>
