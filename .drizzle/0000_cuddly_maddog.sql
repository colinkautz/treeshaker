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
	"min_value" bigint,
	"max_value" bigint,
	"spawn_rate" bigint
);
--> statement-breakpoint
ALTER TABLE "category" ENABLE ROW LEVEL SECURITY;
*/