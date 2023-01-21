<script lang="ts">
  import CakeFormFields from './../cakes/CakeFormFields.svelte';
  import { storyblokEditable } from '@storyblok/svelte';
	import type { CakeUpdate } from '$types/ICakeUpdate';
  import CakeBuilder from '$types/CakeBuilder';
  import Tier from '$types/Tier';
	import { fly } from 'svelte/transition';

  export let blok: Object
  const thickness = 10;
  const baseHeight = 10;
  let cake: CakeBuilder = new CakeBuilder([new Tier(1)], 100)
  console.log(cake)

  const handleTierCountUpdate = (updateObject: CakeUpdate) => {
    cake.update(updateObject)
    cake = cake
  }

</script>

<article id="body">
  <h2>Custom Cake Builder</h2>

  <section id="form-container">

    <section id="cake-form">
        <!-- <section class="flex-item">
          <img src={blok.image.filename} />
        </section> -->
        <form id="order-form" method="POST">
          <!-- <section class="form-info-section" use:storyblokEditable={blok}>
            <h2>{blok.productName}</h2>
            <h4>Starting at ${blok.startingPrice}</h4>
            <h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
          </section> -->
            <CakeFormFields on:update={(update) => {{handleTierCountUpdate(update.detail)}}} options={blok.options} perTierOptions={blok.perTierOptions} {cake}/>
          <section class='add-to-cart-section'>
            <button type="submit" id='submit-button'>Add to Cart</button>
          </section>
        </form>
    </section>

    <section id="cake-visual">
        <div id="cake-builder">
          {#each cake.getTiers() as tier (tier.id)}
            <div transition:fly="{{y: -200}}" class="row" style="height: {cake.getHeight() * tier.layers}px;">Tier {tier.id}
              {#each Array(tier.layers) as layer (layer)}
                <div transition:fly="{{y: -200}}" class="tier" style="width: {50 * (tier.diameter / 10)}%;"></div>
              {/each}
            </div>
          {/each}
        </div>
    </section>

  </section>
</article>

<style>
  :global(.tier) {
    fill: rgba(139, 106, 95, 1);
    background-color: rgba(139, 106, 95, 1);
    border-radius: 10px;
    height: 100%;
  }

  #body {
    height: 77vh;
  }

  #form-container {
    margin: 0 5%;
    display: flex;
    flex-direction: row;
    height: 93%;
  }

  #form-container > * {
    flex-basis: 50%;
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

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 4%;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 1%;
  }

  /* #cake-visual {
    height: 70%;
  } */

</style>