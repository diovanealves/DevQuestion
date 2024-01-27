import { AddCategoryDTO } from "../dtos/categories";
import categoriesRepository from "../repositories/categories.repository";

class categoriesHandler {
  async findAll() {
    return await categoriesRepository.findAll();
  }

  async findById(id: string) {
    const category = await categoriesRepository.findById(id);

    if (!category) {
      throw new Error("Category Not Found");
    }

    return category;
  }

  async add(data: AddCategoryDTO) {
    return await categoriesRepository.add(data);
  }

  async deleteById(id: string) {
    await this.findById(id);

    return await categoriesRepository.deleteById(id);
  }
}

export default new categoriesHandler();
