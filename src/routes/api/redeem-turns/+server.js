import { json } from "@sveltejs/kit";
import { users } from "$lib/server/db/schema.js";
import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";

export async function OPTIONS() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

export async function POST({ request, url }) {
    // Add CORS headers to the response
    const corsHeaders = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    try {
        // Handle both query params and JSON body
        let numberOfTurns, user;

        // Check if data is in query params
        const turnsParam = url.searchParams.get("turns");
        const userParam = url.searchParams.get("user");

        if (turnsParam && userParam) {
            numberOfTurns = parseInt(turnsParam, 10);
            user = userParam;
        } else {
            // Try to get data from request body
            try {
                const data = await request.json();
                numberOfTurns = parseInt(data.turns, 10);
                user = data.name; // Your client sends 'name', not 'user'
            } catch (e) {
                return json({
                    error: "Invalid request format"
                }, {
                    status: 400,
                    headers: corsHeaders
                });
            }
        }

        if (isNaN(numberOfTurns) || !user) {
            return json({
                error: "Missing or invalid parameters"
            }, {
                status: 400,
                headers: corsHeaders
            });
        }

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
        }, {
            headers: corsHeaders
        });
    } catch (error) {
        console.error("Failed to update user turns:", error);
        return json({
            success: false,
            error: "Database update failed"
        }, {
            status: 500,
            headers: corsHeaders
        });
    }
}