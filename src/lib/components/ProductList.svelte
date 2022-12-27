<script lang="ts">
	export let products: { name: string; imageLoc: string; link: string }[];
</script>

<div id="product-list">
	<article class="container">
		{#each products as product}
			<article class="thumbnail">
				<a href={`${product.link}`}>
					<img src={`${product.imageLoc}`} alt="egjs" />
				</a>
				<h2 class="info">{`${product.name}`}</h2>
			</article>
		{/each}
	</article>
</div>

<style>
	html,
	body {
		position: relative;
		margin: 0;
		padding: 0;
		height: 100%;
		background: #fff;
	}

	a {
		color: unset;
		text-decoration: none;
		height: 83%;
		display: inline-block;
		margin: auto;
		object-fit: cover;
	}

	.header {
		text-align: center;
		background: #333;
		color: #fff;
		padding: 20px 0px;
		margin: 0;
		margin-bottom: 10px;
	}

	#product-list {
		height: inherit;
		max-height: 99%;
		max-width: 99%;
	}

	.description {
		padding: 6px 30px;
		margin: 0;
		font-weight: 400;
	}

	.description li {
		padding: 3px 0px;
	}

	.wrapper {
		margin-top: 50px;
	}

	.container {
		width: 85%;
		height: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		grid-auto-rows: 50vh;
		margin: auto;
	}

	.item {
		display: inline-block;
		opacity: 1;
	}

	.masonrygrid.horizontal .item {
		width: auto;
		height: 250px;
	}

	/* .thumbnail {
		height: inherit;
		max-height: 99%;
		max-width: 99%;
	} */

	.thumbnail {
		overflow: hidden;
		width: 80%;
		margin: 10% auto;
		height: inherit;
		max-height: 75%;
		max-width: 100%;
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

	.item .info {
		margin-top: 10px;
		font-weight: bold;
		color: #777;
	}

	.item.animate {
		transition: opacity ease 1s;
		transition-delay: 0.2s;
		opacity: 1;
	}

	.placeholder {
		width: 250px;
		border-radius: 5px;
		background: #eee;
		height: 250px;
	}

	.loading {
		position: absolute;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-weight: bold;
	}

	.button-area {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		text-align: center;
		height: 50px;
		z-index: 1;
	}
</style>
