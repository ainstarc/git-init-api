import { QueryResult } from "../types"

export async function getGitResponse(query: string): Promise<QueryResult> {
  // TODO: Replace with actual AI/doc lookup logic
  return {
    command: "git status",
    description: "Show the working tree status",
    source: "mock-ai"
  }
}
