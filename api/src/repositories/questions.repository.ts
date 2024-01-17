import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { questions } from "../db/schema";

class QuestionsRepository {
  async findAll() {
    return await db.select().from(questions);
  }

  async findById(id: number) {
    return await db.query.questions.findFirst({
      where: eq(questions.id, id),
    });
  }
}

export default new QuestionsRepository();
