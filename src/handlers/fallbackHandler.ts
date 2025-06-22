export async function fallbackHandler(query: string) {
  return {
    source: "fallbackHandler",
    query,
    message: "Placeholder: Could not understand your query.",
  };
}
