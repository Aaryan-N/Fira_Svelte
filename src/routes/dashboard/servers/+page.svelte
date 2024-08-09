<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import ServerSelect from '../../../components/template/ServerSelect.svelte';
	const dataArraysMap = data.finalGuildOutputMap;
</script>

<div class="bg-[#313338] p-2">
	<h1 class="flex justify-center text-4xl text-[#FFE7BC] my-2 pb-2">Select a server!</h1>
{#each dataArraysMap as ids}
	<ServerSelect
		guildId = {ids.id}
		guildIcon = {ids.icon}
		guildName = {ids.name}
	/>
{/each}
</div>