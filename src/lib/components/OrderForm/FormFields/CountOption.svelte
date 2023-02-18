<script lang="ts">
  export let countOptionsAndPricing;
  let selected;

  const selectChange = (event) => {
    // Add/remove textarea element from fieldset depending on whether or not the "custom" option is selected
		const freeInput = event.target.parentElement.querySelector('textarea')
		if (selected === 'custom') {
			freeInput.required = true;
			freeInput.style.display = 'block';
		} else {
			freeInput.required = false;
			freeInput.style.display = 'none';
		}
	}
</script>

 <label for="count">Count:</label>
 <select bind:value={selected}  on:change="{(event) => selectChange(event)}" required id={countOptionsAndPricing.component} name={countOptionsAndPricing.component} form="order-form">
      <option selected value="">--Please choose an option--</option>
      {#each countOptionsAndPricing as option}
        {#if option.component === 'customOptionText'}
          <option value="custom">{option.customOptionText}</option>
        {:else}
          <option value={option.actualCount}>{option.countName || option.actualCount}</option>
        {/if}
      {/each}
 </select>
 <textarea placeholder="Please enter your count here." rows="3" cols="33" name="custom-count" id="custom-count" style="display:none"/>