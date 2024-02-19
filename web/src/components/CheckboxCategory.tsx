import { ReactNode, memo } from "react";
import { tv } from "tailwind-variants";

interface CheckboxCategoryProps {
  id: number;
  selectedId: number | null;
  variant: "Front-End" | "Back-End" | "Mobile" | "DevOps" | undefined;
  children: ReactNode;
  onChange: (id: number) => void;
}

export const CheckBoxCategory = memo(function Checkbox({
  children,
  variant,
  id,
  selectedId,
  onChange,
}: CheckboxCategoryProps) {
  const checkboxVariant = tv({
    base: `flex h-24 cursor-pointer items-center justify-between gap-6 rounded-lg px-6 py-5 text-white transition-all hover:scale-105 hover:opacity-85 ${selectedId === id ? "opacity-100" : "opacity-40"}`,
    variants: {
      backgroundColor: {
        "Front-End": "bg-categoryCard-Web",
        "Back-End": "bg-categoryCard-Back",
        Mobile: "bg-categoryCard-Mobile",
        DevOps: "bg-categoryCard-DevOps",
      },
    },
  });

  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={id === selectedId}
        onChange={() => onChange(id)}
      />
      <div
        className={checkboxVariant({
          backgroundColor: variant,
        })}
      >
        {children}
      </div>
    </label>
  );
});
