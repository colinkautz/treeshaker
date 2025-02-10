import {eq} from "drizzle-orm";
import {db} from "$lib/server/db/index.js";
import {users} from "$lib/server/db/schema.js";

export const getUserData = async (username) => {
    return db.select().from(users).where(eq(users.userName, username));
}