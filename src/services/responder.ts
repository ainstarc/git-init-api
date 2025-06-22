import { classifyQuery } from "../utils/classifyQuery";
import { QueryResult } from "../types";

export async function getGitResponse(query: string): Promise<QueryResult> {
  const type = classifyQuery(query);
  console.log("📊 Query Type:", type);

  // Placeholder mock response
  return {
    command: "git status",
    description: "Show the working tree status",
    source: "mock",
    type: type,
  };
}
