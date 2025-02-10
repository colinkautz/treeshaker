import {getProduceImages} from "$lib/server/imageUtils.js";
import {getArrayOfCategories, getProduceCategory} from "$lib/server/produceUtils.js";

export async function load({params}) {
    const produceImages = await getProduceImages();
    const username = params.user;

    return {
        images: produceImages.images.map(obj => ({...obj, category: getProduceCategory(obj.name)})),
        categoryList: getArrayOfCategories(),
        username
    };
}