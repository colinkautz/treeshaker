import { pgTable, text, integer, primaryKey, check } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



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
