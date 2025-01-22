import { pgTable, text, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const produce = pgTable("produce", {
	produceName: text("produce_name").primaryKey().notNull(),
	category: text(),
});

export const category = pgTable("category", {
	category: text().primaryKey().notNull(),
	minValue: integer("min_value"),
	maxValue: integer("max_value"),
	spawnRate: integer("spawn_rate"),
});
