import { Question } from "@/types/question.types";
import { Forward } from "lucide-react";
import Link from "next/link";

export default function QuestionCard(props: Question) {
  return (
    <div className="mt-6 flex items-center justify-between rounded-lg border-2 border-gray-500 px-5 py-4">
      <div>
        <h1 className="text-xl font-bold leading-tight">{props.title}</h1>
        <p className="mt-2 text-sm opacity-85">{props.description}</p>
      </div>
      <Link
        href="#"
        className="hover:text-slate-5000 rounded-lg border-2 border-slate-500 bg-slate-500 p-2 text-white  transition-colors hover:border-slate-500 hover:bg-white hover:text-slate-500"
      >
        <Forward size={36} />
      </Link>
    </div>
  );
}
