import { json } from "@sveltejs/kit";
import { users } from "$lib/schema";
import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";

export async function POST({ url }) {
    const numberOfTurns = parseInt(url.searchParams.get("turns"), 10);
    const user = url.searchParams.get("user");

    if (isNaN(numberOfTurns) || !user) {
        return json({ error: "Missing or invalid url parameters" }, { status: 400 });
    }

    try {
        await db.update(users)
            .set({ turnsLeft: numberOfTurns })
            .where(eq(users.name, user));

        const updatedUser = await db.select()
            .from(users)
            .where(eq(users.name, user))
            .then(results => results[0]);
            
        return json({
            success: true,
            data: {
                user: updatedUser.name,
                turnsLeft: updatedUser.turnsLeft
            }
        });
    } catch (error) {
        console.error("Failed to update user turns:", error);
        return json({ 
            success: false, 
            error: "Database update failed" 
        }, { status: 500 });
    }
}