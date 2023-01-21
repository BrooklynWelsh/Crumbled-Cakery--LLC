<script lang="ts">
  export let topLevelOption: Object | null | undefined;
  export let countOptionsAndPricing: Object | null | undefined;

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
      if (!(tierOptions.includes(target.id))) {
        const freeInput: HTMLTextAreaElement = (target.parentElement.querySelector('textarea') as HTMLTextAreaElement)
        freeInput.required = true;
        freeInput.style.display = 'block';
      }

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


  {#if topLevelOption}
    <select bind:value={selected} on:change="{(event) => selectChange(event)}" required id={topLevelOption.component} name={topLevelOption.component} form="order-form">
      {#if !(topLevelOption.component in tierOptions)}
        <option selected value="">--Please choose an option--</option>
      {/if}
    {#each topLevelOption.options as option}
        {#if option !== 'custom'}
          <option value={option}>{option}</option>
        {:else if option === 'custom'}
          <option value="custom">Other? (Please write in text box)</option>
        {/if}
    {/each}
    </select>

    {#if topLevelOption.component !== 'tiers'}
      <textarea rows="3" cols="33" name="{topLevelOption.component}-custom-text" id="{topLevelOption.component}-custom-text" placeholder="Please enter your {topLevelOption.component} here." style="display:none"/>
    {/if}

    {:else if countOptionsAndPricing}
    <select bind:value={selected}  on:change="{(event) => selectChange(event)}" required id={countOptionsAndPricing.component} name={countOptionsAndPricing.component} form="order-form">
      <option selected value="">--Please choose an option--</option>
      {#each countOptionsAndPricing as option}
        {#if option.component === 'customOptionText'}
          <option value="custom">{option.customOptionText}</option>
        {:else}
          <option value={option.countName}>{option.countName}</option>
        {/if}
      {/each}
    </select>
    <textarea placeholder="Please enter your count here." rows="3" cols="33" name="custom-count" id="custom-count" style="display:none"/>
  {/if}


<style>
  select {
    min-width: 80%;
    max-width: 100%;
  }

  select:focus {
    min-width: 50%;
    width: 100%;
  }

  textarea {
    margin-top: 1%;
    width: auto;
  }
</style>