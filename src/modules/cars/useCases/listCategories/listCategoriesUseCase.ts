import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    execute(): Category[] {
        return this.categoryRepository.list();
    }
}

export { ListCategoriesUseCase };
