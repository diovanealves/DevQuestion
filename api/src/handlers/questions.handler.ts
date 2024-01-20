import questionsRepository from "../repositories/questions.repository";
import { AddQuestionDTO } from "./../dtos/questions/AddQuestion.dto";

class questionsHandler {
  async findAll() {
    return await questionsRepository.findAll();
  }

  async findById(id: string) {
    const question = await questionsRepository.findById(id);

    if (!question) {
      throw new Error("Question Not Found");
    }

    return question;
  }

  async add(data: AddQuestionDTO) {
    return await questionsRepository.add(data);
  }

  async deleteById(id: string) {
    await this.findById(id);

    return await questionsRepository.deleteById(id);
  }
}

export default new questionsHandler();
