<script lang="ts">
	let hovering = false;
	export let forceClick = false;
	export let id = null;

	function enter(e: Event) {
		if (e.type === "click" && e.target?.tagName === "A") {
			return
		}
		hovering = true
	}

	function leave(e: Event) {
		if (e.type === "click" && e.target?.tagName === "A") {
			return
		}
		hovering = false
	}
</script>

<div id={id ? id : null} on:mouseenter={forceClick ? null : enter} on:mouseleave={forceClick ? null : leave} on:click={hovering ? leave : enter}>
	<slot hovering={hovering}></slot>
</div>