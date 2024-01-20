import Elysia, { t } from "elysia";
import { add } from "../handlers/answers.handler";

export const answersRoutes = (app: Elysia) =>
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
  );
