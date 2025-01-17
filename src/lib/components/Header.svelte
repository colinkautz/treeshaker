<script>
    let {text, isCentered} = $props()
</script>

<header class={isCentered ? "center" : ""}>
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
    
    header {
        cursor: default;
    }
</style>