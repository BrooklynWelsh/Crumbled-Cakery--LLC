<script lang="ts">
	import { onMount } from "svelte";


    export let sizeOptions;
    export let activeCounts;

    let selectedSize: string;
    const sizeCountOptions = {};
    selectedSize = sizeOptions[0].sizeName

    onMount(() => {
      for (const sizeOptionObject of sizeOptions) {
        sizeCountOptions[sizeOptionObject.sizeName] = sizeOptionObject.countOptions;
      }
      activeCounts = sizeCountOptions[selectedSize]
    })

    const changeActiveCounts = (event) => {
        activeCounts = sizeCountOptions[event.target.value]
    }
</script>

<legend>Size: </legend>
{#each sizeOptions as size}
  <div>
    <label for="size">{size.sizeName}</label>
    <input bind:group={selectedSize} on:change={changeActiveCounts} value="{size.sizeName}" type="radio" name="size" id="size" required/>
  </div>
{/each}