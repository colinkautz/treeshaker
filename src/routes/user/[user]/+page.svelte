<script>
    import Title from "$lib/components/Title.svelte";
    import ImageContainer from "$lib/components/User/ImageContainer.svelte";

    const {data} = $props();
    const fruitImages = data.images.filter(image => image.name !== "Bee");
    const produceCategoryList = data.categoryList;
    const name = data.username;
</script>

<Title text={name}/>

<main>
    <div class="info-container">
        <h2>{name}'s profile</h2>
        <h3>Balance: §40,000</h3>
        <h3>Produce obtained: 0/65</h3>
    </div>
    <div class="produce-categories-container">
        {#each produceCategoryList as category}
            {@const group = fruitImages.filter(image => image.category === category)}
            <ImageContainer imageGroup={group} category={category} />
        {/each}
    </div>
</main>

<style>
    .info-container {
        text-align: center;
    }

    .produce-categories-container {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
    }
    
    /*desktop styles*/
    @media (min-width: 768px) {
        .produce-categories-container {
            grid-template-columns: 850px;
        }
    }
</style>
