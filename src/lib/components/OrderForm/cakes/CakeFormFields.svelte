<script	 lang="ts">
	import type CakeBuilder from '$types/CakeBuilder';
	import CakeFormDropdown from './CakeFormDropdown.svelte';
	export let options: Object;
	export let perTierOptions: Object;
	export let cake: CakeBuilder;

	const tierOptions = ['layers', 'Flavors Offerings', 'Diameter']
	console.log('OPTIONS')
	console.log(options)
</script>

<section class="form-option">
	<fieldset>
		<label for="tiers">Tiers:</label>
		<CakeFormDropdown tiers={cake.getTiers()}/>
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

</style>
