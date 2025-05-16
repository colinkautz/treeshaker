import {getProduceImages} from "$lib/server/imageUtils.js";
import {getObtainedProduceData, getUserBalance} from "$lib/server/userUtils.js";

export async function load({params}) {
    const produceImages = await getProduceImages();
    const username = params.user;
    const userObtainedProduceData = await getObtainedProduceData(username);
    const userBalance = await getUserBalance(username);

    return {
        images: produceImages.images,
        username,
        userObtainedProduceData,
        userBalance: userBalance[0].balance,
    };
}