<script>
    import Title from "$lib/components/Title.svelte";
    import ImageContainer from "$lib/components/User/ImageContainer.svelte";

    const {data} = $props();
    const fruitImages = data.images.filter(image => image.name !== "Bee");
    const basicVeg = fruitImages.filter(image => image.category === "BasicVeg");
    const berries = data.images.filter(image => image.category === "Berries");
    const citrus = data.images.filter(image => image.category === "Citrus");
    const commonFruit = data.images.filter(image => image.category === "Common");
    const luxury = data.images.filter(image => image.category === "Luxury");
    const premiumVeg = data.images.filter(image => image.category === "Premium");
    const tropical = data.images.filter(image => image.category === "Tropical");
</script>

<Title text="[user]'s page"/>

<main>
    <ImageContainer produceType={commonFruit} />
    <ImageContainer produceType={basicVeg} />
    <ImageContainer produceType={berries} />
    <ImageContainer produceType={citrus} />
    <ImageContainer produceType={tropical} />
    <ImageContainer produceType={premiumVeg} />
    <ImageContainer produceType={luxury} />
</main>
