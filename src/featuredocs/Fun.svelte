<script>
    let isPressed = true;
</script>
<div>
    <button on:click={() => isPressed = !isPressed} class="bg-green">
        {#if isPressed}
            <h1>Hi Hi </h1>
        {:else}
            <h1>Bye Bye</h1>
        {/if}
        Toggleable
    </button>
</div>