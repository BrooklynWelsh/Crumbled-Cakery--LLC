<script lang="ts">
  export let topLevelOption;
  let selected;

  const selectChange = (event) => {
    console.log('event change')
    console.log(event.target.value)
    console.log(typeof selected)
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

<select bind:value={selected}  on:change="{(event) => selectChange(event)}" required id={topLevelOption.component} name={topLevelOption.component}>
  <option selected value="">--Please choose an option--</option>
  {#each topLevelOption.options as option}
      {#if option !== 'custom'}
        <option value={option}>{option}</option>
      {:else if option === 'custom'}
        <option value="custom">Other? (Please write in text box)</option>
      {/if}
  {/each}
</select>
<textarea rows="3" cols="33" name="{topLevelOption.component}-custom-text" id="{topLevelOption.component}-custom-text" value="Please enter your {topLevelOption.component} here." style="display:none"/>

<style>
  select {
    max-width: 60%;
    min-width: 40%;
    width: auto;
  }

  textarea {
    margin-top: 1%;
    margin-left: 1%;
    width: auto;
  }
</style>