<script lang="ts">
	let hovering = false;

	function enter(e: Event) {
		if (e.type === "mousedown" && e.target?.tagName === "A") {
			return
		}
		hovering = true
	}

	function leave(e: Event) {
		if (e.type === "mousedown" && e.target?.tagName === "A") {
			return
		}
		hovering = false
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave} on:mousedown={hovering ? leave : enter}>
	<slot hovering={hovering}></slot>
</div>