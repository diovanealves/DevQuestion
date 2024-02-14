import {
  getQuestionById,
  getQuestionsByCategory,
} from "@/services/questionService";
import { useQuery } from "@tanstack/react-query";

export function useQuestionsByCategory(category: string) {
  return useQuery({
    queryKey: ["questions", category],
    queryFn: () => getQuestionsByCategory(category),
  });
}

export function useQuestionById(id: string) {
  return useQuery({
    queryKey: ["questions", id],
    queryFn: () => getQuestionById(id),
  });
}
