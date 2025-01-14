<script>
    let {text, isCentered} = $props()
</script>

<header class:center={isCentered}>
    <h1 class="header-text">{text}</h1>
</header>

<style>
    .center {
        text-align: center;
    }

    .header-text {
        font-size: 40px;
        font-weight: normal;
    }
</style>