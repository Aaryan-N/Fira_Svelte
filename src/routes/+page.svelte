<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>

<script>
    import Layout from './layout/+layout.svelte'
    let name = 'svelte';
</script>

<h1>Your name is {name.toUpperCase()}</h1>

<Layout />

<style>
    p{
        font-family: sans-serif;
        color: goldenrod;
        font-size: 2em;
    }
</style>