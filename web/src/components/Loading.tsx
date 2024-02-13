import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 size={42} className="animate-spin" />
    </div>
  );
}
