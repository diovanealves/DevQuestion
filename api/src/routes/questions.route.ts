import { Elysia, t } from "elysia";
import questionsHandler from "../handlers/questions.handler";
import { nameCategoryEnum } from "./categories.route";

export const questionsRoutes = (app: Elysia) => (
  app.get("/question", async () => {
    return questionsHandler.findAll();
  }),
  app.get("/question/:id", async ({ params }) => {
    return questionsHandler.findById(params.id);
  }),
  app.get(
    "/category/question",
    async ({ query }) => {
      return questionsHandler.findQuestionByCategory(query);
    },
    {
      query: t.Object({
        category: nameCategoryEnum,
      }),
    }
  ),
  app.post(
    "/question",
    async ({ body }) => {
      return questionsHandler.add(body);
    },
    {
      body: t.Object({
        title: t.String(),
        description: t.String(),
      }),
    }
  ),
  app.delete("/question/:id", async ({ params }) => {
    return questionsHandler.deleteById(params.id);
  })
);
