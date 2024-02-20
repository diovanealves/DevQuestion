import formatDate from "@/lib/formatDate";
import { UserCircle } from "lucide-react";

export default function AnswersCard({
  text,
  date,
}: {
  date: Date;
  text: string;
}) {
  return (
    <div className="my-3 border-b-2 p-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <UserCircle size={28} />
        </div>
        {date && <p>{formatDate(date)}</p>}
      </div>
      <p className="text-md mt-2 leading-relaxed">{text}</p>
    </div>
  );
}
