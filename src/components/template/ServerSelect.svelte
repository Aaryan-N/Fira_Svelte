<script>
	export let guildId;
	export let guildIcon;
	export let guildName;
</script>

<div class="bg-[#302134] rounded-xl p-4 px-6 my-2 mx-2">
	<div class="flex grid grid-rows-1 items-center">
	<div class="flex items-center text-[#FFE7BC]">
		<img class="rounded-full float-right" src={`https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.webp?size=128`} alt={guildName} />
		<h2 class="text-[#FFE7BC] pt-2 pl-5 text-xl">{guildName}</h2>
		</div>
	</div>
</div>