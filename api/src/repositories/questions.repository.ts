import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { questions } from "../db/schema";
import { AddQuestionDTO } from "../dtos/questions";
import { FindByCategory } from "../dtos/questions/findByCategory.dto";

class QuestionsRepository {
  async findAll() {
    return await db.query.questions.findMany({
      orderBy: (questions, { desc }) => [desc(questions.createdAt)],
    });
  }

  async findById(id: string) {
    return await db.query.questions.findFirst({
      where: eq(questions.id, id),
      with: { answers: true },
    });
  }

  async findQuestionByCategory(data: FindByCategory) {
    return await db.query.questions.findMany({
      where: eq(questions.categoriesname, data.category),
    });
  }

  async add(data: AddQuestionDTO) {
    return await db
      .insert(questions)
      .values({
        title: data.title,
        description: data.description,
      })
      .returning();
  }

  async deleteById(id: string) {
    return await db
      .delete(questions)
      .where(eq(questions.id, id))
      .returning({ id: questions.id });
  }
}

export default new QuestionsRepository();
