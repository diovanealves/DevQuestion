import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { randomUUID } from "node:crypto";
import { questions } from "./questions";

export const answers = pgTable("answers", {
  id: text("id")
    .$defaultFn(() => randomUUID())
    .primaryKey(),
  text: text("text").notNull(),
  likes: integer("likes").default(0).notNull(),
  questionId: text("question_id").notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  }).defaultNow(),
});

export const answersRelations = relations(answers, ({ one }) => ({
  question: one(questions, {
    fields: [answers.questionId],
    references: [questions.id],
  }),
}));
