import { Category } from "../entities/Category";

interface ICategoriesRepositoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICategoriesRepositoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICategoriesRepositoryDTO };
