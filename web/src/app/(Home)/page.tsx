import CategoryCard from "@/components/CategoryCard";
import { mockCategories } from "@/mocks/categories.mock";

export default function Category() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-2">
      <h1 className="text-4xl font-black">DevQuestion</h1>
      <p className="mb-6 mt-2 text-sm opacity-75">
        Pergunte, Responda e Aprenda.
      </p>

      <h1 className="mb-3 text-center text-lg font-medium">
        Selecione uma categoria para publicar a sua pergunta!
      </h1>
      <div className="grid w-11/12 max-w-4xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-3">
        {mockCategories.map((category) => (
          <CategoryCard key={category.id} variant={category.name}>
            <category.icon size={34} />
            <div className="w-80">
              <h1 className="mb-1 text-xl font-black">{category.name}</h1>
              <p className="text-sm opacity-85">{category.description}</p>
            </div>
          </CategoryCard>
        ))}
      </div>
    </div>
  );
}
