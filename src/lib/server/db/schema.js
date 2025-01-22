import {pgTable, text, integer} from "drizzle-orm/pg-core";

export const categories = pgTable("category", {
    category: text("category").primaryKey(),
    minValue: integer("min_value"),
    maxValue: integer("max_value"),
    spawnRate: integer("spawn_rate")
});

export const produce = pgTable("produce", {
    name: text("produce_name").primaryKey(),
    category: text("category")
});

export const users = pgTable("users", {
    user: text("username").primaryKey(),
    turnsLeft: integer("turns_left"),
    balance: integer("balance")
})
