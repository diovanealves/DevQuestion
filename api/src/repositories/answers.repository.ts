import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { answers } from "../db/schema";
import { AddAnswersDTO } from "../dtos/answers/AddAnswers.dto";

class answersRepository {
  async findById(id: string) {
    return await db.query.answers.findFirst({
      where: eq(answers.id, id),
    });
  }

  async add(data: AddAnswersDTO) {
    return await db
      .insert(answers)
      .values({ text: data.text, questionId: data.questionId })
      .returning({
        id: answers.id,
        text: answers.text,
        likes: answers.likes,
        questionId: answers.questionId,
      });
  }

  async delete(id: string) {
    return await db
      .delete(answers)
      .where(eq(answers.id, id))
      .returning({ id: answers.id });
  }
}

export default new answersRepository();
