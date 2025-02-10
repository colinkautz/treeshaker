<div class="produce-basket">
    <div class="image-container">
        <img src="https://i33jmajsl7wfihbv.public.blob.vercel-storage.com/treeshaker/produce-images/Apple-YHPr2g1zsdCQtRCAKlFKc5U5vlOEIw.png" alt="Apple">
    </div>
    <div class="basket-items">
        <h2 class="basket-title">Current Basket Items</h2>
        <span class="basket-list">[empty]</span>
    </div>
</div>

<style>
    .basket-items {
        padding: 0 10px 10px;
    }

    .basket-title {
        text-decoration: underline;
    }

    .image-container {
        align-content: center;

        > img {
            width: 50px;
        }
    }

    .produce-basket {
        display: grid;
        grid-template-columns: 25% 75%;
        text-align: center;
        width: 375px;
        border: 4px solid var(--color-deep-forest);
        border-radius: 4px;
        margin-top: 20px;
    }
</style>