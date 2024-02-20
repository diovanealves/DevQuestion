"use server";

import { api } from "@/lib/axios";
import { CreateAnswer, CreateQuestion } from "@/types/question.types";

export async function getQuestionsByCategory(category: string) {
  try {
    const response = await api.get(`/category/question?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error("Error when searching for questions by category");
  }
}

export async function getQuestionById(id: string) {
  try {
    const response = await api.get(`/question/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error when searching for question");
  }
}

export async function getAnswersByQuestion(questionId: string) {
  try {
    const response = await api.get(`/answers/question/${questionId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error when searching for an answer to a question");
  }
}

export async function createQuestion(data: CreateQuestion) {
  try {
    const response = await api.post(`/question`, {
      title: data.title,
      description: data.description,
      category: data.category,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error when create for question");
  }
}

export async function createAnswers(data: CreateAnswer) {
  try {
    const response = await api.post(`/answer/${data.questionId}`, {
      text: data.text,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error when create for Answers");
  }
}
