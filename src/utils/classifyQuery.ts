export type QueryType = "command" | "flag" | "natural" | "unknown";

export function classifyQuery(query: string): QueryType {
  const q = query.trim().toLowerCase();

  if (/^git\s+\w+/.test(q)) {
    console.log(`[TYPE] Detected as 'command': ${query}`);
    return "command";
  }

  if (/^--?\w/.test(q)) {
    console.log(`[TYPE] Detected as 'flag': ${query}`);
    return "flag";
  }

  if (q.split(" ").length >= 3) {
    console.log(`[TYPE] Detected as 'natural': ${query}`);
    return "natural";
  }

  console.log(`[TYPE] Could not classify, marked as 'unknown': ${query}`);
  return "unknown";
}
