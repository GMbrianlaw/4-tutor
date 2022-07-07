<script lang="ts">

    let count: number = 0;

    function increase(): void {

        ++count;

    }

</script>

<svelte:head>

    <title>4 Tutor | Home</title>

</svelte:head>

<h1>{count} click{count !== 1 ? 's' : ''}.</h1>

<button on:click="{increase}">Increase</button>
