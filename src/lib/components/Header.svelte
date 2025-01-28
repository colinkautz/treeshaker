<script>
    let {text, needsTimer = false} = $props();


</script>

<header>
    <h1 class="header-text">{text}</h1>
    {#if needsTimer}
        <h2 class="header-timer">[xx] seconds until next turn.</h2>
    {/if}
</header>

<style>
    .header-text {
        font-size: 40px;
        font-weight: normal;
    }

    .header-timer {
        display: none;
    }
    
    header {
        cursor: default;
        text-align: center;
    }
</style>