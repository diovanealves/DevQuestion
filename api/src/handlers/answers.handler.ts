import answersRepository from "../repositories/answers.repository";
import questionsHandler from "./questions.handler";

class answersHandler {
  async findById(id: string) {
    const answer = await answersRepository.findById(id);

    if (!answer) {
      throw new Error("Answer Not Found");
    }

    return answer;
  }

  async add(questionId: string, text: string) {
    await questionsHandler.findById(questionId);

    return await answersRepository.add(questionId, text);
  }

  async delete(id: string) {
    await this.findById(id);

    return await answersRepository.delete(id);
  }
}

export default new answersHandler();
