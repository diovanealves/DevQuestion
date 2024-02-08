"use client";

import { useQuestionsByCategory } from "@/hooks/useQuestions";
import { Question } from "@/types/question.types";
import { redirect, useSearchParams } from "next/navigation";
import QuestionCard from "./QuestionCard";

export default function Category() {
  const category = useSearchParams().get("category");

  if (!category) {
    redirect("/");
  }

  const { data, isLoading, isError } = useQuestionsByCategory(category);

  if (isLoading) return <div>...Carregando</div>;

  return (
    <div className="pl-4 pt-6">
      <h1 className="text-2xl font-bold leading-relaxed">
        Perguntas sobre {category}
      </h1>

      {data.length > 0 ? (
        data.map((question: Question) => (
          <QuestionCard key={question.id} {...question} />
        ))
      ) : (
        <div className="mt-10">
          Não há questões nessa categoria no momento. Que tal começar a fazer
          uma pergunta?
        </div>
      )}
    </div>
  );
}
