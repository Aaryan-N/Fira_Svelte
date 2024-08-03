<script>
	let colorConvertDescDropdown = false;
	let colorConvertParameterDropdown = false;
	let colorConvertResultsDropdown = false;
	let colorConvertErrorsDropdown = false;
	let colorRandomDescDropdown = false;
	let colorRandomParameterDropdown = false;
	let colorRandomResultsDropdown = false;
	let colorRandomErrorsDropdown = false;
	import CommandBlock from '../components/template/CommandBlock.svelte';
	import CodeBlock from '../components/template/CodeBlock.svelte';
	import { slide } from 'svelte/transition'
</script>


<div>
	<h1 class="text-xl text-[#FFE7BC] ml-1 mb-1 font-bold">Color Commands:</h1>
	<hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
	<div>
		<div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
			<p class="text-[#FFE7BC] text-xl">Color Convert</p>
			<CommandBlock
				commandString="colorconvert"/>
		</div>
		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorConvertDescDropdown = !colorConvertDescDropdown} on:click={() => colorConvertDescDropdown = !colorConvertDescDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Description</button>
				{#if !colorConvertDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorConvertDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorConvertDescDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">Convert HEX Code to other color types!</h1>
					</div>
				</div>
			{/if}
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorConvertParameterDropdown = !colorConvertParameterDropdown} on:click={() => colorConvertParameterDropdown = !colorConvertParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !colorConvertParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorConvertParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorConvertParameterDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<CodeBlock
							codeName="hexcolor:"
							codeBody="Enter a hex code to be converted to other types!"/>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorConvertResultsDropdown = !colorConvertResultsDropdown} on:click={() => colorConvertResultsDropdown = !colorConvertResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !colorConvertResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorConvertResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorConvertResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Returns the converted colors and image!</p>
								<img class="flex rounded-2xl w-[100%] h-auto mt-2" src="colorex/colorConvertSuccess.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorConvertErrorsDropdown = !colorConvertErrorsDropdown} on:click={() => colorConvertErrorsDropdown = !colorConvertErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !colorConvertErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorConvertErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorConvertErrorsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<div class="grid grid-cols-1 flex">
							<h1 class="text-base mb-1">Error Code: 4208</h1>
							<hr class="border-[#FFE7BC]" />
							<p class="mt-2 mb-1 ">This is not a hex code! Please input a hex code.</p>
							<div>
								<CodeBlock
									codeName="Example:"
									codeBody="#ffffff"
								/>
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
			<p class="text-[#FFE7BC] text-xl">Random Color</p>
			<CommandBlock
				commandString="randomcolor"/>
		</div>
		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorRandomDescDropdown = !colorRandomDescDropdown} on:click={() => colorRandomDescDropdown = !colorRandomDescDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Description</button>
				{#if !colorRandomDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorRandomDescDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorRandomDescDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
						<h1 class="ml-1">Get a random color!</h1>
					</div>
				</div>
			{/if}
		</div>

		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorRandomParameterDropdown = !colorRandomParameterDropdown} on:click={() => colorRandomParameterDropdown = !colorRandomParameterDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
				{#if !colorRandomParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorRandomParameterDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorRandomParameterDropdown}
				<div transition:slide>
					<div transition:slide>
						<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
						<div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
							<h1 class="ml-1">None</h1>
						</div>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorRandomResultsDropdown = !colorRandomResultsDropdown} on:click={() => colorRandomResultsDropdown = !colorRandomResultsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
				{#if !colorRandomResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorRandomResultsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorRandomResultsDropdown}
				<div transition:slide>
					<hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
					<div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
						<ul>
							<li>
								<p>Returns a pretty color!</p>
								<img class="flex w-[100%] rounded-2xl h-[200px] mt-2" src="colorex/randomColorSuccess.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>


		<div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
			<div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => colorRandomErrorsDropdown = !colorRandomErrorsDropdown} on:click={() => colorRandomErrorsDropdown = !colorRandomErrorsDropdown}>
				<button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
				{#if !colorRandomErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
				{#if colorRandomErrorsDropdown}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</div>
				{/if}
			</div>
			{#if colorRandomErrorsDropdown}
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