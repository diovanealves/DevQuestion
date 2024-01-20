import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { answers } from "../db/schema";
import { AddAnswersDTO } from "../dtos/answers/AddAnswers.dto";

class answersRepository {
  async add(data: AddAnswersDTO) {
    return await db
      .insert(answers)
      .values({ text: data.text, questionId: data.questionId });
  }

  async delete(id: string) {
    return await db.delete(answers).where(eq(answers.id, id));
  }
}

export default new answersRepository();
