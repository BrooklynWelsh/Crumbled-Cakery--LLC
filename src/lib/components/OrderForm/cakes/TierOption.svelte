<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { CakeUpdate, type DiameterType, type TierCountUpdate } from '$types/ICakeUpdate';
  import type { TierUpdate } from '$types/ICakeUpdate';
  import type Tier from '$types/Tier';

  import { createCheckers } from 'ts-interface-checker'
  import type { CheckerT } from 'ts-interface-checker'
  import ICakeUpdateTI from '$types/ICakeUpdate-ti'
  const checkers = createCheckers(ICakeUpdateTI) as { DiameterType: CheckerT<DiameterType> }

  export let tierOption: Object;
  export let tier: Tier

  const dispatch = createEventDispatcher();

  const selectChange = (event: Event) => {
    // Add/remove textarea element from fieldset depending on whether or not the "custom" option is selected
    const target = (event.target as HTMLSelectElement)
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

  const isDiameter = (option: DiameterType | any): option is DiameterType => {
    return checkers.DiameterType.test(parseInt(option))
  }

  function toString (option: DiameterType | any, component: Object): string {
    if (isDiameter(option) && component === 'diameter') {
      return option.toString() + '"'
    } else return option.toString()
  }
</script>

<select  on:change="{(event) => selectChange(event)}" required id={tierOption.component} name={tierOption.component} form="order-form">
  {#each tierOption.options as option}
      {#if option.toLowerCase() === tier.get(tierOption.component).toString()}
        <option selected value={option}>{toString(option, tierOption.component)}</option>
      {:else}
        <option value={option}>{toString(option, tierOption.component)}</option>
      {/if}
  {/each}
</select>

<style>
  select {
    min-width: 100%;
    max-width: 100%;
  }

  select:focus {
    min-width: 50%;
    width: 100%;
  }
</style>