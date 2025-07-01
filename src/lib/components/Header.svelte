<script>
    const {text} = $props();
</script>

<header>
    <h1 class="header-text">{text}</h1>
</header>

<style>
    .header-text {
        font-size: 35px;
        font-weight: normal;
    }

    header {
        cursor: default;
        text-align: center;
    }
</style>