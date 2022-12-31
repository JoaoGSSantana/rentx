import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoriesController } from "../modules/cars/useCases/importCategories";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoute = Router();
const upload = multer({
    dest: "./tmp",
});

categoriesRoute.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoute.get("/", (_, response) => {
    return listCategoriesController.handle(response);
});

categoriesRoute.post("/import", upload.single("file"), (request, response) => {
    return importCategoriesController.handle(request, response);
});

export { categoriesRoute };
