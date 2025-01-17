<script>
    import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";

    let numberOfTurns = 9;
    const turnLabel = numberOfTurns > 1 ? "turns" : "turn";
    const hasTurnsLeft = numberOfTurns > 0;
</script>

<Title text="Shake the tree!"/>

{#if hasTurnsLeft}
    <Header text="You have {numberOfTurns} {turnLabel} left, click the tree" isCentered={true}/>
{:else}
    <Header text="Oh no, you are out of turns!" isCentered={true}/>
{/if}

<main>
    <img class="the-tree {hasTurnsLeft ? 'clickable' : ''}" src="/the-tree.png" alt="a tree"/>
</main>

<style>
    .the-tree {
        position: relative;
        top: 125px;
        cursor: not-allowed;
    }

    .the-tree.clickable {
        cursor: pointer;
    }

    main {
        display: flex;
        justify-content: center;
    }
</style>