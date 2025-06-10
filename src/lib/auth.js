import {betterAuth} from "better-auth";
import {Pool} from "pg";
import {AUTH_TWITCH_ID, AUTH_TWITCH_SECRET, X_POSTGRES_URL} from "$env/static/private";

export const dbPool = new Pool({
    connectionString: X_POSTGRES_URL
});

export const auth = betterAuth({
    database: dbPool,
    socialProviders: {
        twitch: {
            clientId: AUTH_TWITCH_ID,
            clientSecret: AUTH_TWITCH_SECRET
        }
    },
    account: {
        accountLinking: {
            enabled: true
        }
    },
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    await dbPool.query("INSERT INTO obtained_produce (name) values ($1) ON CONFLICT (name) DO NOTHING", [user.name.toLowerCase()]);
                }
            }
        }
    }
});