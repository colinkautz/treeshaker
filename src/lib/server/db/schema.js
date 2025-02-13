import {sql} from "drizzle-orm";
import {pgTable, text, integer, primaryKey, check} from "drizzle-orm/pg-core";

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
    userName: text("name").primaryKey(),
    turnsLeft: integer("turns_left"),
    balance: integer("balance")
});

export const obtainedProduce = pgTable("obtained_produce", {
    userName: text("username").notNull(),
    produceName: text("produce_name").notNull(),
    quantity: integer().default(1).notNull(),
}, (table) => [
    primaryKey({ columns: [table.userName, table.produceName], name: "obtained_produce_pkey"}),
    check("quantity_check", sql`quantity > 0`),
]);