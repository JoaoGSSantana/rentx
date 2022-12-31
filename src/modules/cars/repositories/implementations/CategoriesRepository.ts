import { Category } from "../../model/Category";
import {
    ICategoriesRepository,
    ICategoriesRepositoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new CategoriesRepository();
        }

        return this.INSTANCE;
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }

    list(): Category[] {
        return this.categories;
    }

    create({ name, description }: ICategoriesRepositoryDTO): void {
        const category = new Category();

        Object.assign(category, { name, description, created_at: new Date() });

        this.categories.push(category);
    }
}

export { CategoriesRepository };
