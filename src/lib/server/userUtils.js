import {eq} from "drizzle-orm";
import {db} from "$lib/server/db/index.js";
import {obtainedProduce, users} from "$lib/server/db/schema.js";

export const getObtainedProduceData = async (username) => {
    return db.select({
        produce: obtainedProduce.produceName,
        quantity: obtainedProduce.quantity
    }).from(obtainedProduce).where(eq(obtainedProduce.userName, username))
}

export const getUserData = async (username) => {
    return db.select().from(users).where(eq(users.userName, username));
}