import questionsRepository from "../repositories/questions.repository";

export async function findAll() {
  return await questionsRepository.findAll();
}

export async function findById(id: number) {
  const question = await questionsRepository.findById(id);

  if (!question) {
    throw new Error("Questão não encontrada");
  }

  return question;
}
