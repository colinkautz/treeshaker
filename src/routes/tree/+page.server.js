import {getUserData} from "$lib/server/userUtils.js";
import {getProduceImages} from "$lib/server/imageUtils.js";

export async function load() {
    let currentUser = "colinahscopy_";
    const users = await getUserData(currentUser);
    const userData = users.find((user) => user.userName === currentUser);
    const produceImageSet = await getProduceImages();

    return {
        user: userData,
        images: produceImageSet.images
    }
}