import { Question } from "@/types/question.types";

export default function QuestionCard(props: Question) {
  return <div>{props.title}</div>;
}
