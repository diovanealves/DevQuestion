import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { categories } from "../db/schema";
import { AddCategoryDTO } from "../dtos/categories";

class categoriesRepository {
  async findAll() {
    return await db.select().from(categories);
  }

  async findById(id: string) {
    return await db.query.categories.findFirst({
      where: eq(categories.id, id),
    });
  }

  async add(data: AddCategoryDTO) {
    return await db
      .insert(categories)
      .values({ name: data.name })
      .returning({ id: categories.id, name: categories.name });
  }

  async deleteById(id: string) {
    return await db
      .delete(categories)
      .where(eq(categories.id, id))
      .returning({ id: categories.id });
  }
}

export default new categoriesRepository();
