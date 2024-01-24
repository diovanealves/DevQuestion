import { db } from "../db/connection";
import { categories } from "../db/schema";

class categoriesRepository {
  async findAll() {
    return await db.select().from(categories);
  }
}

export default new categoriesRepository();
