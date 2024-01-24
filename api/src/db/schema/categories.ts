import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { randomUUID } from "node:crypto";
import { questions } from "./questions";

export const nameEnum = pgEnum("name", ["Front-End", "Back-End", "Mobile"]);

export const categories = pgTable("categories", {
  id: text("id")
    .$defaultFn(() => randomUUID())
    .primaryKey(),
  name: nameEnum("name"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  question: many(questions),
}));
