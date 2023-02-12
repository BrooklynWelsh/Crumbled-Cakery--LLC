<script lang="ts">
	import type CakeBuilder from "$types/CakeBuilder";
	import { fly } from "svelte/transition";
  export let cake: CakeBuilder;
</script>

{#each cake.getTiers() as tier}
  {#each Array(tier.layers) as _}
    <div transition:fly class="tier" style="width: {50 * (tier.diameter / 10)}%; height: {baseHeight}%;"></div>
  {/each}
{/each}

<div transition:fly class="tier" style="width: {50 * (tier.diameter / 10)}%; height: {baseHeight}%;"></div>