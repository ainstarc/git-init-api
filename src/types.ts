export interface QueryResult {
  command: string;
  description: string;
  source?: string;
  type?: string;
}

export type GitQueryType =
  | "errorMessage"
  | "tooling"
  | "versioning"
  | "commandOption"
  | "commandHelp"
  | "workflow"
  | "concept"
  | "ambiguous"
  | "nonGit";

export type classification =
  | { type: Exclude<GitQueryType, "commandOption" | "commandHelp"> }
  | { type: "commandOption" | "commandHelp"; command: string };
