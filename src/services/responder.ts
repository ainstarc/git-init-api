import { classifyQuery } from "../utils/classifyQuery";
import { QueryResult, classification } from "../types";

export async function getGitResponse(query: string): Promise<QueryResult> {
  const { classification: queryClass } = classifyQuery(query);

  console.log("📊 Query Type:", queryClass.type);

  // Placeholder mock response
  return {
    command: "git status",
    description: "Show the working tree status",
    source: "mock",
    type: queryClass.type,
  };
}
