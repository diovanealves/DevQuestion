"use client";

import Loading from "@/components/Loading";
import {
  useCreateAnswersByQuestionMutate,
  useQuestionById,
} from "@/hooks/useQuestions";
import formatDate from "@/lib/formatDate";
import { CreateAnswer } from "@/types/question.types";
import { ArrowLeft, UserCircle } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import AnswersCard from "./AnswersCard";

export default function Question() {
  const params = useSearchParams();
  const category = params.get("category");
  const questionId = params.get("questionId");

  if (!questionId || !category) {
    redirect("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateAnswer>({ defaultValues: { questionId } });

  const { data, isLoading, isError } = useQuestionById(category, questionId);
  const { mutate } = useCreateAnswersByQuestionMutate();

  if (isError) {
    redirect(`/category?category=${category}`);
  }

  if (isLoading) return <Loading />;

  function onSubmit(data: CreateAnswer) {
    mutate(data);
    reset({ text: "", questionId });
  }

  console.log(data);

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

      <label
        htmlFor="answer"
        className="my-3 flex flex-col gap-2 border-y-2 py-2"
      >
        <h1 className="text-center font-bold leading-tight">
          O que você acha disso?
        </h1>
        <textarea
          id="answer"
          className={`h-32 w-full resize-none rounded-lg border-2 border-black px-1 py-1 text-black ${errors.text && "border-red-500 transition-colors"}`}
          {...register("text", { required: true })}
          autoFocus
        />
        {errors.text && (
          <p className="text-md text-red-500">O campo resposta e obrigátorio</p>
        )}
        <button
          type="button"
          className={`rounded-lg border-2 border-black bg-black py-2 font-bold text-white transition-colors hover:border-black hover:bg-white hover:text-black ${errors.text && "cursor-not-allowed border-red-500 bg-red-500 transition-colors"}`}
          onClick={handleSubmit(onSubmit)}
        >
          Responder
        </button>
      </label>

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
