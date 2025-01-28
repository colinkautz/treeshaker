<script>
    import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";

    let numberOfTurns = 1;
    const turnLabel = numberOfTurns > 1 ? "turns" : "turn";
    const hasTurnsLeft = numberOfTurns > 0;
</script>

<Title text="the tree"/>

{#if hasTurnsLeft}
    <Header text="You have {numberOfTurns} {turnLabel} left." needsTimer={true}/>
    <button type="button" class="shake-tree" disabled={0}>Shake the Tree</button>
{:else}
    <Header text="Oh no, you are out of turns!"/>
{/if}

<main>
    <!-- TODO: add container for obtained item and current basket -->
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