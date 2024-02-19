"use client";

import { useCreateQuestionMutate } from "@/hooks/useQuestions";
import { mockCategories } from "@/mocks/categories.mock";
import { CreateQuestion } from "@/types/question.types";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CheckBoxCategory } from "./CheckboxCategory";

const FormContent = memo(function FormContent({
  category,
}: {
  category: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CreateQuestion>({ defaultValues: { category } });
  const { mutate, isSuccess } = useCreateQuestionMutate();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  function onSubmit(data: CreateQuestion) {
    mutate(data);
    reset({ title: "", description: "", category });
  }

  useEffect(() => {
    setIsOpen(false);
  }, [isSuccess]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="rounded-md border-2 border-slate-400 px-3 py-2 font-medium hover:bg-slate-400 hover:text-white">
          Faça uma pergunta
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 backdrop-blur-md" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-11/12 max-w-lg  -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-slate-900 bg-white p-5">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-medium leading-relaxed">
              Adicionar nova questão
            </Dialog.Title>
            <Dialog.Close className="rounded-lg text-black hover:text-slate-800 focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800">
              <X size={23} aria-label="Fechar" />
            </Dialog.Close>
          </div>
          <form className="my-3 flex flex-col gap-2">
            <label htmlFor="title">
              <h1>Título</h1>
              <input
                type="text"
                id="title"
                placeholder="Digite o título"
                className={`w-full rounded-lg border-2 border-black px-1 py-1 ${errors.title && "border-red-500 transition-colors"}`}
                {...register("title", { required: true })}
                autoFocus
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">
                  Título é obrigatório
                </p>
              )}
            </label>
            <label htmlFor="description">
              <h1>Descrição</h1>
              <textarea
                id="description"
                placeholder="Digite a descrição"
                className={`h-36 w-full resize-none rounded-lg border-2 border-black px-1 py-1 ${errors.description && "border-red-500 transition-colors"}`}
                {...register("description", { required: true })}
                autoFocus
              />
              {errors.description && (
                <p className="text-sm text-red-500">Descrição é obrigatório</p>
              )}
            </label>
            {!category && (
              <div className="grid grid-cols-2 gap-3">
                {mockCategories.map((category) => (
                  <CheckBoxCategory
                    key={category.id}
                    id={category.id}
                    selectedId={selectedCategory}
                    variant={category.name}
                    onChange={() => {
                      setValue("category", category.name);
                      setSelectedCategory(category.id);
                    }}
                  >
                    <category.icon size={34} />
                    <div className="w-28">
                      <h1 className="mb-1 text-lg font-black">
                        {category.name}
                      </h1>
                    </div>
                  </CheckBoxCategory>
                ))}
              </div>
            )}
          </form>
          <Dialog.Close asChild>
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="w-full rounded-lg border-2 bg-black py-3 font-semibold text-white hover:border-black hover:bg-white hover:text-black"
            >
              Adicionar Questão
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

export default FormContent;
