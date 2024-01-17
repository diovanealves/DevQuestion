import { Elysia } from "elysia";
import { findAll } from "../handlers/questions.handler";

export const questionsRoutes = (app: Elysia) =>
  app.get("/question", async () => {
    const result = findAll();
    return result;
  });
