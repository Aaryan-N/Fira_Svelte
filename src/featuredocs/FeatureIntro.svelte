<script>
	import Animals from './Animals.svelte'
	import Arcade from './Arcade.svelte'
	import Birthday from './Birthday.svelte'
	import Economy from './Economy.svelte'
	import Fun from './Fun.svelte'
	import Minecraft from './Minecraft.svelte'
	import Ticketing from './Ticketing.svelte'
	import Utility from './Utility.svelte'
</script>
<div>
	<div class="ml-1 mb-4">
	<h1 class="text-[#FFE7BC] text-3xl flex justify-center mb-0.5">Welcome to Fira!</h1>
	<hr class="border-[#FFE7BC] pl-0.5 ml-0.5 mr-1.5 mb-1"/>
		<div class="grid grid-cols-1 flex">
	<h1 class="text-[#FFE7BC] text-xl flex justify-center">We are happy that you chose us as your server's discord bot!</h1>
	<h1 class="text-[#FFE7BC] flex justify-center">- Here are all the commands or pick any of the buttons in the sidebar to refine your search! -</h1>
		</div>
	</div>
	<Fun/>

	<div class="mt-[10px]">
	<Arcade/>
	</div>

	<div class="mt-[10px]">
	<Birthday/>
	</div>

	<div class="mt-[10px]">
	<Animals/>
	</div>

	<div class="mt-[10px]">
	<Economy/>
	</div>

	<div class="mt-[10px]">
	<Minecraft/>
	</div>

	<div class="mt-[10px]">
	<Ticketing/>
	</div>

	<div class="mt-[10px]">
	<Utility/>
	</div>

</div>