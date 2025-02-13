<script>
    let {text, username} = $props();
</script>

<header>
    <h1 class="header-text">Hi, <a href="/user/{username}">{username}</a>! {text}</h1>
</header>

<style>
    a, a:visited {
        color: inherit;
        text-decoration: none;
    }

    .header-text {
        font-size: 40px;
        font-weight: normal;
    }

    header {
        cursor: default;
        text-align: center;
    }
</style>