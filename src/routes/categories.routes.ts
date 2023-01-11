import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoriesController } from "../modules/cars/useCases/importCategories/ImportCategoriesController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoute = Router();
const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();
const listCategoriesController = new ListCategoriesController();

categoriesRoute.post("/", createCategoryController.handle);

categoriesRoute.get("/", listCategoriesController.handle);

categoriesRoute.post(
    "/import",
    upload.single("file"),
    importCategoriesController.handle
);

export { categoriesRoute };
