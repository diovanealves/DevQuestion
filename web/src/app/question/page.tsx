"use client";

import Loading from "@/components/Loading";
import { useQuestionById } from "@/hooks/useQuestions";
import { redirect, useSearchParams } from "next/navigation";

export default function Question() {
  const params = useSearchParams();
  const category = params.get("category");
  const questionId = params.get("questionId");

  if (!questionId || !category) {
    redirect("/");
  }

  const { data, isLoading } = useQuestionById(category, questionId);

  if (isLoading) return <Loading />;

  return <div>{data?.title}</div>;
}
