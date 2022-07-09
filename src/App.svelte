<script lang="ts">

    import { Route } from 'tinro';

    import About from '$pages/About.svelte';
    import Home from '$pages/Home.svelte';

</script>

<nav>

    <a href="/home">Home</a>

    <a href="/about">About</a>

</nav>

<Route path="/" redirect="/home"/>

<Route path="/about">

    <About/>

</Route>

<Route path="/home">

    <Home/>

</Route>
