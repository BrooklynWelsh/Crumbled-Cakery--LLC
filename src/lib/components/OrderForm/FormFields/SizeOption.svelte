<script lang="ts">
	import { onMount, afterUpdate } from "svelte";
  import CountOption from './CountOption.svelte';

  export let sizeOptions;
  export let activeCounts;

  let selectedSize: string;
  const sizeCountOptions = {};
  selectedSize = sizeOptions[0].sizeName

  for (const sizeOptionObject of sizeOptions) {
    sizeCountOptions[sizeOptionObject.sizeName] = sizeOptionObject.countOptions;
  }
  activeCounts = sizeCountOptions[selectedSize]

  const changeActiveCounts = (event) => {
    activeCounts = sizeCountOptions[event.target.value]
  }
</script>

<section class="form-option">
  <fieldset>
    <legend>Size: </legend>
    {#each sizeOptions as size}
      <div>
        <label for="size">{size.sizeName}</label>
        <input bind:group={selectedSize} on:change={changeActiveCounts} value="{size.sizeName}" type="radio" name="size" id="size" required/>
      </div>
    {/each}
  </fieldset>
</section>

<section class="form-option">
  <fieldset>
    {#key activeCounts}
      <CountOption countOptionsAndPricing={activeCounts} />
    {/key}
  </fieldset>
</section>

<style>

  label {
    display: inline;
  }

</style>