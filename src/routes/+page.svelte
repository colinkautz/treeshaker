<script>
    import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";
    import LeaderBoard from "$lib/components/Home/LeaderBoard.svelte";
</script>

<Title text="Welcome to TreeShaker"/>
<Header text="Tree Shaker"/>
<main>
    <LeaderBoard/>
    <button class="sign-in">Login with Twitch</button>
</main>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
    }
    .sign-in {
        display: block;
        background-color: var(--color-deep-forest);
        color: var(--color-white);
        border: none;
        border-radius: 4px;
        width: 250px;
        height: 40px;
        margin: 20px auto 0;
        padding: 4px 0;
        font-size: 20px;
        cursor: pointer;
    }
</style>