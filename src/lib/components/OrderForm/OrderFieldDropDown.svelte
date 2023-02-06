<script lang="ts">
	import CountOption from "./CountOption.svelte";

  export let topLevelOption;
  export let countOptionsAndPricing;
  export let setOptions;
  export let sizeOptions;
  console.log('CALL TO DROPDOWNFIELD.SVELTE\n')
  console.log('top level ')
  console.log(topLevelOption)
  console.log('countOptionsAndPricing')
  console.log(countOptionsAndPricing)
  console.log('setOptions')
  console.log(setOptions)
  console.log('sizeOptions')
  console.log(sizeOptions)
  let selected;
  let selectedSize: string;
  let activeCounts = [];
  const sizeCountOptions = {};

    if(sizeOptions !== undefined) {
    selectedSize = sizeOptions[0].sizeName
    for (const sizeOptionObject of sizeOptions) {
      sizeCountOptions[sizeOptionObject.sizeName] = sizeOptionObject.countOptions;
    }
    activeCounts = sizeCountOptions[selectedSize]
  }

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

  const changeActiveCounts = (event) => {
    activeCounts = sizeCountOptions[event.target.value]
  }

</script>

  {#if (topLevelOption && topLevelOption.options) || (Array.isArray(topLevelOption) && topLevelOption.length === 1)}
    <select bind:value={selected}  on:change="{(event) => selectChange(event)}" required id={topLevelOption.component} name={topLevelOption.component} form="order-form">
      <option selected value="">--Please choose an option--</option>
      {#each topLevelOption.options || topLevelOption[0].options as option}
          {#if option !== 'custom'}
            <option value={option}>{option}</option>
          {:else if option === 'custom'}
            <option value="custom">Other? (Please write in text box)</option>
          {/if}
      {/each}
    </select>
    <textarea rows="3" cols="33" name="{topLevelOption.component}-custom-text" id="{topLevelOption.component}-custom-text" placeholder="Let us know what {topLevelOption.component} you want here!." style="display:none"/>
  {:else if topLevelOption && Array.isArray(topLevelOption)}
    <select bind:value={selected}  on:change="{(event) => selectChange(event)}" required id={topLevelOption.component} name={topLevelOption.component} form="order-form">
      <option selected value="">--Please choose an option--</option>
    {#each topLevelOption as optionGroup}
      <optgroup label={optionGroup.title}>
        {#each optionGroup.options as option}
        <option value={option}>{option}</option> 
        {/each}
      </optgroup>
    {/each}
    </select>
    <textarea rows="3" cols="33" name="{topLevelOption[0].component}-custom-text" id="{topLevelOption[0].component}-custom-text" placeholder="Let us know what {topLevelOption[0].component} you want here!" style="display:none"/>
  {:else if countOptionsAndPricing && countOptionsAndPricing.length > 0}
    <CountOption {countOptionsAndPricing} />
  {:else if sizeOptions}
      <legend>Size: </legend>
      {#each sizeOptions as size}
        <div>
          <label for="size">{size.sizeName}</label>
          <input bind:group={selectedSize} on:change={changeActiveCounts} value="{size.sizeName}" type="radio" name="size" id="size" required/>
        </div>
      {/each}

      <CountOption countOptionsAndPricing={activeCounts} />
  {:else if setOptions}
    <label for="count">Count (only available in sets of {setOptions[0].setCount}):</label>
    <input type="number" id="count" name="count" min="{setOptions[0].setCount}" step="{setOptions[0].setCount}" required value="10"/>
  {/if}

<style>
  :global(select) {
    min-width: 40%;
    width: 40%;
  }

  :global(select:focus) {
    min-width: 50%;
    width: 100%;
  }

  :global(textarea) {
    margin-top: 1%;
    width: auto;
  }
</style>