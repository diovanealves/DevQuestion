import { db } from "../db/connection";
import { answers } from "../db/schema";
import { AddAnswersDTO } from "../dtos/answers/AddAnswers.dto";

class answersRepository {
  async add(data: AddAnswersDTO) {
    return await db
      .insert(answers)
      .values({ text: data.text, questionId: data.questionId });
  }
}

export default new answersRepository();
