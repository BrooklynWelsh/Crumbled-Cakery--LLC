<script	 lang="ts">
	import type CakeBuilder from '$types/CakeBuilder';
	import CakeFormDropdown from './CakeFormDropdown.svelte';
	export let options: Object;
	export let perTierOptions: Object;
	export let cake: CakeBuilder;

	const tierOptions = ['layers', 'Flavors Offerings', 'Diameter']

</script>

<section class="form-option">
	<fieldset>
		<label for="tiers">Tiers:</label>
		<CakeFormDropdown tiers={cake.getTiers()}/>
	</fieldset>
</section>

{#each perTierOptions as tierOption}
		{#each cake.getTiers() as tier (tier.id)}
			<fieldset data-component={tierOption.component}>
				<label for="{'tier-' + tier.id + '-' + tierOption.component}">{'Tier ' + tier.id + ': ' + tierOption.title}</label>
				<CakeFormDropdown on:update topLevelOption={tierOption}/>
			</fieldset>
		{/each}
{/each}

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
		border: none;
		margin-top: 1%;
    min-height: 0;
	}

	textarea {
    margin-top: 1%;
    width: auto;
  }

	.form-option {
		display: flex;
		flex-direction: column;
	}

</style>
