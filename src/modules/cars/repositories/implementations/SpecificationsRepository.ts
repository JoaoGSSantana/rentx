import { Specification } from "../../model/Specification";
import {
    ISpecificationsRepository,
    ISpecificationsRepositoryDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new SpecificationsRepository();
        }

        return this.INSTANCE;
    }

    create({ name, description }: ISpecificationsRepositoryDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}

export { SpecificationsRepository };
