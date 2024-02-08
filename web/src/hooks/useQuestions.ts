import { getQuestionsByCategory } from "@/services/questionService";
import { useQuery } from "@tanstack/react-query";

export function useQuestionsByCategory(category: string) {
  return useQuery({
    queryKey: ["questions", category],
    queryFn: () => getQuestionsByCategory(category),
  });
}
