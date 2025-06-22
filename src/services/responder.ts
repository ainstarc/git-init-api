import { classifyQuery } from "../utils/classifyQuery";
import { QueryResult, classification } from "../types";
import { handleQuery } from "../handlers/handleQuery";

export async function getGitResponse(query: string): Promise<QueryResult> {
  const { classification: queryClass } = classifyQuery(query);
  const response = await handleQuery(queryClass, query);

  console.log("📊 Query Type:", queryClass.type);

  return response;
}
