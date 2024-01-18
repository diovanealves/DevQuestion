import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { questions } from "../db/schema";
import { AddQuestionDTO } from "../dtos/questions";

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

  async add(data: AddQuestionDTO) {
    return await db
      .insert(questions)
      .values({ title: data.title, description: data.description });
  }

  async deleteById(id: string) {
    return await db.delete(questions).where(eq(questions.id, id));
  }
}

export default new QuestionsRepository();
