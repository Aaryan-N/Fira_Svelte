<script>
    let eightBallParameterDropdown = false;
    let eightBallResultsDropdown = false;
    let eightBallErrorsDropdown = false;
    let dadJokeParameterDropdown = false;
    let dadJokeResultsDropdown = false;
    let dadJokeErrorsDropdown = false;
    let factsParameterDropdown = false;
    let factsResultsDropdown = false;
    let factsErrorsDropdown = false;
    let jokeParameterDropdown = false;
    let jokeResultsDropdown = false;
    let jokeErrorsDropdown = false;
    let memesParameterDropdown = false;
    let memesResultsDropdown = false;
    let memesErrorsDropdown = false;
    let rpsParameterDropdown = false;
    let rpsResultsDropdown = false;
    let rpsErrorsDropdown = false;
    import CommandBlock from '../components/template/CommandBlock.svelte';
    import CodeBlock from '../components/template/CodeBlock.svelte';
    import { slide } from 'svelte/transition'
</script>


<div>
    <h1 class="text-xl text-[#FFE7BC] ml-1 mb-1 font-bold">Fun Commands:</h1>
    <hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
    <div>
        <div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
            <p class="text-[#FFE7BC] text-xl">8 Ball</p>
            <CommandBlock
              commandString="8ball"/>
        </div>

        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => eightBallParameterDropdown = !eightBallParameterDropdown} on:click={() => eightBallParameterDropdown = !eightBallParameterDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
                {#if !eightBallParameterDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if eightBallParameterDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if eightBallParameterDropdown}
                <div transition:slide>
                    <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                    <div class="text-sm pt-1 ml-1 mb-1 flex text-[#FFE7BC]">
                        <CodeBlock
                          codeName="query:"
                          codeBody="Ask the 8 Ball what you want!"/>
                    </div>
                    <div class="text-sm ml-1 mb-2 flex text-[#FFE7BC]">
                        <CodeBlock
                          codeName="lucky:"
                          codeBody="Feeling lucky? Set this to true"/>
                    </div>
                </div>
            {/if}
        </div>


        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => eightBallResultsDropdown = !eightBallResultsDropdown} on:click={() => eightBallResultsDropdown = !eightBallResultsDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
                {#if !eightBallResultsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if eightBallResultsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if eightBallResultsDropdown}
                <div transition:slide>
                    <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                    <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                        <ul>
                            <li>
                                <p>A Verdict!</p>
                                <img class="flex rounded-2xl w-[100%] h-auto mt-2" src="funex/8BallSuccess.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            {/if}
        </div>


        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => eightBallErrorsDropdown = !eightBallErrorsDropdown} on:click={() => eightBallErrorsDropdown = !eightBallErrorsDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
                {#if !eightBallErrorsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if eightBallErrorsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if eightBallErrorsDropdown}
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
            <p class="text-[#FFE7BC] text-xl">Dad Joke</p>
            <CommandBlock
              commandString="dadjoke"/>
        </div>

        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => dadJokeParameterDropdown = !dadJokeParameterDropdown} on:click={() => dadJokeParameterDropdown = !dadJokeParameterDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
                {#if !dadJokeParameterDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if dadJokeParameterDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if dadJokeParameterDropdown}
                <div transition:slide>
                    <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                    <div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
                        <h1 class="ml-1">None</h1>
                    </div>
                </div>
            {/if}
        </div>


        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => dadJokeResultsDropdown = !dadJokeResultsDropdown} on:click={() => dadJokeResultsDropdown = !dadJokeResultsDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
                {#if !dadJokeResultsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if dadJokeResultsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if dadJokeResultsDropdown}
                <div transition:slide>
                    <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                    <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                        <ul>
                            <li>
                                <p>A (slightly corny) dad joke!</p>
                                <img class="flex w-[100%] rounded-2xl h-[200px] mt-2" src="funex/DadJokeSuccess.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            {/if}
        </div>


        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => dadJokeErrorsDropdown = !dadJokeErrorsDropdown} on:click={() => dadJokeErrorsDropdown = !dadJokeErrorsDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
                {#if !dadJokeErrorsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if dadJokeErrorsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if dadJokeErrorsDropdown}
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
        <div class="pt-[8px]">
            <div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
                <p class="text-[#FFE7BC] text-xl">Facts</p>
                <CommandBlock
                  commandString="fact"/>
            </div>

            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => factsParameterDropdown = !factsParameterDropdown} on:click={() => factsParameterDropdown = !factsParameterDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
                    {#if !factsParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if factsParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if factsParameterDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
                            <CodeBlock
                              codeName="type:"
                              codeBody="Either a Random, Cat or Dog related fact!"/>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => factsResultsDropdown = !factsResultsDropdown} on:click={() => factsResultsDropdown = !factsResultsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
                    {#if !factsResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if factsResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if factsResultsDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                            <ul>
                                <li>
                                    <p>Replies with your chosen fact:</p>
                                    <img class="flex rounded-2xl w-[100%] h-auto mt-2" src="funex/FactSuccess.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => factsErrorsDropdown = !factsErrorsDropdown} on:click={() => factsErrorsDropdown = !factsErrorsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
                    {#if !factsErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if factsErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if factsErrorsDropdown}
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
                <p class="text-[#FFE7BC] text-xl">Jokes</p>
                <CommandBlock
                  commandString="joke"/>
            </div>

            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => jokeParameterDropdown = !jokeParameterDropdown} on:click={() => jokeParameterDropdown = !jokeParameterDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
                    {#if !jokeParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if jokeParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if jokeParameterDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
                            <h1 class="ml-1">None</h1>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => jokeResultsDropdown = !jokeResultsDropdown} on:click={() => jokeResultsDropdown = !jokeResultsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
                    {#if !jokeResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if jokeResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if jokeResultsDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                            <ul>
                                <li>
                                    <p>A joke!</p>
                                    <img class="flex w-[100%] rounded-2xl h-[200px] mt-2" src="funex/JokeSuccess.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => jokeErrorsDropdown = !jokeErrorsDropdown} on:click={() => jokeErrorsDropdown = !jokeErrorsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
                    {#if !jokeErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if jokeErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if jokeErrorsDropdown}
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
                <p class="text-[#FFE7BC] text-xl">Memes</p>
                <CommandBlock
                  commandString="memes"/>
            </div>

            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => memesParameterDropdown = !memesParameterDropdown} on:click={() => memesParameterDropdown = !memesParameterDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
                    {#if !memesParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if memesParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if memesParameterDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
                            <h1 class="ml-1">None</h1>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => memesResultsDropdown = !memesResultsDropdown} on:click={() => memesResultsDropdown = !memesResultsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
                    {#if !memesResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if memesResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if memesResultsDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                            <ul>
                                <li>
                                    <p>A meme!</p>
                                    <img class="flex rounded-2xl w-[100%] h-auto mt-2" src="funex/MemesSuccess.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => memesErrorsDropdown = !memesErrorsDropdown} on:click={() => memesErrorsDropdown = !memesErrorsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
                    {#if !memesErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if memesErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if memesErrorsDropdown}
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
                <p class="text-[#FFE7BC] text-xl">RPS</p>
                <CommandBlock
                  commandString="rps"/>
            </div>

            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => rpsParameterDropdown = !rpsParameterDropdown} on:click={() => rpsParameterDropdown = !rpsParameterDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
                    {#if !rpsParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if rpsParameterDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if rpsParameterDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-1 mb-1 flex text-[#FFE7BC]">
                            <CodeBlock
                              codeName="userchoice:"
                              codeBody="Rock, Paper or Scissors"/>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => rpsResultsDropdown = !rpsResultsDropdown} on:click={() => rpsResultsDropdown = !rpsResultsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
                    {#if !rpsResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if rpsResultsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if rpsResultsDropdown}
                    <div transition:slide>
                        <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                        <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                            <ul>
                                <li>
                                    <p>The game!</p>
                                    <img class="flex w-[100%] rounded-2xl h-[200px] mt-2" src="funex/RpsSuccess.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                {/if}
            </div>


            <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
                <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => rpsErrorsDropdown = !rpsErrorsDropdown} on:click={() => rpsErrorsDropdown = !rpsErrorsDropdown}>
                    <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
                    {#if !rpsErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                    {#if rpsErrorsDropdown}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if rpsErrorsDropdown}
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
        </div>