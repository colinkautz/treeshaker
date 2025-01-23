<script>
    import Title from "$lib/components/Title.svelte";
    import ImageContainer from "$lib/components/User/ImageContainer.svelte";

    const {data} = $props();
    const fruitImages = data.images.filter(image => image.name !== "Bee");
    const produceCategoryList = data.categoryList;
</script>

<Title text="[user]'s page"/>

<main>
    {#each produceCategoryList as category}
        {@const group = fruitImages.filter(image => image.category === category)}
        <ImageContainer imageGroup={group} category={category} />
    {/each}
</main>

<style>
    main {
        margin: 20px;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
    }
    
    @media (min-width: 768px) {
        main {
            grid-template-columns: 850px;
        }
    }
</style>
