import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { answers } from "../db/schema";

class answersRepository {
  async findById(id: string) {
    return await db.query.answers.findFirst({
      where: eq(answers.id, id),
    });
  }

  async add(questionId: string, text: string) {
    return await db.insert(answers).values({ text, questionId }).returning();
  }

  async delete(id: string) {
    return await db
      .delete(answers)
      .where(eq(answers.id, id))
      .returning({ id: answers.id });
  }
}

export default new answersRepository();
