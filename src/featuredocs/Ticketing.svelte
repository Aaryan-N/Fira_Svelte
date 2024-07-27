<script>
	let ticketConfigParameterDropdown = false;
	let ticketConfigResultsDropdown = false;
	let ticketConfigErrorsDropdown = false;
	let newTicketParameterDropdown = false;
	let newTicketResultsDropdown = false;
	let newTicketErrorsDropdown = false;
	import CommandBlock from '../components/template/CommandBlock.svelte';
	import CodeBlock from '../components/template/CodeBlock.svelte';
	import { slide } from 'svelte/transition'
</script>


<div>
	<h1 class="text-xl text-[#FFE7BC] ml-1 mb-1 font-bold">Ticketing Commands:</h1>
	<hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
	<div>
		<div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
			<p class="text-[#FFE7BC] text-xl">Create ticket</p>
			<CommandBlock
				commandString="createticket"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => newTicketParameterDropdown = !newTicketParameterDropdown} on:click={() => newTicketParameterDropdown = !newTicketParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !newTicketParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if newTicketParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if newTicketParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">No Parameters. A modal is spawned.</h1>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => newTicketResultsDropdown = !newTicketResultsDropdown} on:click={() => newTicketResultsDropdown = !newTicketResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !newTicketResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if newTicketResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if newTicketResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Sends the ticket and saves it!</p>
								<img class="flex w-[100%] h-auto mt-2" src="ticketingex/successfulTicket.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>
		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => newTicketErrorsDropdown = !newTicketErrorsDropdown} on:click={() => newTicketErrorsDropdown = !newTicketErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !newTicketErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if newTicketErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if newTicketErrorsDropdown}
				<div transition:slide>
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<div class="grid grid-cols-1 flex">
							<h1 class="text-base mb-1">Error Code: 4204</h1>
							<hr class="border-[#FFE7BC]" />
							<p class="mt-2 mb-1 ">The ticketing channel has not been configured. Please message the server moderators to change this.</p>
							<div>
								<CodeBlock
									codeName="If you are a moderator run:"
									codeBody="/ticketconfig"/>
							</div>
						</div>
					</div>
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
			<p class="text-[#FFE7BC] text-xl">Configure ticket channel</p>
			<CommandBlock
				commandString="ticketconfig"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => ticketConfigParameterDropdown = !ticketConfigParameterDropdown} on:click={() => ticketConfigParameterDropdown = !ticketConfigParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !ticketConfigParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if ticketConfigParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if ticketConfigParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<CodeBlock
							codeName="channel:"
							codeBody="A channel to echo the ticket into for moderator's to review."/>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => ticketConfigResultsDropdown = !ticketConfigResultsDropdown} on:click={() => ticketConfigResultsDropdown = !ticketConfigResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !ticketConfigResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if ticketConfigResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if ticketConfigResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Saves the ticket channel to Fira!</p>
								<img class="flex w-[100%] h-auto mt-2" src="ticketingex/successfulTicketChannel.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>
		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => ticketConfigErrorsDropdown = !ticketConfigErrorsDropdown} on:click={() => ticketConfigErrorsDropdown = !ticketConfigErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !ticketConfigErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if ticketConfigErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if ticketConfigErrorsDropdown}
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