<script>
	export let guildId;
	export let guildIcon;
	export let guildName;
</script>
<div class="bg-[#302134] w-auto rounded-2xl p-4 px-6 my-2 mx-2 container grid grid-cols-1">
	<div class="flex items-center justify-between w-auto rounded py-2 px-2">
		<div class="flex items-center text-[#FFE7BC]">
			<img class="rounded-full" src={`https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.webp?size=128`} alt={guildName} />
			<h2 class="text-[#FFE7BC] pt-2 pl-5 text-xl">{guildName}</h2>
		</div>
		<div class="flex items-center justify-end flex-1">
			<a href="#">
				<button class="bg-[#FFE7BC] hover:bg-slate-500 rounded-full w-[150px] h-[50px] text-[#302134]">Dashboard</button>
			</a>
		</div>
	</div>
</div>