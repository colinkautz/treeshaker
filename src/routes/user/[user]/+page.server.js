import {getProduceImages} from "$lib/server/imageUtils.js";
import {getProduceCategory} from "$lib/server/produceUtils.js";
import {getObtainedProduceData} from "$lib/server/userUtils.js";

export async function load({params}) {
    const produceImages = await getProduceImages();
    const username = params.user;
    const userObtainedData = await getObtainedProduceData(username)

    return {
        images: produceImages.images.map(obj => ({...obj, category: getProduceCategory(obj.name)})),
        username,
        userObtainedData
    };
}