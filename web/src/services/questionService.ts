"use server";

import { api } from "@/lib/axios";

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
