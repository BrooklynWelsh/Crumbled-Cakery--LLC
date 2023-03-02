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
    overflow: visible;
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
    width: 100%;
    text-align: center;
    white-space: nowrap;
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
    -webkit-box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.4);
	}
	article > h2 {
		text-align: center;
	}

</style>