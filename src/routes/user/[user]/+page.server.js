import {getProduceImages} from "$lib/server/imageUtils.js";
import {getObtainedProduceData} from "$lib/server/userUtils.js";

export async function load({params}) {
    const produceImages = await getProduceImages();
    const username = params.user;
    const userObtainedData = await getObtainedProduceData(username)

    return {
        images: produceImages.images,
        username,
        userObtainedData
    };
}