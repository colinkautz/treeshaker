<script>
    import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";
    import Basket from "$lib/components/Tree/Basket.svelte";
    import HeaderWithLink from "$lib/components/Tree/HeaderWithLink.svelte";
    import {produceData, treeData} from "$lib/components/produceData.js";

    const {data} = $props();

    let user = $state({
        name: data.user.userName,
        numberOfTurns: data.user.turnsLeft,
        balance: data.user.balance,
    });

    let caughtProduce = $state();
    let basket = $state([]);
    let sellingLabelText = $state("");
    let isButtonDisabled = $state(false);
    let isSellingProduce = $state(false);
    let totalMin = $derived(basket.reduce((sum, item) => sum + item.min, 0));
    let totalMax = $derived(basket.reduce((sum, item) => sum + item.max, 0));
    const hasTurns = $derived(user.numberOfTurns);
    const turnsLabel = $derived(user.numberOfTurns > 1 ? "turns" : "turn");
    const clonkData = data.clonkData;

    function disableButton(element, duration) {
        isButtonDisabled = true;

        const timeInMilliseconds = duration * 1000;
        const endTime = Date.now() + timeInMilliseconds;

        const formatTime = (ms) => {
            const totalSeconds = Math.ceil(ms / 1000);
            const mins = Math.floor(totalSeconds / 60);
            const secs = totalSeconds % 60;

            return `${mins.toString().padStart(1, "0")}:${secs.toString().padStart(2, "0")}`;
        };

        const countdownInterval = setInterval(() => {
            const msRemaining = endTime - Date.now();

            if(msRemaining <= 0) {
                isButtonDisabled = false;
                element.innerText = "Shake the Tree";
            } else {
                element.innerText = `${formatTime(msRemaining)}`;
            }
        }, 50);

        setTimeout(() => {
            clearInterval(countdownInterval);
            isButtonDisabled = false;
            element.innerText = "Shake the Tree";
        }, timeInMilliseconds);
    }

    function getProduceImage(produce) {
        return data.images.find(image => image.name === produce.name);
    }

    function shuffleArray(arr) {
        const result = [...arr];

        for(let i = result.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    let currentTree = shuffleArray(treeData);

    function shakeTree(event) {
        let randomProduce;
        const randInt = Math.floor(Math.random() * currentTree.length);
        const chosenCategory = currentTree[randInt];
        const isBee = chosenCategory === "Bee";

        if(!isBee) {
            const produceCategory = produceData.filter(produce => produce.category === chosenCategory);

            currentTree[randInt] = "Bee";
            randomProduce = produceCategory[Math.floor(Math.random() * produceCategory.length)];

            basket.push({name: randomProduce.name, min: randomProduce.min, max: randomProduce.max});
        } else {
            randomProduce = {name: "Bee"};
            basket = [];
            currentTree = shuffleArray(treeData);
            console.log("WHOOPS YOU DIED LOL");
        }

        if(user.numberOfTurns > 0) {
            const cooldownTime = isBee ? 5 : 3; //2.5m : 1m

            user.numberOfTurns = user.numberOfTurns - 1;
            caughtProduce = getProduceImage(randomProduce);
            disableButton(event.target, cooldownTime);
        }
    }

    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function sellItems() {
        let earnings = 0;
        let bonusEarnings = 0;
        let boost = 0;
        let copFishRatio = 0;

        if(clonkData.boost) {
            if(clonkData.boost > 0) {
                boost = clonkData.boost / 10;
            } else if(clonkData.boost < 0) {
                boost = Math.abs(clonkData.boost) / 50;
            }
        }

        if(clonkData.copFishRatio > 0) {
            copFishRatio = Number(clonkData.copFishRatio);
        }

        basket.forEach(item => {
            const value = getRandomValue(item.min, item.max);
            earnings += value;
        });

        const boostPlusRatio = boost + copFishRatio;
        const denominator = boostPlusRatio > 0 ? boostPlusRatio : 1;

        bonusEarnings = Math.round(earnings / denominator);

        user.balance += (earnings + bonusEarnings);

        sellingLabelText = bonusEarnings > 0 ? `You made §${earnings} plus an extra §${bonusEarnings}` : `You made §${earnings}`;
        isSellingProduce = true;
        basket = [];

        setTimeout(() => {
            sellingLabelText = "";
            isSellingProduce = false;
        }, 8000);
    }
</script>

<Title text="the tree"/>

{#if hasTurns}
    <HeaderWithLink username={user.name} text="You have {user.numberOfTurns} {turnsLabel} left."/>
{:else}
    <Header text="Oh no, you are out of turns!"/>
{/if}

<main>
    <div class="button-container">
        {#if hasTurns}
            <button type="button" class="shake-tree" disabled={isButtonDisabled} onclick={shakeTree}>Shake the Tree</button>
        {/if}
        {#if basket.length >= 5}
            {@const asterisks = clonkData ? "*" : ""}
            <button type="button" class="sell-items" onclick={sellItems}>
                Sell Items (§{totalMin} - §{totalMax}) {asterisks}
            </button>
        {/if}
    </div>
    {#if isButtonDisabled}
        <Basket caught={caughtProduce} basket={basket}/>
    {/if}
    {#if isSellingProduce}
        <h3 class="selling-label">{sellingLabelText}</h3>
    {/if}

    <img class="the-tree" src="/the-tree.png" alt="a tree"/>
</main>

<style>
    .shake-tree, .sell-items {
        display: block;
        cursor: pointer;
        border: none;
        color: var(--color-white);
        background-color: var(--color-golden-acorn);
        border-radius: 4px;
        margin: 0 auto;
        width: 200px;
        height: 40px;
        font-size: 20px;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

    .the-tree {
        position: absolute;
        top: 200px;
    }

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    /*mobile styles*/
    @media (max-width: 767px) {
        .button-container {
            display: block;
        }

        .sell-items {
            margin-top: 10px;
        }

        .the-tree {
            scale: 70%;
            top: 170px;
        }
    }

    /*desktop styles*/
    @media (min-width: 768px) {
        .button-container {
            display: flex;
            gap: 10px;
        }
    }
</style>