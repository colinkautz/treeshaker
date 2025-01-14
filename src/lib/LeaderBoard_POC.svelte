<script>
  // Mock data for the leaderboard
  let leaderboardData = [
    { username: "GreenThumb", leafs: 1500 },
    { username: "NatureLover", leafs: 1200 },
    { username: "TreeHugger", leafs: 1000 },
    { username: "LeafCollector", leafs: 800 },
    { username: "ForestGuardian", leafs: 600 }
  ];
</script>

<main>
  <h1>Tree Shaker</h1>
  
  <div class="leaderboard">
    <h2>Leaderboard</h2>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Leafs</th>
        </tr>
      </thead>
      <tbody>
        {#each leaderboardData as { username, leafs }, i}
          <tr class={i % 2 === 0 ? 'even' : 'odd'}>
            <td>{username}</td>
            <td>{leafs}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <div class="login-container">
    <button>Login</button>
  </div>
</main>

<style>
  :global(:root) {
    --color-deep-forest: #19270d;
    --color-pine-green: #25991f;
    --color-muted-sage: #818c3c;
    --color-golden-acorn: #72601b;
    --color-rich-walnut: #593a0e;
    --color-white: #fff;
  }

  :global(body) {
    background-color: var(--color-deep-forest);
    color: var(--color-white);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    color: var(--color-pine-green);
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 2px 2px var(--color-deep-forest);
  }

  .leaderboard {
    background-color: var(--color-muted-sage);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--color-deep-forest);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 4px;
  }

  th {
    background-color: var(--color-golden-acorn);
    color: var(--color-white);
    text-align: left;
    padding: 0.5rem;
  }

  td {
    padding: 0.5rem;
  }

  tr.even {
    background-color: rgba(255, 255, 255, 0.1);
  }

  tr.odd {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .login-container {
    text-align: center;
  }

  button {
    background-color: var(--color-pine-green);
    color: var(--color-white);
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--color-rich-walnut);
  }
</style>