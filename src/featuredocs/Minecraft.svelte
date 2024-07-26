<script>
    let motdParameterDropdown = true;
    let motdParameterDropdownHidden = true;
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

    <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container">
            <div class="inline-flex items-center justify-between w-full rounded py-2 px-2" aria-hidden="true" on:keydown={() => motdParameterDropdown = !motdParameterDropdown} on:click={() => motdParameterDropdown = !motdParameterDropdown}>
                <button class="text-[#FFE7BC] cursor-pointer p-[2px] w-[100%] text-left border-none duration-300">Section 1</button>
                {#if motdParameterDropdown}
                    {motdParameterDropdownHidden = "hidden"}
                {:else}
                    {motdParameterDropdownHidden = ""}
                {/if}
                <div class="{motdParameterDropdownHidden}">
                    <p>Lorem ipsum...</p>
                </div>
        </div>
</div>
</div>