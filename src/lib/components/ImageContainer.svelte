<script>
    import Hint from "svelte-hint";
    let {imageGroup, category} = $props();
    const formattedCategory = category.split(/(?=[A-Z])/).join(" ");
</script>

<div class="produce-image-container">
    <h3 class="category-title">{formattedCategory}</h3>
    {#each imageGroup as image}
        {@const formattedName = image.name.split(/(?=[A-Z])/).join(" ")}
        <Hint offset="0" placement="top">
            <img class="produce-image not-obtained" src={image.url} alt={formattedName}/>
            <p slot="hint" class="tooltip">{formattedName}</p>
        </Hint>
    {/each}
</div>

<style>
    .category-title {
        padding-bottom: 5px;
    }

    .not-obtained {
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
    }

    .tooltip {
        background-color: var(--color-black);
        border-radius: 5px;
        font-size: 20px;
        padding: 0 5px;
    }
</style>