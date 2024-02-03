import { mockCategories } from "@/mocks/categories.mock";
import CategoryCard from "./CategoryCard";

export default function Category() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-14 text-3xl font-bold">DevQuestion</h1>

      <h1 className="font-mediu mb-3 text-lg">Escolha uma categoria abaixo!</h1>
      <div className="grid grid-cols-4 gap-10">
        {mockCategories.map((category) => (
          <CategoryCard key={category.id} variant={category.name}>
            <category.icon size={38} />
            {category.name}
          </CategoryCard>
        ))}
      </div>
    </div>
  );
}