import {getProduceImages} from "$lib/server/imageUtils.js";
import {getArrayOfCategories, getProduceCategory} from "$lib/server/produceUtils.js";

export async function load() {
    const produceImages = await getProduceImages();

    return  {
        images: produceImages.images.map(obj => ({...obj, category: getProduceCategory(obj.name)})),
        categoryList: getArrayOfCategories()
    };
}