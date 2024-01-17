import { db } from "../db/connection";
import { questions } from "../db/schema";

export async function findAll() {
  return await db.select().from(questions);
}
