<script>
    let {produceType} = $props();
</script>

<div>
    {#each produceType as produce}
        <img class="produce-image" src={produce.url} alt={produce.name} />
    {/each}
</div>

<style>
    .produce-image {
        height: 50px;
    }
</style>