import {getUserData} from "$lib/server/userUtils.js";
import {getProduceImages} from "$lib/server/imageUtils.js";

export async function load() {
    let currentUser = "colinahscopy_";
    let clonkData = {};
    const users = await getUserData(currentUser);
    const userData = users.find((user) => user.userName === currentUser);
    const produceImageSet = await getProduceImages();

    const res = await fetch(`https://api.colonq.computer/api/user/${currentUser}`);
    //const negativeBoostTest = await fetch(`https://api.colonq.computer/api/user/meisaka`);

    if(res.ok) {
        const data = await res.text();

        if(data) {
            const boost = data.match(/:boost.*?(\d+)/);
            const copFishRatio = data.match(/:copfish-ratio.*?(\d+).*?(\d+)/);

            if(boost) {
                clonkData.boost = parseInt(boost[1], 10);
            } else {
                clonkData.boost = null;
            }

            if(copFishRatio) {
                const num = parseInt(copFishRatio[1], 10);
                const denom = parseInt(copFishRatio[2], 10);

                clonkData.copFishRatio = ((num / denom) * 10).toFixed(1);
            } else {
                clonkData.copFishRatio = 0;
            }
        }
    } else {
        console.error(`error: ${res.status}`);
    }

    return {
        clonkData,
        user: userData,
        images: produceImageSet.images
    }
}