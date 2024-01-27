import { AddCategoryDTO } from "../dtos/categories";
import categoriesRepository from "../repositories/categories.repository";

class categoriesHandler {
  async findAll() {
    return await categoriesRepository.findAll();
  }

  async add(data: AddCategoryDTO) {
    return await categoriesRepository.add(data);
  }
}

export default new categoriesHandler();
