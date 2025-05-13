import {json} from "@sveltejs/kit";

export async function POST({url}) {
    const numberOfTurns = url.searchParams.get("turns");
    const userName = url.searchParams.get("user");

    if(!numberOfTurns || !userName) {
        return json({error: "missing parameter(s)"}, {status: 400});
    }

    console.log(`redeeming ${numberOfTurns} turns for ${userName}`);
}