import {supabase} from "$lib/server/db/index.js";

export async function getObtainedProduceData(username) {
    const {data, error} = await supabase.from("obtained_produce").select(`produce_name, quantity`).eq("name", username);

    if (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
    return data || [];
}

export async function getUserBalance(username) {
    const {data, error} = await supabase.from("users").select(`balance`).eq("name", username);

    if (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
    return data || [];
}

export async function getUserData(username) {
    const { data, error } = await supabase.from("users").select().eq("name", username);

    if (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
    return data || [];
}