<script>
    let leaderBoardData = [
        {username: "nightshadedude", balance: 7000},
        {username: "dmmulroy", balance: 6000},
        {username: "giacomo_cavalieri", balance: 5500},
        {username: "lcolonq", balance: 4750},
        {username: "badcop_", balance: 3000}
    ];
</script>

<div class="leaderboard">
    <h2 class="cursor-default">Leaderboard</h2>
    <table>
        <thead>
            <tr>
                <th scope="col" class="header cursor-default">Username</th>
                <th scope="col" class="header cursor-default">Balance</th>
            </tr>
        </thead>
        <tbody>
            {#each leaderBoardData as {username, balance}, i}
                <tr class={i % 2 === 0 ? 'even' : 'odd'}>
                    <td><a href="https://twitch.tv/{username}">{username}</a></td>
                    <td class="balance cursor-default">{balance}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .cursor-default {
        cursor: default;
    }

    .header {
        background-color: var(--color-golden-acorn);
    }

    .leaderboard {
        background-color: var(--color-pine-green);
        border-radius: 8px;
        padding: 10px;
    }

    a, a:visited {
        text-decoration: none;
        color: var(--color-white);
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