import Elysia, { t } from "elysia";
import { add, deleteById } from "../handlers/answers.handler";

export const answersRoutes = (app: Elysia) => (
  app.post(
    "/answers",
    async ({ body }) => {
      await add(body);
      return {
        response: "Created Successfully",
      };
    },
    {
      body: t.Object({
        text: t.String(),
        questionId: t.String(),
      }),
    }
  ),
  app.delete("/answers/:id", async ({ params }) => {
    await deleteById(params.id);
    return {
      response: "Deleted Successfully",
    };
  })
);
