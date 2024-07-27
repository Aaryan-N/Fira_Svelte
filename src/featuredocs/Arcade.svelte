<script>
	let arcadeStatsParameterDropdown = false;
	let arcadeStatsResultsDropdown = false;
	let arcadeStatsErrorsDropdown = false;
	let arcadeNewSessionParameterDropdown = false;
	let arcadeNewSessionResultsDropdown = false;
	let arcadeNewSessionErrorsDropdown = false;
	import CommandBlock from '../components/template/CommandBlock.svelte';
	import CodeBlock from '../components/template/CodeBlock.svelte';
	import { slide } from 'svelte/transition'
</script>


<div>
	<h1 class="text-xl text-[#FFE7BC] ml-1 mb-1 font-bold">Arcade Commands:</h1>
	<hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
	<div>
		<div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
			<p class="text-[#FFE7BC] text-xl">Arcade Statistics</p>
			<CommandBlock
				commandString="arcadestats"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => arcadeStatsParameterDropdown = !arcadeStatsParameterDropdown} on:click={() => arcadeStatsParameterDropdown = !arcadeStatsParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !arcadeStatsParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if arcadeStatsParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if arcadeStatsParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<CodeBlock
							codeName="slackid:"
							codeBody="Your slack id. Not your display name!"/>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => arcadeStatsResultsDropdown = !arcadeStatsResultsDropdown} on:click={() => arcadeStatsResultsDropdown = !arcadeStatsResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !arcadeStatsResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if arcadeStatsResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if arcadeStatsResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Return the amount of sessions and time on Hack Club Arcade!</p>
								<img class="flex rounded-2xl w-[100%] h-auto mt-2" src="arcadeex/arcadestats.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => arcadeStatsErrorsDropdown = !arcadeStatsErrorsDropdown} on:click={() => arcadeStatsErrorsDropdown = !arcadeStatsErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !arcadeStatsErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if arcadeStatsErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if arcadeStatsErrorsDropdown}
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
			<p class="text-[#FFE7BC] text-xl">New Arcade Session</p>
			<CommandBlock
				commandString="newarcadesession"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => arcadeNewSessionParameterDropdown = !arcadeNewSessionParameterDropdown} on:click={() => arcadeNewSessionParameterDropdown = !arcadeNewSessionParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !arcadeNewSessionParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if arcadeNewSessionParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if arcadeNewSessionParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-1 flex text-[#FFE7BC]">
						<CodeBlock
							codeName="title:"
							codeBody="The title of your arcade session."/>
					</div>
					<div class="text-sm ml-1 mb-2 flex text-[#FFE7BC]">
						<CodeBlock
							codeName="slackid:"
							codeBody="Your slack id. Not your display name!"/>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => arcadeNewSessionResultsDropdown = !arcadeNewSessionResultsDropdown} on:click={() => arcadeNewSessionResultsDropdown = !arcadeNewSessionResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !arcadeNewSessionResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if arcadeNewSessionResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if arcadeNewSessionResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Starts a new arcade session without having to go to Slack!</p>
								<img class="flex w-[100%] rounded-2xl h-[200px] mt-2" src="arcadeex/newArcadeSessionSuccess.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => arcadeNewSessionErrorsDropdown = !arcadeNewSessionErrorsDropdown} on:click={() => arcadeNewSessionErrorsDropdown = !arcadeNewSessionErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !arcadeNewSessionErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if arcadeNewSessionErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if arcadeNewSessionErrorsDropdown}
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