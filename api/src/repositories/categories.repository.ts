import { db } from "../db/connection";
import { categories } from "../db/schema";
import { AddCategoryDTO } from "../dtos/categories";

class categoriesRepository {
  async findAll() {
    return await db.select().from(categories);
  }

  async add(data: AddCategoryDTO) {
    return await db
      .insert(categories)
      .values({ name: data.name })
      .returning({ id: categories.id, name: categories.name });
  }
}

export default new categoriesRepository();
