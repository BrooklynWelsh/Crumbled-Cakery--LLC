<script lang="ts">
	import CountOption from "./FormFields/CountOption.svelte";
  import SizeOption from "./FormFields/SizeOption.svelte";
  import SetOption from "./FormFields/SetOption.svelte";

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
  let activeCounts = [];

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
    <SizeOption {sizeOptions} bind:activeCounts={activeCounts}/>
    <CountOption countOptionsAndPricing={activeCounts} />
{:else if setOptions}
  <SetOption {setOptions} />
{/if}
