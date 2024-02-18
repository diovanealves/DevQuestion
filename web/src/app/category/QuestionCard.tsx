import { Question } from "@/types/question.types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const QuestionCard = memo(function Card(props: Question) {
  return (
    <div className="flex h-32 flex-col justify-between rounded-lg border border-slate-400 border-opacity-60 px-3 py-3">
      <div>
        <h1 className="text-xl font-semibold leading-relaxed">{props.title}</h1>
        <p className="text-sm opacity-65">{props.description.slice(0, 50)}..</p>
      </div>
      <Link
        href={`/question?category=${props.categoriesname}&questionId=${props.id}`}
        className="flex w-28 items-center rounded-md border border-slate-400 px-2 hover:scale-105"
      >
        Visualizar
        <ChevronRight size={20} />
      </Link>
    </div>
  );
});

export default QuestionCard;
