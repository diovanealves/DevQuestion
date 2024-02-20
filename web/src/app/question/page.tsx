"use client";

import Loading from "@/components/Loading";
import { useQuestionById } from "@/hooks/useQuestions";
import formatDate from "@/lib/formatDate";
import { ArrowLeft, UserCircle } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import AnswersCard from "./AnswersCard";

export default function Question() {
  const params = useSearchParams();
  const category = params.get("category");
  const questionId = params.get("questionId");

  if (!questionId || !category) {
    redirect("/");
  }

  const { data, isLoading, isError } = useQuestionById(category, questionId);

  if (isError) {
    redirect(`/category?category=${category}`);
  }

  if (isLoading) return <Loading />;

  return (
    <div className="p-5">
      <Link
        href={`/category?category=${category}`}
        className="mb-4 flex items-center gap-1"
      >
        <ArrowLeft size={24} />
        Voltar
      </Link>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <UserCircle size={28} />
          Usuário Anônimo.
        </div>
        {data?.createdAt && <p>{formatDate(data?.createdAt)}</p>}
      </div>
      <h1 className="mb-2 text-xl font-bold leading-tight">{data?.title}</h1>
      <p className="mb-3 leading-relaxed">{data?.description}</p>
      <hr />
      {data?.answers.map((answers) => (
        <AnswersCard
          key={answers.id}
          text={answers.text}
          date={answers.createdAt}
        />
      ))}
    </div>
  );
}
