"use client";

import Loading from "@/components/Loading";
import { useQuestionsByCategory } from "@/hooks/useQuestions";
import { Question } from "@/types/question.types";
import { redirect, useSearchParams } from "next/navigation";
import QuestionCard from "./QuestionCard";

export default function Category() {
  const category = useSearchParams().get("category") as string;

  const isValid = ["Front-End", "Back-End", "Mobile", "DevOps"].includes(
    category,
  );
  if (!isValid) {
    redirect("/");
  }

  const { data, isLoading, isError } = useQuestionsByCategory(category);

  if (isLoading) return <Loading />;

  return (
    <div className="px-4 pt-6">
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
