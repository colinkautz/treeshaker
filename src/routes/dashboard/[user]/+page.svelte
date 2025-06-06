<script>
    import Title from "$lib/components/Title.svelte";
    import ButtonStyledLink from "$lib/components/Home/ButtonStyledLink.svelte";
    import InfoContainer from "$lib/components/Dashboard/InfoContainer.svelte";
    import ProduceImages from "$lib/components/Dashboard/ProduceImages.svelte";

    const {data} = $props();
    const produceImages = data.images.filter(image => image.name !== "Bee");
    const name = data.username;
    const userData = data.obtainedProduceData;
    const userBalance = data.userBalance;
</script>

<Title text={name}/>
<main>
    <InfoContainer name={name} balance={userBalance} numberOfProduce={userData.length}/>
    <ButtonStyledLink text="To the Tree!" link="/tree"/>
    <ProduceImages images={produceImages} data={userData}/>
</main>