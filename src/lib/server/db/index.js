import postgres from "postgres";
import {drizzle} from "drizzle-orm/postgres-js";
import {POSTGRES_URL} from "$env/static/private";

const client = postgres(POSTGRES_URL);

export const db = drizzle(client);