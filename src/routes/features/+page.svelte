<script>
    let featureDocState = Fun;
    import Fun from "../../featuredocs/Fun.svelte"
    import Arcade from "../../featuredocs/Arcade.svelte"
    import Birthday from "../../featuredocs/Birthday.svelte"
    import Economy from "../../featuredocs/Economy.svelte"
    import Minecraft from "../../featuredocs/Minecraft.svelte"
    import Ticketing from "../../featuredocs/Ticketing.svelte"
    import Utility from "../../featuredocs/Utility.svelte"
</script>

<div class="flex">
<div class='w-[200px] h-auto bg-[#313338] border-[#FFE7BC] border-r-4 flex justify-center'>
    <div class="grid-rows-4 grid-flow-col px-2">
    <p class="mt-2 text-xl text-[#FFE7BC] flex justify-center mb-3">Features</p>
    <ul class="">
    <li class="flex justify-center my-2">
            <a href="/features" on:click={() => (featureDocState = Fun)}><button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] flex-1">Fun</button></a>
    </li>
    <li class="flex justfiy-center my-2">
            <a href="/features" on:click={() => (featureDocState = Arcade)}>
                <button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] mr-0">Arcade</button>
            </a>
    </li>
    <li class="flex justify-center my-2">
            <a href="/features" on:click={() => (featureDocState = Birthday)}><button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] flex-1">Birthday</button></a>
    </li>
    <li class="flex justify-center my-2">
            <a href="/features" on:click={() => (featureDocState = Economy)}><button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] flex-1">Economy</button></a>
    </li>
    <li class="flex justify-center my-2">
            <a href="/features" on:click={() => (featureDocState = Minecraft)}><button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] flex-1">Minecraft</button></a>
    </li>
    <li class="flex justify-center my-2">
            <a href="/features" on:click={() => (featureDocState = Ticketing)}><button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] flex-1">Ticketing</button></a>
        </li>
        <li class="flex justify-center my-2">
            <a href="/features" on:click={() => (featureDocState = Utility)}><button class="bg-slate-300 hover:bg-slate-500 rounded-xl w-[120px] h-[30px] flex-1">Utility</button></a>
        </li>
    </ul>
    </div>
</div>
<div class="w-[100%] h-auto bg-[#383a40]">
    <div class="p-2">
    <svelte:component this={featureDocState} />
    </div>
</div>
</div>
