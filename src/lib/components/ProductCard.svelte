<script lang="ts">
  import { storyblokEditable } from '@storyblok/svelte';
  export let product;
  export let slug;
</script>

<div class="thumbnail" data-productname={product.productName} use:storyblokEditable={product}>
  <a href="/{slug}">
    <img src={product.image.filename} alt={product.image.filename} />
  </a>
</div>

<style lang="postcss">
  .thumbnail {
    overflow: hidden;
    margin: 10% auto;
    height: inherit;
    max-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .thumbnail:after {
    content: attr(data-productname);
    font-size: rfs(1.8rem);
    font-weight: bold;
		color: #777;
  }

  a {
		color: unset;
		text-decoration: none;
		height: rfs(83%);
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