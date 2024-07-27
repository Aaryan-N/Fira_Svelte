<script>
	let aboutDescDropdown = false;
	let aboutParameterDropdown = false;
	let aboutResultsDropdown = false;
	let aboutErrorsDropdown = false;
	let statsDescDropdown = false;
	let statsParameterDropdown = false;
	let statsResultsDropdown = false;
	let statsErrorsDropdown = false;
	import CommandBlock from '../components/template/CommandBlock.svelte';
	import CodeBlock from '../components/template/CodeBlock.svelte';
	import { slide } from 'svelte/transition'
</script>


<div>
	<h1 class="text-xl text-[#FFE7BC] ml-1 mb-1 font-bold">Utility Commands:</h1>
	<hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
	<div>
		<div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
			<p class="text-[#FFE7BC] text-xl">About Fira</p>
			<CommandBlock
				commandString="about"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => aboutDescDropdown = !aboutDescDropdown} on:click={() => aboutDescDropdown = !aboutDescDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Description</button>
				{#if !aboutDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if aboutDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if aboutDescDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">Replies with some information about Fira!</h1>
					</div>
				</div>
			{/if}
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => aboutParameterDropdown = !aboutParameterDropdown} on:click={() => aboutParameterDropdown = !aboutParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !aboutParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if aboutParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if aboutParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">None</h1>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => aboutResultsDropdown = !aboutResultsDropdown} on:click={() => aboutResultsDropdown = !aboutResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !aboutResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if aboutResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if aboutResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Gives information about Fira!</p>
								<img class="flex w-[100%] rounded-2xl h-auto mt-2" src="utilityex/aboutSuccess.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>
		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => aboutErrorsDropdown = !aboutErrorsDropdown} on:click={() => aboutErrorsDropdown = !aboutErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !aboutErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if aboutErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if aboutErrorsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<div class="grid grid-cols-1 flex">
							<h1 class="text-base mb-1">If you encounter any other errors:</h1>
							<hr class="border-[#FFE7BC]" />
							<p class="mt-2 mb-1 ">Don't hesitate to join the support server and make a ticket!</p>
							<div>
								<CodeBlock
									codeName="Support Server Link:"
									codeBody="/support"/>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>


	<div class="pt-[8px]">
		<div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
			<p class="text-[#FFE7BC] text-xl">Server Stats</p>
			<CommandBlock
				commandString="stats"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => statsDescDropdown = !statsDescDropdown} on:click={() => statsDescDropdown = !statsDescDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Description</button>
				{#if !statsDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if statsDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if statsDescDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">Replies with some handy stats about the server!</h1>
					</div>
				</div>
			{/if}
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => statsParameterDropdown = !statsParameterDropdown} on:click={() => statsParameterDropdown = !statsParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !statsParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if statsParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if statsParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">None</h1>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => statsResultsDropdown = !statsResultsDropdown} on:click={() => statsResultsDropdown = !statsResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !statsResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if statsResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if statsResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Returns the servers statistics!</p>
								<img class="flex w-[100%] h-auto mt-2 rounded-2xl" src="utilityex/statsSuccess.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>
		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => statsErrorsDropdown = !statsErrorsDropdown} on:click={() => statsErrorsDropdown = !statsErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !statsErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if statsErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if statsErrorsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<div class="grid grid-cols-1 flex">
							<h1 class="text-base mb-1">If you encounter any other errors:</h1>
							<hr class="border-[#FFE7BC]" />
							<p class="mt-2 mb-1 ">Don't hesitate to join the support server and make a ticket!</p>
							<div>
								<CodeBlock
									codeName="Support Server Link:"
									codeBody="/support"/>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>