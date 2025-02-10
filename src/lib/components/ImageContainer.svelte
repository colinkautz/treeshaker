<script>
    import Hint from "svelte-hint";
    import {Tooltip} from "@svelte-plugins/tooltips";
    let {imageGroup, category} = $props();
    const formattedCategory = category.split(/(?=[A-Z])/).join(" ");
</script>

<div class="produce-image-container">
    <h3 class="category-title">{formattedCategory}</h3>
    {#each imageGroup as image}
        {@const formattedName = image.name.split(/(?=[A-Z])/).join(" ")}
        <Tooltip
                content={formattedName}
                align="center"
                maxWidth="none"
                theme="image-tooltip">
            <img class="produce-image not-obtained" src={image.url} alt={formattedName}/>
        </Tooltip>
    {/each}
</div>

<style>
    :global(.tooltip.image-tooltip) {
        --tooltip-font-family: "EB Garamond Variable";
        --tooltip-font-size: 16px;
        --tooltip-padding: 10px;
    }

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
</style>