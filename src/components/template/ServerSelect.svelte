<script>
	export let guildId;
	export let guildIcon;
	export let guildName;
</script>
<div class="bg-gray-800 rounded">
	<div class="flex text-[#FFE7BC]">
				<img src={`https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.webp?size=128`} alt={guildName} />
				<h2>{guildName}</h2>
		</div>
</div>