<script>
    import {onMount} from "svelte";
    import Title from "$lib/components/Title.svelte";
    import ButtonStyledLink from "$lib/components/Home/ButtonStyledLink.svelte";

    const {data} = $props();
    const fruitImages = data.images.filter(image => image.name !== "Bee");
    const name = data.username;
    const userData = data.obtainedProduceData;
    const userBalance = data.userBalance;
    let produceInfoText = $state("");

    const getQuantity = (name) => {
        const foundProduce = userData.find(item => item.produce_name === name);
        return foundProduce ? foundProduce.quantity : 0;
    };

    onMount(() => {
        function showProduceText(event, showInfoText) {
            const targetElement = event.target;
            const hasProduceClass = targetElement.classList.contains("produce");
            const itemQuantity = parseInt(targetElement.dataset.quantity, 10) || 0;

            if (hasProduceClass && itemQuantity > 0) {
                produceInfoText = showInfoText ? targetElement.alt : "";
            }
        }

        document.addEventListener("mouseover", (e) => {
            showProduceText(e, true);
        });

        document.addEventListener("mouseout", (e) => {
            showProduceText(e, false);
        });
    });
</script>

<Title text={name}/>
<main>
    <div class="info-container">
        <h2>{name}'s profile</h2>
        <h3>Balance: §{userBalance}</h3>
        <h3>Produce obtained: {userData.length}/65</h3>
    </div>
    <ButtonStyledLink text="To the Tree!" link="/tree"/>
    <div class="produce-images-container">
        {#each fruitImages as image}
            {@const quantity = getQuantity(image.name)}
            <img class="produce {quantity === 0 ? 'not-obtained' : ''}" src={image.url} alt="{image.name} x {quantity}" data-quantity={quantity}/>
        {/each}
    </div>
    <p class="produce-info">{produceInfoText}</p>
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