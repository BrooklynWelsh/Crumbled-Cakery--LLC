<script	 lang="ts">
	import type CakeBuilder from '$types/CakeBuilder';
	import CakeFormDropdown from './CakeFormDropdown.svelte';
	export let options: Object;
	export let styles: Object;
	export let perTierOptions: Object;
	export let cake: CakeBuilder;

  const selectChange = (event: Event) => {
    // Add/remove textarea element from fieldset depending on whether or not the "custom" option is selected
	const freeInput = event.target.parentElement.querySelector('textarea')
	if (event.target.options[event.target.selectedIndex].value.toLowerCase() === 'bespoke') {
		freeInput.required = true;
		freeInput.style.display = 'block';
	} else {
		freeInput.required = false;
		freeInput.style.display = 'none';
	}
  }

</script>

<section class="form-option">
	<fieldset>
		<label for="tiers">Tiers:</label>
		<CakeFormDropdown tiers={cake.getTiers()}/>
	</fieldset>
</section>

<section class="form-option">
	<fieldset>
		<label for="style">Style</label>
		<select  on:change="{(event) => selectChange(event)}" required id="style" name="style" form="order-form">
			<option selected value="">--Please choose an option--</option>
			{#each styles as style}
				{#if style.title.toLowerCase() === 'bespoke'}
					<option value={style.title.toLowerCase()}>{style.title} (Custom)</option>
				{:else}
					<optgroup label={style.title}>
						{#each style.options as subOption}
							<option value={subOption}>{subOption}</option>
						{/each}
					</optgroup>
				{/if}
			{/each}
		</select>
		<textarea placeholder="Let us know what style you'd like!" rows="3" cols="33" name="custom-style" id="custom-style" style="display:none;" />
	</fieldset>
</section>

{#each options as topLevelOption}
	<section class="form-option">
	{#if !topLevelOption.options} <!-- Must be a free text option -->
		<fieldset>
			<label for="{topLevelOption.component}">{topLevelOption.title}</label>
			<textarea id={topLevelOption.component} name={topLevelOption.component} rows="3" cols="33"/>
		</fieldset>
	{:else if topLevelOption.options} <!-- Must be a multiple choice option -->
		<fieldset>
			<label for={topLevelOption.component}>{topLevelOption.title}:</label>
			<CakeFormDropdown on:update topLevelOption={topLevelOption}/>
		</fieldset>
	{/if}
	</section>
{/each}

<style>

	div {
		margin-bottom: 10px;
	}

	label {
    display: block;
		max-width: 100%;
		width: auto;
  }

	fieldset {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 1%;
    min-height: 0;
	}

	textarea {
    margin-top: 1%;
    width: 100%;
  }

	.form-option {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

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
    width: 100%;
  }
</style>
