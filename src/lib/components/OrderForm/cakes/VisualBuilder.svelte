<script lang="ts">
  import CakeFormFields from './../cakes/CakeFormFields.svelte';
  import CakeFormDropdown from './CakeFormDropdown.svelte';
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
        <form id="order-form" method="POST">
          <!-- <section class="form-info-section" use:storyblokEditable={blok}>
            <h2>{blok.productName}</h2>
            <h4>Starting at ${blok.startingPrice}</h4>
            <h4>Fill out this form to receive an estimate for your order within 24 hours.</h4>
          </section> -->
            <CakeFormFields on:update={(update) => {{handleTierCountUpdate(update.detail)}}} options={blok.options} {cake}/>
          <section class='add-to-cart-section'>
            <button type="submit" id='submit-button'>Add to Cart</button>
          </section>
        </form>
    </section>

    <section id="tier-options">
      {#each cake.getTiers() as tier (tier.id)}
        <fieldset id={'tier-' + tier.id + '-options'}>
          <legend>Tier {tier.id} Options: </legend>
          {#each blok.perTierOptions as tierOption}
          <fieldset data-component={'tier-' + tier.id + '-' + tierOption.component}>
            <label for="{'tier-' + tier.id + '-' + tierOption.component}">{tierOption.title}</label>
            <CakeFormDropdown on:update={(update) => {{handleTierCountUpdate(update.detail)}}} topLevelOption={tierOption}/>
          </fieldset>
          {/each}
        </fieldset>
      {/each}
    </section>

    <section id="cake-visual">
        <div id="cake-builder">
          {#each cake.getTiers() as tier (tier.id)}
            {#each Array(tier.layers) as layer, index (index)}
              <div transition:fly="{{y: -200}}" class="row" style="height: {cake.getHeight()}px;"> 
                {#if index === 0}
                <figcaption>Tier {tier.id}</figcaption> 
                {:else}
                  <div class="spacer-div"></div>
                {/if}
                <div transition:fly="{{y: -200}}" class="tier" style="height: {cake.getHeight()}px; width: {50 * (tier.diameter / 10)}%;"></div>
              </div>
            {/each}
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

  :global(fieldset) {
    border: none;
  }

  #body {
    height: 77vh;
  }

  figcaption {
    width: 5%
  }

  #form-container {
    margin: 0 5%;
    display: flex;
    flex-direction: row;
    height: 93%;
    gap: 5%;
  }

  #form-container > * {
    flex-basis: 50%;
  }

  #cake-form {
    flex-basis: 25%;
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