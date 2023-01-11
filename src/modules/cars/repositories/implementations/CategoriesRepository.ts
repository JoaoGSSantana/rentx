import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
    ICategoriesRepository,
    ICategoriesRepositoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({
            where: {
                name,
            },
        });

        return category;
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();

        return categories;
    }

    async create({
        name,
        description,
    }: ICategoriesRepositoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }
}

export { CategoriesRepository };
