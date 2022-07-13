<script lang="ts">

    import { Route } from 'tinro';
    import { router } from 'tinro';

    import About from '$pages/About.svelte';
    import Home from '$pages/Home.svelte';
    import Navbar from '$components/Navbar.svelte';
    import NotFound_ from '$pages/404.svelte';

    const redirectRoute: string | undefined = router.location.query.get(
        'route'
    ) as string | undefined;

    if (redirectRoute !== undefined) {
        router.goto(decodeURIComponent(redirectRoute));
    }

</script>

<Navbar/>

<main>

    <Route fallback>
        <NotFound_/>
    </Route>

    <Route path="/" redirect="/home"/>

    <Route path="/about">
        <About/>
    </Route>

    <Route path="/home">
        <Home/>
    </Route>

</main>

<style>

    main {
        margin: 14px 2vw 0 2vw;
    }

</style>
