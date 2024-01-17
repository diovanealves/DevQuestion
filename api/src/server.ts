import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { questionsRoutes } from "./routes/questions.route";

new Elysia()
  .use(swagger())
  .use(questionsRoutes)
  .listen(3001, () => console.log("Server started at port 3001"));
