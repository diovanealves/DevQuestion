import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { answersRoutes } from "./routes/answers.route";
import { questionsRoutes } from "./routes/questions.route";

new Elysia()
  .use(swagger())
  .use(questionsRoutes)
  .use(answersRoutes)
  .listen(3001, () => console.log("Server started at port 3001"));
