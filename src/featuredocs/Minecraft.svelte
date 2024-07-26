<script>
    let motdParameterDropdown = true;
    import { slide, spin } from 'svelte/transition'

    function spin(node, options) {
        const {times = 0.5} = options;
        return {
            ...options,
            css(t) {
                const degrees = 360 * times;
                return `transform: scale(${t}) rotate(${t * degrees}deg);`;
            }
        };
    }


</script>
<div>
    <h1 class="text-xl text-[#FFE7BC] ml-1 mb-1">Minecraft Commands</h1>
    <hr class="border-[#FFE7BC] ml-1 mr-1.5 mb-1" />
    <div class="flex justify-start border-[#FFE7BC] w-auto h-auto ml-1">
            <p class="text-[#FFE7BC] text-xl">Message of the day</p>
        <span class="bg-gray-800 rounded  ml-2 px-4 p-0.5">
        <span class="flex 1 text-[#FFE7BC]">
            <span>/</span>
            <span>motd</span>
        </span>
        </span>
    </div>

    <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container grid grid-cols-1 cursor-pointer">
        <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => motdParameterDropdown = !motdParameterDropdown} on:click={() => motdParameterDropdown = !motdParameterDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer pl-0.5 pt-[1px] w-[100%] text-left border-none duration-300">Parameters</button>
            <div class="{ motdParameterDropdown === true ? '' : 'hidden' }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>
            </div>
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
            <div class="text-sm pt-1 ml-2 mb-2 flex text-[#FFE7BC]">
                <ul>
                <li>
                    <p>None</p>
                </li>
                </ul>
            </div>
            </div>
        {/if}
</div>
</div>