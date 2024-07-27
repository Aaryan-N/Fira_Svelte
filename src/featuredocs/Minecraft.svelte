<script>
    let motdDescDropdown = false;
    let motdParameterDropdown = false;
    let motdResultsDropdown = false;
    let motdErrorsDropdown = false;
    import CommandBlock from '../components/template/CommandBlock.svelte';
    import CodeBlock from '../components/template/CodeBlock.svelte';
    import { slide } from 'svelte/transition'
</script>


<div>
    <h1 class="text-xl text-[#FFE7BC] ml-1 mb-1 font-bold">Minecraft Commands:</h1>
    <hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
    <div>
    <div class="flex justify-start items-center border-[#FFE7BC] w-auto h-auto ml-1">
            <p class="text-[#FFE7BC] text-xl">Message of the day</p>
        <CommandBlock
        commandString="motd"/>
    </div>

        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => motdDescDropdown = !motdDescDropdown} on:click={() => motdDescDropdown = !motdDescDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Description</button>
                {#if !motdDescDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if motdDescDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if motdDescDropdown}
                <div transition:slide>
                    <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                    <div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
                        <h1 class="ml-1">Checks the message of the day of a minecraft server!</h1>
                    </div>
                </div>
            {/if}
        </div>
        
    <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
        <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => motdParameterDropdown = !motdParameterDropdown} on:click={() => motdParameterDropdown = !motdParameterDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
            {#if !motdParameterDropdown}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>
            </div>
            {/if}
            {#if motdParameterDropdown}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>
            </div>
            {/if}
        </div>
        {#if motdParameterDropdown}
            <div transition:slide>
            <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
            <div class="text-sm pt-1 ml-1 mb-2 flex text-[#FFE7BC]">
                <CodeBlock
                codeName="serveraddress:"
                codeBody="A Minecraft server address. e.g mc.hypixel.net"/>
            </div>
            </div>
        {/if}
    </div>


    <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => motdResultsDropdown = !motdResultsDropdown} on:click={() => motdResultsDropdown = !motdResultsDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Results</button>
                {#if !motdResultsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if motdResultsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if motdResultsDropdown}
                <div transition:slide>
                    <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                    <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                        <ul>
                            <li>
                                <p>Return the message of the day for a given minecraft server!</p>
                                <img class="flex rounded-2xl w-[100%] h-[200px] mt-2" src="minecraftex/motdExample.jpg" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            {/if}
        </div>


        <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => motdErrorsDropdown = !motdErrorsDropdown} on:click={() => motdErrorsDropdown = !motdErrorsDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Potential Errors</button>
                {#if !motdErrorsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
                {#if motdErrorsDropdown}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </div>
                {/if}
            </div>
            {#if motdErrorsDropdown}
                <div transition:slide>
                    <hr class="border-[#FFE7BC] pl-0.5 ml-2 mr-1.5 mb-1" />
                    <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                        <div class="grid grid-cols-1 flex">
                        <h1 class="text-base mb-1">Error Code: 4202</h1>
                        <hr class="border-[#FFE7BC]" />
                        <p class="mt-2 mb-1 ">You have entered an invalid URL. Please enter an actual url!</p>
                            <div>
                            <CodeBlock
                              codeName="Example:"
                              codeBody="mc.hypixel.net"
                            />
                            </div>
                        </div>
                    </div>


                    <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                        <div class="grid grid-cols-1 flex">
                            <h1 class="text-base mb-1">Error Code: 4203</h1>
                            <hr class="border-[#FFE7BC]" />
                            <p class="mt-2 mb-1 ">You have entered an invalid Minecraft Server. Either this server is down or invalid. Please try again!</p>
                            <div>
                            <CodeBlock
                              codeName="Example:"
                              codeBody="mc.hypixel.net"
                            />
                            </div>
                        </div>
                </div>

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