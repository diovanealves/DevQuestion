import { formatDistanceToNow, isAfter, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function formatDate(date: Date): string {
  const currentDate = new Date();

  if (isAfter(currentDate, subDays(date, 1))) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      includeSeconds: true,
      locale: ptBR,
    });
  }
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
}
