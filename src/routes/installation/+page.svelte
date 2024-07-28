<script>
	import Intro from '../../installationdocs/installationIntro.svelte'
	import Server from  '../../installationdocs/addToServer.svelte'
	import Config from '../../installationdocs/configurationDocs.svelte'
	let installationDocState = Intro;
</script>

<div class="flex">
	<div class="w-[200px] h-auto bg-[#313338] border-[#FFE7BC] border-r-4 flex justify-center">
		<div class="grid-rows-4 grid-flow-col px-2" >
			<p class="cursor-pointer mt-2 text-xl text-[#FFE7BC] flex justify-center mb-3">Installation</p>
			<ul>
				<li class="flex justify-center my-2">
					<a href="/installation" on:click={() => (installationDocState = Server)}><button class="bg-slate-300 hover:bg-slate-500 rounded-xl px-2 w-[120px] h-[50px] flex-1">Adding to Server</button></a>
				</li>
				<li class="flex justfiy-center my-2">
					<a href="/installation" on:click={() => (installationDocState = Config)}>
						<button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] mr-0">Configuration</button>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="w-[100%] h-auto bg-[#313338]">
		<div class="p-2">
			<svelte:component this={installationDocState} />
		</div>
	</div>
</div>

