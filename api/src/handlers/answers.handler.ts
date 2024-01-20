import { AddAnswersDTO } from "../dtos/answers/AddAnswers.dto";
import answersRepository from "../repositories/answers.repository";
import { findById } from "./questions.handler";

export async function getById(id: string) {
  const answers = await answersRepository.findById(id);

  if (!answers) {
    throw new Error("Resposta não encontrada");
  }

  return answers;
}

export async function add(data: AddAnswersDTO) {
  await findById(data.questionId);

  return await answersRepository.add(data);
}

export async function deleteById(id: string) {
  return await answersRepository.delete(id);
}
