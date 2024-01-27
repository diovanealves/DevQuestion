import { Elysia, t } from "elysia";
import categoriesHandler from "../handlers/categories.handler";

const nameCategoryEnum = t.Enum({
  "Front-End": "Front-End",
  "Back-End": "Back-End",
  Mobile: "Mobile",
});

export const categoriesRoutes = (app: Elysia) => (
  app.get("/category", async () => {
    return await categoriesHandler.findAll();
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
  )
);
