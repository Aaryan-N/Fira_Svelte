<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import ServerSelect from '../../../components/template/ServerSelect.svelte';
	console.log(data)
	const dataMap = data.map(data => data[0]);
</script>

{#each [...dataMap] as [key, props]}
	<ServerSelect {...props} />
{/each}