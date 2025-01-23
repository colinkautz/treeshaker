<script>
    let {imageGroup, category} = $props();
    const formattedCategory = category.split(/(?=[A-Z])/).join(" ");
</script>

<div class="produce-image-container">
    <h3>{formattedCategory}</h3>
    {#each imageGroup as image}
        <img class="produce-image unobtained" src={image.url} alt={image.name} />
    {/each}
</div>

<style>
    .unobtained {
        filter: brightness(0);
        opacity: 75%;
    }

    .produce-image-container {
        border: 4px solid var(--color-deep-forest);
        border-radius: 15px;
        margin: 10px 0;
        padding: 0 10px;

        .produce-image {
            height: 45px;
            margin: 0 5px;
        }

        .produce-image:first-of-type {
            margin-left: 0;
        }

        .produce-image:last-of-type {
            margin-right: 0;
        }
    }
</style>