"use client";

import Loading from "@/components/Loading";
import { useQuestionsByCategory } from "@/hooks/useQuestions";
import { Question } from "@/types/question.types";
import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import QuestionCard from "./QuestionCard";

export default function Category() {
  const category = useSearchParams().get("category") as string;

  const isValidCategory = [
    "Front-End",
    "Back-End",
    "Mobile",
    "DevOps",
  ].includes(category);
  if (!isValidCategory) {
    redirect("/");
  }

  const { data, isLoading, isError } = useQuestionsByCategory(category);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex items-center gap-3 border-b border-slate-400 border-opacity-35 px-3 py-4">
        <Link href="/" className="flex items-center gap-1">
          <Home strokeWidth="2" />
          <h1 className="font-medium">Home</h1>
        </Link>
        <ArrowRight width={16} />
        <h1 className="font-bold">{category}</h1>
      </div>

      <div className="px-3 py-8">
        <h1 className="text-2xl font-bold">Perguntas sobre {category}</h1>
        <p className="mb-5 text-sm opacity-75">
          Todas as perguntas relacionadas na plataforma
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.length > 0 ? (
            data.map((question: Question) => (
              <QuestionCard key={question.id} {...question} />
            ))
          ) : (
            <div>
              Não há questões nessa categoria no momento. Que tal começar a
              fazer uma pergunta?
            </div>
          )}
        </div>

        <div className="mt-10 space-y-2 text-center">
          <p>Não encontrou a resposta que procura? Faça sua pergunta</p>
          <button className="rounded-md border-2 border-slate-400 px-3 py-2 font-medium hover:bg-slate-400 hover:text-white">
            Faça uma pergunta
          </button>
        </div>
      </div>
    </>
  );
}
