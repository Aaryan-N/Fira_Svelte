<script>
    let motdParameterDropdown = false;
    function handleClick(event){
        return motdParameterDropdown ? true : false;
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

    <div class="ml-1 mt-1 bg-[#302134] w-full h-auto flex px-2 rounded-xl container">
        <span class="inline-flex items-center justify-between w-full rounded py-2 px-2">
            <span class="text-[#FFE7BC]">Parameters</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" class="w-4 h-4">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v4.69L6.03 8.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8.75 9.44V4.75Z" clip-rule="evenodd" />
            </svg>
        </span>
    </div>
</div>