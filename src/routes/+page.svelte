<script>
    import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";
    import LeaderBoard from "$lib/components/Home/LeaderBoard.svelte";
    import LoginButton from "$lib/components/Home/LoginButton.svelte";
</script>

<Title text="Welcome to TreeShaker"/>

<Header text="Tree Shaker"/>
<main>
    <LeaderBoard/>
    <LoginButton/>
</main>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
    }
</style>