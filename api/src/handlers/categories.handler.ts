import categoriesRepository from "../repositories/categories.repository";

class categoriesHandler {
  async findAll() {
    return await categoriesRepository.findAll();
  }
}

export default new categoriesHandler();
