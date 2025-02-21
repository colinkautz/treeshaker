import {getUserData} from "$lib/server/userUtils.js";

export async function load() {
    let currentUser = "colinahscopy_";
    const users = await getUserData(currentUser);
    const userData = users.find((user) => user.userName === currentUser);

    return {
        data: userData
    }
}