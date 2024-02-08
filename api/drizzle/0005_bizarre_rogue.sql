DO $$ BEGIN
 CREATE TYPE "name" AS ENUM('Front-End', 'Back-End', 'Mobile', "DevOps");
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"name" "name",
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "category_name" text;