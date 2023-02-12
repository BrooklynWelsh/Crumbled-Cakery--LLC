<script lang="ts">
  import { storyblokEditable } from '@storyblok/svelte';
  export let product;
  export let slug;
  console.log('product')
  console.log(product)
</script>
<div class="thumbnail" use:storyblokEditable={product}>
  <a href="/{slug}">
    <img src={product.image.filename} alt={product.image.filename} />
  </a>
  <h2 class="info">{product.productName}</h2>
</div>

<style>
  .thumbnail {
    overflow: hidden;
    width: 80%;
    margin: 10% auto;
    height: inherit;
    max-height: 100%;
    max-width: 100%;
  }

  .info {
		font-weight: bold;
		color: #777;
	}

  a {
		color: unset;
		text-decoration: none;
		height: 83%;
		display: inline-block;
		margin: auto;
		object-fit: cover;
	}

  a > img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 8px;
	}
	article > h2 {
		text-align: center;
	}

</style>