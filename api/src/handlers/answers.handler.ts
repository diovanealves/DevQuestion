import { AddAnswersDTO } from "../dtos/answers/AddAnswers.dto";
import answersRepository from "../repositories/answers.repository";
import { findById } from "./questions.handler";

export async function add(data: AddAnswersDTO) {
  await findById(data.questionId);

  return await answersRepository.add(data);
}
