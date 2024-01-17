import { Elysia } from "elysia";
import { questionsRoutes } from "./routes/questions.route";

new Elysia()
  .use(questionsRoutes)
  .listen(3001, () => console.log("Server started at port 3001"));
