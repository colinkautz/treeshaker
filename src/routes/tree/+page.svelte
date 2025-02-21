<script>
    import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";
    import Basket from "$lib/components/Tree/Basket.svelte";
    import HeaderWithLink from "$lib/components/Tree/HeaderWithLink.svelte";

    const {data} = $props();

    let user = $state({
        name: data.data.userName,
        numberOfTurns: data.data.turnsLeft,
        balance: data.data.balance,
    });
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

    const shakeTree = (event) => {
        if(user.numberOfTurns > 0) {
            user.numberOfTurns = user.numberOfTurns - 1;
            disableButton(event.target, 90);
        }
    }
</script>

<Title text="the tree"/>

{#if hasTurns}
    <HeaderWithLink username={user.name} text="You have {user.numberOfTurns} {turnsLabel} left." />
    <button type="button" class="shake-tree" disabled={isButtonDisabled} onclick={shakeTree}>Shake the Tree</button>
{:else}
    <Header text="Oh no, you are out of turns!"/>
{/if}

<main>
    {#if isButtonDisabled}
        <Basket />
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