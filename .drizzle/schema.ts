import { pgTable, text, integer, primaryKey, check } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const produce = pgTable("produce", {
	produceName: text("produce_name").primaryKey().notNull(),
	category: text(),
});

export const category = pgTable("category", {
	category: text().primaryKey().notNull(),
	minValue: integer("min_value"),
	maxValue: integer("max_value"),
});

export const users = pgTable("users", {
	name: text().primaryKey().notNull(),
	turnsLeft: integer("turns_left"),
	balance: integer(),
});

export const obtainedProduce = pgTable("obtained_produce", {
	username: text().notNull(),
	produceName: text("produce_name").notNull(),
	quantity: integer().default(1).notNull(),
}, (table) => [
	primaryKey({ columns: [table.username, table.produceName], name: "obtained_produce_pkey"}),
	check("quantity_check", sql`quantity > 0`),
]);
