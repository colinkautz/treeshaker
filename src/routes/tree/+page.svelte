<script>
    import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";

    let numberOfTurns = $state(11);
    let isDisabled = $state(false);
    const hasTurns = $derived(numberOfTurns);
    const turnsLabel = $derived(numberOfTurns > 1 ? "turns" : "turn");

    const disableButton = (element, duration) => {
        isDisabled = true;

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
                isDisabled = false;
                element.innerText = "Shake the Tree";
            } else {
                element.innerText = `${formatTime(msRemaining)}`;
            }
        }, 100);

        setTimeout(() => {
            clearInterval(countdownInterval);
            isDisabled = false;
            element.innerText = "Shake the Tree";
        }, timeInMilliseconds);
    }

    const shakeTree = (event) => {
        if(numberOfTurns > 0) {
            numberOfTurns = numberOfTurns - 1;
            disableButton(event.target, 60);
        }
    }
</script>

<Title text="the tree"/>

{#if hasTurns}
    <Header text="You have {numberOfTurns} {turnsLabel} left." needsTimer={true}/>
    <button type="button" class="shake-tree" disabled={isDisabled} onclick={shakeTree}>Shake the Tree</button>
{:else}
    <Header text="Oh no, you are out of turns!"/>
{/if}

<main>
    <div class="produce-basket">
        <span>[placeholder for basket, idc]</span>
        <span>[this will need the current item, the name of said item, and then list of previous items]</span>
    </div>
    <img class="the-tree" src="/the-tree.png" alt="a tree"/>
</main>

<style>
    .produce-basket {
        display: none;
    }

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