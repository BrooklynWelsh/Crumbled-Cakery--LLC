<script lange="ts">
    export let setOptions;
</script>

<label for="count">Count (only available in sets of {setOptions[0].setCount}):</label>
<input type="number" id="count" name="count" min="{setOptions[0].setCount}" step="{setOptions[0].setCount}" required value="10"/>