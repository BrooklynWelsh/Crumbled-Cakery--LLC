<script lang="ts">
  export let topLevelOption;
  export let countOptionsAndPricing;
  let selected;

  const selectChange = (event) => {
    // Add/remove textarea element from fieldset depending on whether or not the "custom" option is selected
		const freeInput = event.target.parentElement.querySelector('textarea')
		if (selected === 'custom') {
      console.log('true')
      console.log(freeInput)
			freeInput.required = true;
			freeInput.style.display = 'block';
		} else {
      console.log('false')
			freeInput.required = false;
			freeInput.style.display = 'none';
		}
	}
</script>

  {#if topLevelOption}
  <select bind:value={selected}  on:change="{(event) => selectChange(event)}" required id={topLevelOption.component} name={topLevelOption.component} form="order-form">
    <option selected value="">--Please choose an option--</option>
  {#each topLevelOption.options as option}
      {#if option !== 'custom'}
        <option value={option}>{option}</option>
      {:else if option === 'custom'}
        <option value="custom">Other? (Please write in text box)</option>
      {/if}
  {/each}
  </select>
  <textarea rows="3" cols="33" name="{topLevelOption.component}-custom-text" id="{topLevelOption.component}-custom-text" placeholder="Please enter your {topLevelOption.component} here." style="display:none"/>

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
    min-width: 40%;
    width: 40%;
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