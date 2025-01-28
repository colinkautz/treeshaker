-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "produce" (
	"produce_name" text PRIMARY KEY NOT NULL,
	"category" text
);
--> statement-breakpoint
ALTER TABLE "produce" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "category" (
	"category" text PRIMARY KEY NOT NULL,
	"min_value" integer,
	"max_value" integer,
	"spawn_rate" integer
);
--> statement-breakpoint
ALTER TABLE "category" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "users" (
	"username" text PRIMARY KEY NOT NULL,
	"turns_left" integer,
	"balance" integer
);
--> statement-breakpoint
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "obtained_produce" (
	"username" text NOT NULL,
	"produce_name" text NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	CONSTRAINT "obtained_produce_pkey" PRIMARY KEY("username","produce_name"),
	CONSTRAINT "quantity_check" CHECK (quantity > 0)
);
--> statement-breakpoint
ALTER TABLE "obtained_produce" ENABLE ROW LEVEL SECURITY;
*/