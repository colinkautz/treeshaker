<script>
    let leaderBoardData = [
        {username: "nightshadedude", leafs: 70000},
        {username: "jakecreatesstuff", leafs: 60000},
        {username: "meisaks", leafs: 55000},
        {username: "lcolonq", leafs: 45000},
        {username: "badcop_", leafs: 30000}
    ];
</script>

<div class="leaderboard">
    <h2>Leaderboard</h2>
    <table>
        <thead>
            <tr>
                <th scope="col" class="header">Username</th>
                <th scope="col" class="header">Balance</th>
            </tr>
        </thead>
        <tbody>
            {#each leaderBoardData as {username, leafs}, i}
                <tr class={i % 2 === 0 ? 'even' : 'odd'}>
                    <td>{username}</td>
                    <td>{leafs}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>

    .header {
        background-color: var(--color-golden-acorn);
    }

    .leaderboard {
        background-color: var(--color-pine-green);
        border-radius: 8px;
        padding: 10px;
    }

    table {
        margin: 0 auto;
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 4px;
        text-align: left;
    }

    th, td {
        padding: 5px;
        font-size: 24px;
    }

    tr.even {
        background-color: rgb(255, 255, 255, 0.15);
    }

    tr.odd {
        background-color: rgb(255, 255, 255, 0.05);
    }
</style>