export async function ambiguousHandler(query: string) {
  return {
    source: "ambiguousHandler",
    query,
    message: "Placeholder: Ambiguous query, please clarify your intent.",
  };
}
