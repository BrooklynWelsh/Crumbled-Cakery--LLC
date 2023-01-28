<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { CakeUpdate, type TierCountUpdate } from '$types/ICakeUpdate';
  import type { TierUpdate } from '$types/ICakeUpdate';
  import type Tier from '$types/Tier';

  export let tierOption: Object;
  export let tier: Tier

  // let optionValue: string;
  // console.log('optionValue')
  // console.log(optionValue)

  const dispatch = createEventDispatcher();

  const selectChange = (event: Event) => {
    console.log('change')
    console.log(event)
    // Add/remove textarea element from fieldset depending on whether or not the "custom" option is selected
    const target = (event.target as HTMLSelectElement)
    console.log(event.target)
    if (target && target.parentElement) {
      if (target.parentElement.dataset.component !== undefined && target.parentElement.dataset.component !== null) {
        dispatch('update', new CakeUpdate({
          update: { field: target.name, value: target.value, tierIndex: parseInt(target?.parentElement.dataset?.component.split('-')[1]) - 1} as TierUpdate
        }))
      } else {
        dispatch('update', new CakeUpdate({
          update: { field: target.name, value: parseInt(target.value)} as TierCountUpdate
        }))
      }
    }
  }
</script>

<select  on:change="{(event) => selectChange(event)}" required id={tierOption.component} name={tierOption.component} form="order-form">
  {#each tierOption.options as option}
      {#if option.toLowerCase() === tier.get(tierOption.component).toString()}
        <option selected value={option}>{option}</option>
      {:else}
        <option value={option}>{option}</option>
      {/if}
  {/each}
</select>

<style>
  select {
    min-width: 80%;
    max-width: 100%;
  }

  select:focus {
    min-width: 50%;
    width: 100%;
  }
</style>