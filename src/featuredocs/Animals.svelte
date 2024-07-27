<script>
	let catPicturesDescDropdown = false;
	let catPicturesParameterDropdown = false;
	let catPicturesResultsDropdown = false;
	let catPicturesErrorsDropdown = false;
	let dogPicturesDescDropdown = false;
	let dogPicturesParameterDropdown = false;
	let dogPicturesResultsDropdown = false;
	let dogPicturesErrorsDropdown = false;
	import CommandBlock from '../components/template/CommandBlock.svelte';
	import CodeBlock from '../components/template/CodeBlock.svelte';
	import { slide } from 'svelte/transition'
</script>


<div>
	<h1 class="text-xl text-[#FFE7BC] ml-1 mb-1 font-bold">Animals Commands:</h1>
	<hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
	<div>
		<div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
			<p class="text-[#FFE7BC] text-xl">Cat Pictures</p>
			<CommandBlock
				commandString="catpic"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => catPicturesDescDropdown = !catPicturesDescDropdown} on:click={() => catPicturesDescDropdown = !catPicturesDescDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Description</button>
				{#if !catPicturesDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if catPicturesDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if catPicturesDescDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">Replies with a random picture of a cat!</h1>
					</div>
				</div>
			{/if}
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => catPicturesParameterDropdown = !catPicturesParameterDropdown} on:click={() => catPicturesParameterDropdown = !catPicturesParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !catPicturesParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if catPicturesParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if catPicturesParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">None</h1>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => catPicturesResultsDropdown = !catPicturesResultsDropdown} on:click={() => catPicturesResultsDropdown = !catPicturesResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !catPicturesResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if catPicturesResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if catPicturesResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Returns a cute cat picture!</p>
								<img class="flex rounded-2xl w-[100%] h-auto mt-2" src="animalex/CatPicSuccess.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => catPicturesErrorsDropdown = !catPicturesErrorsDropdown} on:click={() => catPicturesErrorsDropdown = !catPicturesErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !catPicturesErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if catPicturesErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if catPicturesErrorsDropdown}
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
			<p class="text-[#FFE7BC] text-xl">Dog Pictures</p>
			<CommandBlock
				commandString="dogpic"/>
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => dogPicturesDescDropdown = !dogPicturesDescDropdown} on:click={() => dogPicturesDescDropdown = !dogPicturesDescDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Description</button>
				{#if !dogPicturesDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if dogPicturesDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if dogPicturesDescDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">Replies with a random picture of a dog!</h1>
					</div>
				</div>
			{/if}
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => dogPicturesParameterDropdown = !dogPicturesParameterDropdown} on:click={() => dogPicturesParameterDropdown = !dogPicturesParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !dogPicturesParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if dogPicturesParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if dogPicturesParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">None</h1>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => dogPicturesResultsDropdown = !dogPicturesResultsDropdown} on:click={() => dogPicturesResultsDropdown = !dogPicturesResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !dogPicturesResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if dogPicturesResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if dogPicturesResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>A cute dog picture!</p>
								<img class="flex w-[100%] rounded-2xl h-[200px] mt-2" src="animalex/DogPicSuccess.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => dogPicturesErrorsDropdown = !dogPicturesErrorsDropdown} on:click={() => dogPicturesErrorsDropdown = !dogPicturesErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !dogPicturesErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if dogPicturesErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if dogPicturesErrorsDropdown}
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