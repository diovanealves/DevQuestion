import Elysia from "elysia";
import categoriesHandler from "../handlers/categories.handler";

export const categoriesRoutes = (app: Elysia) =>
  app.get("/category", async () => {
    return await categoriesHandler.findAll();
  });
