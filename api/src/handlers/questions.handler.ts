import { AddQuestionDTO } from "../dtos/questions";
import questionsRepository from "../repositories/questions.repository";

export async function findAll() {
  return await questionsRepository.findAll();
}

export async function findById(id: string) {
  const question = await questionsRepository.findById(id);

  if (!question) {
    throw new Error("Questão não encontrada");
  }

  return question;
}

export async function add(data: AddQuestionDTO) {
  return await questionsRepository.add(data);
}

export async function deleteById(id: string) {
  return await questionsRepository.deleteById(id);
}
