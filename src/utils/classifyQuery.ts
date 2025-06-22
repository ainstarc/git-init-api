import { classification, GitQueryType } from "../types";

export function classifyQuery(query: string): {
  classification: classification;
} {
  const q = query.toLowerCase().trim();

  let command = "";

  const isCommand = /^git\s+[a-z-]+$/.test(q);
  const hasFlags = /--?[a-z]/.test(q);
  const isError = /(fatal|error|not a git repository|conflict)/.test(q);
  const isTooling = /(vscode|github|gitlab|editor|ide)/.test(q);
  const isVersion = /git.*(version|2\.\d+)/.test(q);
  const isConcept = /(remote|index|staging|commit message)/.test(q);
  const isWorkflow = /(how|step|undo|redo|revert|rollback)/.test(q);

  if (isError) {
    return { classification: { type: "errorMessage" } };
  }

  if (isTooling) {
    return { classification: { type: "tooling" } };
  }

  if (isVersion) {
    return { classification: { type: "versioning" } };
  }

  if (isCommand && hasFlags) {
    return { classification: { type: "commandOption", command: q } };
  }

  if (isCommand) {
    return { classification: { type: "commandHelp", command: q } };
  }

  if (isWorkflow) {
    return { classification: { type: "workflow" } };
  }

  if (isConcept) {
    return { classification: { type: "concept" } };
  }

  const words = q.split(/\s+/);
  if (words.length === 1 && ["clone", "merge", "init", "status"].includes(q)) {
    return { classification: { type: "ambiguous" } };
  }

  return { classification: { type: "nonGit" } };
}
