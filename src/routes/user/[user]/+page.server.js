import {getProduceCategory, getProduceImages} from "$lib/server/blob.js";

export async function load() {
    const produceImages = await getProduceImages();

    return  {
        images: produceImages.images.map(obj => ({...obj, category: getProduceCategory(obj.name)}))
    };
}