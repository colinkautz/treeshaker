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
    let isButtonDisabled = $state(false);
    const hasTurns = $derived(user.numberOfTurns);
    const turnsLabel = $derived(user.numberOfTurns > 1 ? "turns" : "turn");

    const disableButton = (element, duration) => {
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

    const getProduceImage = (produce) => {
        return data.images.find(image => image.name === produce.name);
    }

    const shuffleArray = (arr) => {
        const result = [...arr];

        for(let i = result.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    let currentTree = shuffleArray(treeData);
    const shakeTree = (event) => {
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
            console.log("WHOOPS YOU DIED LOL", currentTree);
        }

        if(user.numberOfTurns > 0) {
            const cooldownTime = isBee ? 10 : 5; //3m : 1.5m

            user.numberOfTurns = user.numberOfTurns - 1;
            caughtProduce = getProduceImage(randomProduce);
            disableButton(event.target, cooldownTime);
        }
    }
</script>

<Title text="the tree"/>

{#if hasTurns}
    <HeaderWithLink username={user.name} text="You have {user.numberOfTurns} {turnsLabel} left."/>
    <button type="button" class="shake-tree" disabled={isButtonDisabled} onclick={shakeTree}>Shake the Tree</button>
{:else}
    <Header text="Oh no, you are out of turns!"/>
{/if}

<main>
    {#if isButtonDisabled}
        <Basket caught={caughtProduce} basket={basket}/>
    {/if}
    <img class="the-tree" src="/the-tree.png" alt="a tree"/>
</main>

<style>
    .shake-tree {
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
        justify-content: center;
    }

    /*mobile styles*/
    @media (max-width: 767px) {
        .the-tree {
            scale: 70%;
            top: 170px;
        }
    }
</style>