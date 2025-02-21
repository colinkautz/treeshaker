<script>
    import Title from "$lib/components/Title.svelte";
    import ButtonStyledLink from "$lib/components/Home/ButtonStyledLink.svelte";
    import {onMount} from "svelte";

    const {data} = $props();
    const fruitImages = data.images.filter(image => image.name !== "Bee");
    const name = data.username;
    const userData = data.userObtainedData;
    let produceInfo;


    function getQuantity(name) {
        const foundProduce = userData.find(item => item.produce === name);
        return foundProduce ? foundProduce.quantity : 0;

    }

    onMount(() => {
        document.addEventListener("mouseover", (e) => {
            let classList = e.target.classList;
            let quantity = e.target.dataset.quantity;

            if(classList.contains("produce") && quantity > 0) {
                produceInfo.innerText = e.target.alt;
            }
        });

        document.addEventListener("mouseout", (e) => {
            let classList = e.target.classList;
            let quantity = e.target.dataset.quantity;

            if(classList.contains("produce") && quantity > 0) {
                produceInfo.innerText = "";
            }
        });
    })

</script>

<Title text={name}/>

<main>
    <div class="info-container">
        <h2>{name}'s profile</h2>
        <h3>Balance: §40,000</h3>
        <h3>Produce obtained: {userData.length}/65</h3>
    </div>
    <ButtonStyledLink text="To the Tree!" link="/tree"/>
    <div class="produce-images-container">
        {#each fruitImages as image}
            {@const quantity = getQuantity(image.name)}
            <img class="produce {quantity === 0 ? 'not-obtained' : ''}" src={image.url} alt="{image.name} x {quantity}" data-quantity={quantity}/>
        {/each}
    </div>
    <p bind:this={produceInfo} class="produce-info"></p>
</main>

<style>
    .info-container {
        text-align: center;
    }

    .not-obtained {
        filter: brightness(0);
        opacity: 75%;
    }

    .produce {
        height: 45px;
        margin: 0 5px;
    }

    .produce-images-container {
        max-width: 650px;
        text-align: center;
        border: 4px solid var(--color-deep-forest);
        border-radius: 15px;
        margin: 20px auto 0;
        padding: 0 10px;
    }

    .produce-info {
        text-align: center;
        font-size: 18px;
    }
</style>
