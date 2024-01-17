import { Elysia } from "elysia";
import { findAll, findById } from "../handlers/questions.handler";

export const questionsRoutes = (app: Elysia) => (
  app.get("/question", async () => {
    return findAll();
  }),
  app.get("/question/:id", async ({ params }) => {
    return findById(parseInt(params.id));
  })
);
