import {db} from "$lib/server/db";
import {categories, produce} from "$lib/server/db/schema.js";

const produceCategoryData = await db.select().from(produce);
const categoryList = await db.select({category: categories.category}).from(categories);

export function getProduceCategory(name) {
    if(name !== "Bee") {
        const foundProduce = produceCategoryData.find(obj => obj.name === name);
        return foundProduce.category;
    } else {
        return "";
    }
}

export function getArrayOfCategories() {
    return categoryList.map(item => item.category);
}