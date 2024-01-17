import { Elysia, t } from "elysia";
import {
  add,
  deleteById,
  findAll,
  findById,
} from "../handlers/questions.handler";

export const questionsRoutes = (app: Elysia) => (
  app.get("/question", async () => {
    return findAll();
  }),
  app.get("/question/:id", async ({ params }) => {
    return findById(parseInt(params.id));
  }),
  app.post(
    "/question",
    async ({ body }) => {
      await add(body);
      return {
        response: "Created Successfully",
      };
    },
    {
      body: t.Object({
        title: t.String(),
        description: t.String(),
      }),
    }
  ),
  app.delete("/question/:id", async ({ params }) => {
    await deleteById(parseInt(params.id));
    return {
      response: "Deleted Successfully",
    };
  })
);
