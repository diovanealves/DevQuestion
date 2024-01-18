import { relations } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { randomUUID } from "node:crypto";
import { answers } from "./answers";

export const questions = pgTable("questions", {
  id: text("id")
    .$defaultFn(() => randomUUID())
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  }).defaultNow(),
});

export const questionsRelations = relations(questions, ({ many }) => ({
  answers: many(answers),
}));
