<script lang="ts">
    export let tierOption: Object;
  
    let selected: string;
  
    import { createEventDispatcher } from 'svelte';
    import { CakeUpdate, type TierCountUpdate } from '$types/ICakeUpdate';
    import type { TierUpdate } from '$types/ICakeUpdate';
  
    const tierOptions = ['tiers', 'layers', 'flavors', 'diameter']
  
    const dispatch = createEventDispatcher();
  
    const selectChange = (event: Event) => {
      // Add/remove textarea element from fieldset depending on whether or not the "custom" option is selected
      const target = (event.target as HTMLSelectElement)
      console.log(event.target)
      if (target && target.parentElement) {
        if (target.parentElement.dataset.component !== undefined && target.parentElement.dataset.component !== null) {
          dispatch('update', new CakeUpdate({
            update: { field: target.name, value: selected, tierIndex: parseInt(target?.parentElement.dataset?.component.split('-')[1]) - 1} as TierUpdate
          }))
        } else {
          dispatch('update', new CakeUpdate({
            update: { field: target.name, value: parseInt(selected)} as TierCountUpdate
          }))
        }
      }
    }
  </script>
  
  <select bind:value={selected} on:change="{(event) => selectChange(event)}" required id={tierOption.component} name={tierOption.component} form="order-form">
    {#if !(tierOptions.includes(tierOption.component))}
      <option selected value="">--Please choose an option--</option>
    {/if}
  {#each tierOption.options as option}
      {#if option !== 'custom'}
        <option value={option}>{option}</option>
      {:else if option === 'custom'}
        <option value="custom">Other? (Please write in text box)</option>
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