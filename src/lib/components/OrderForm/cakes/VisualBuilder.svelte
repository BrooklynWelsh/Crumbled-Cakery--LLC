<script lang="ts">
	import CakeFormFields from './../cakes/CakeFormFields.svelte';
	import type { CakeUpdate } from '$types/ICakeUpdate';
	import CakeBuilder from '$types/CakeBuilder';
	import Tier from '$types/Tier';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
  	import { expoOut } from 'svelte/easing';
	import TierOption from './TierOption.svelte';

	export let blok: Object;

	const thickness = 10;
	const baseHeight = 10;
	let cake: CakeBuilder = new CakeBuilder([new Tier(1)], 100);

	const handleTierCountUpdate = (updateObject: CakeUpdate) => {
		cake.update(updateObject);
		// Update grid area for figcaption so that row end is one more than the # of layers (i.e. 2 layers, grid-area = 1/1/3/1)
		cake = cake;
	};

  function toString(title: any): string {
    if(title === 'Diameter') return title.toString() + ' (inches)'
    else return title.toString()
  }
</script>

<article id="body">
	<h2>Custom Cake Builder</h2>

	<section id="form-container">
		<section id="cake-form">
			<form id="order-form" method="POST" action="?/add_to_cart">
				<!-- <section class="form-info-section" use:storyblokEditable={blok}>
            <h2>{blok.productName}</h2>
            <h4>Starting at ${blok.startingPrice}</h4>
            <h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
          </section> -->
				<CakeFormFields on:update={(update) => {{ handleTierCountUpdate(update.detail) }}} options={blok.options} styles={blok.styleOptions} {cake} />
				<section class="add-to-cart-section">
					<button type="submit" id="submit-button">Add to Cart</button>
				</section>
			</form>
		</section>

		<section id="tier-options">
			{#each cake.getTiers() as tier (tier.id)}
				<fieldset id={'tier-' + tier.id + '-options'}>
					<details>
						<summary>Tier {tier.id} Options:</summary>
						{#each blok.perTierOptions as tierOption}
							<fieldset data-component={'tier-' + tier.id + '-' + tierOption.component}>
								<label for={'tier[' + tier.id + '][' + tierOption.component + ']'}>{toString(tierOption.title)}</label>
								<TierOption on:update={(update) => {{ handleTierCountUpdate(update.detail) }}} {tierOption} {tier} />
							</fieldset>
						{/each}
					</details>
				</fieldset>
			{/each}
		</section>

		<section id="cake-visual">
			<div id="cake-builder">
				{#each cake.getTiers() as tier (tier.id)}
					<div transition:fly|local={{ y: -200 }} class="tier-container">
						<figcaption style="grid-area: 1/1/{tier.get('layers').length + 1}/1;">
							Tier {tier.id}
						</figcaption>
            <div class="tier-bracket-container">
              {#each tier.layers as layer, index (layer.layerIndex)}
              <div transition:fly|local={{ y: -200 }} class='tier-bracket'></div>
              {/each}
            </div>
						{#each tier.layers as layer, index (layer.layerIndex)}
							<div transition:fly|local={{ y: -200 }} animate:flip="{{ easing: expoOut }}" class="row"
								style="height: {cake.getHeight()}px; width: {100 * (tier.diameter / 10)}%;
                grid-row-start: {tier.layers.length - index}; 
                grid-row-end: {tier.layers.length - index};
                grid-column: 3 / 3;">
								<div transition:fly|local={{ y: -200 }} class="tier" style="height: {cake.getHeight()}px;" />
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</section>
	</section>
</article>

<style>

	h2 {
		text-align: center;
	}

	#body {
		height: 77vh;
	}

	#form-container {
		margin: 0 5%;
		display: flex;
		flex-direction: row;
		height: 93%;
		gap: 5%;
	}

	#form-container > * {
		flex-basis: 40%;
	}

	#cake-form {
		flex-basis: 25%;
	}

	@media (max-width: 1366px) {
		#cake-form {
			width: 30%;
		}
	}

	#tier-options {
		flex-basis: 15%;
	}

	#cake-builder {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		gap: 1%;
	}

	#order-form {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.spacer-div {
		width: 5%;
	}

	.row {
		padding: 0.2%;
		margin-bottom: 4px;
	}

	.tier-container {
		display: grid;
		grid-template-columns: 9% 10.2% 56%;
		justify-content: center;
    	justify-items: center;
		width: 100%;
	}

	legend {
		pointer-events: none;
	}

	.tier-bracket-container {
		margin-bottom: 0;
		align-self: stretch;
		justify-self: flex-start;
	}

  .tier-bracket {
    grid-column: 2 / 2;
    border-left: solid black 2px;
    height: 100%;
    width: 100%;
	margin-bottom: 0;
  }

  .tier-bracket:first-of-type {
    border-top: solid black 2px;
  }

  .tier-bracket:last-of-type {
    border-bottom: solid black 2px;
  }

  .tier-bracket:only-of-type{
    border-top: solid black 2px;
    border-bottom: solid black 2px;
  }

	figcaption {
		grid-area: 1/1/1/1;
		text-align: center;
		place-self: center;
	}

	.column {
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		gap: 1%;
	}

	.add-to-cart-section {
	margin: 2% auto;
  }
</style>
