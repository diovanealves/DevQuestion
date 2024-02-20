import {
  getAnswersByQuestion,
  getQuestionById,
  getQuestionsByCategory,
  postQuestion,
} from "@/services/questionService";
import { Answers, Question, QuestionAndAnswers } from "@/types/question.types";
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

  return useQuery<QuestionAndAnswers>({
    queryKey: ["questions", id],
    queryFn: async () => {
      const cachedQuestion = queryClient
        .getQueryData<Question[]>(["questions", category])
        ?.find((q) => q.id === id);

      const cachedAnswers = queryClient
        .getQueryData<Answers[]>(["answers", id])
        ?.find((a) => a.questionId === id);

      const question =
        cachedQuestion && cachedAnswers
          ? {
              ...cachedQuestion,
              answers: cachedAnswers || (await getAnswersByQuestion(id)),
            }
          : await getQuestionById(id);

      return question;
    },
    enabled: !!id,
    staleTime: Infinity,
  });
}

export function useAnswersByQuestion(questionId: string) {
  return useQuery({
    queryKey: ["answers", questionId],
    queryFn: () => getAnswersByQuestion(questionId),
    enabled: !!questionId,
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
