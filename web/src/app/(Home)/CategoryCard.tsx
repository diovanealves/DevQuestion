import Link from "next/link";
import { FC, ReactNode, memo } from "react";
import { VariantProps, tv } from "tailwind-variants";

interface CategoryCardProps extends VariantProps<typeof cardVariant> {
  variant: "Front-End" | "Back-End" | "Mobile" | "DevOps" | undefined;
  children: ReactNode;
}

const cardVariant = tv({
  base: "flex flex-col items-center justify-center gap-2 rounded-lg px-6 py-5 text-center text-lg font-bold text-white cursor-pointer hover:scale-110 hover:opacity-75 transition-colors",
  variants: {
    backgroundColor: {
      "Front-End": "bg-categoryCard-Web",
      "Back-End": "bg-categoryCard-Back",
      Mobile: "bg-categoryCard-Mobile",
      DevOps: "bg-categoryCard-DevOps",
    },
  },
});

const CategoryCard: FC<CategoryCardProps> = memo(function Card({
  children,
  variant,
  ...rest
}) {
  return (
    <Link
      className={cardVariant({ backgroundColor: variant })}
      {...rest}
      href={`/category?category=${variant}`}
    >
      {children}
    </Link>
  );
});

export default CategoryCard;
