import {
  getQuestionById,
  getQuestionsByCategory,
  postQuestion,
} from "@/services/questionService";
import { Question } from "@/types/question.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useQuestionsByCategory(category: string) {
  return useQuery({
    queryKey: ["questions", category],
    queryFn: () => getQuestionsByCategory(category),
    enabled: !!category,
  });
}

export function useQuestionById(category: string, id: string) {
  const queryClient = useQueryClient();
  const cachedQuestion = queryClient
    .getQueryData<Question[]>(["questions", category])
    ?.find((q) => q.id === id);

  return useQuery({
    queryKey: ["questions", id],
    queryFn: () => {
      if (cachedQuestion) {
        return cachedQuestion;
      }

      return getQuestionById(id);
    },
    enabled: !!id,
    staleTime: Infinity,
  });
}

export function useCreateQuestionMutate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
  });
}
