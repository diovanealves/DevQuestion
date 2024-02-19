import Elysia, { t } from "elysia";
import answersHandler from "../handlers/answers.handler";

export const answersRoutes = (app: Elysia) => (
  app.get("/answers/:id", async ({ params }) => {
    return answersHandler.findById(params.id);
  }),
  app.get(
    "/answers/question/:questionId",
    async ({ params }) => {
      return answersHandler.findAnswersByQuestion(params.questionId);
    },
    {
      params: t.Object({
        questionId: t.String(),
      }),
    }
  ),
  app.post(
    "/answer/:id",
    async ({ params, body }) => {
      return answersHandler.add(params.id, body.text);
    },
    {
      body: t.Object({
        text: t.String(),
      }),
    }
  ),
  app.delete("/answer/:id", async ({ params }) => {
    return await answersHandler.delete(params.id);
  })
);
