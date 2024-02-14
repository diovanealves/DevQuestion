import Link from "next/link";
import { FC, ReactNode, memo } from "react";
import { VariantProps, tv } from "tailwind-variants";

interface CategoryCardProps extends VariantProps<typeof cardVariant> {
  variant: "Front-End" | "Back-End" | "Mobile" | "DevOps" | undefined;
  children: ReactNode;
}

const cardVariant = tv({
  base: "flex h-24 cursor-pointer items-center justify-between gap-6 rounded-lg px-6 py-5 text-white transition-all hover:scale-105 hover:opacity-85",
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
