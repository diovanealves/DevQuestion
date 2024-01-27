import { Elysia, t } from "elysia";
import categoriesHandler from "../handlers/categories.handler";

export const nameCategoryEnum = t.Enum({
  "Front-End": "Front-End",
  "Back-End": "Back-End",
  "Mobile": "Mobile",
});

export const categoriesRoutes = (app: Elysia) => (
  app.get("/category", async () => {
    return await categoriesHandler.findAll();
  }),
  app.get("/category/:id", async ({ params }) => {
    return await categoriesHandler.findById(params.id);
  }),
  app.post(
    "/category",
    async ({ body }) => {
      return await categoriesHandler.add(body);
    },
    {
      body: t.Object({
        name: nameCategoryEnum,
      }),
    }
  ),
  app.delete("/category/:id", async ({ params }) => {
    return await categoriesHandler.deleteById(params.id);
  })
);
