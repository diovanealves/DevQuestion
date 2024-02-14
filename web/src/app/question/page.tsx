"use client";

import Loading from "@/components/Loading";
import { useQuestionById } from "@/hooks/useQuestions";
import { redirect, useSearchParams } from "next/navigation";

export default function Question() {
  const questionId = useSearchParams().get("questionId");

  if (!questionId) {
    redirect("/");
  }

  const { data, isLoading } = useQuestionById(questionId);

  if (isLoading) return <Loading />;

  return <div>{data?.title}</div>;
}
