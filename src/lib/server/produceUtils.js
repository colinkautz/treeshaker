import {db} from "$lib/server/db/index.js";
import {categories, produce} from "$lib/server/db/schema.js";

const produceCategoryData = await db.select().from(produce);

export function getProduceCategory(name) {
    if(name !== "Bee") {
        const foundProduce = produceCategoryData.find(obj => obj.name === name);
        return foundProduce.category;
    } else {
        return "";
    }
}