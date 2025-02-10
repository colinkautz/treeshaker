import {getUserData} from "$lib/server/userUtils.js";

export async function load() {
    let currentUser = "colinahscopy_";
    const users = await getUserData(currentUser);

    let userData = users.find((user) => user.userName === currentUser);
    console.log(userData);
}