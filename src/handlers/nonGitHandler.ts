export async function nonGitHandler(query: string) {
  return {
    source: "nonGitHandler",
    query,
    message: "Placeholder: Your query does not appear to be related to Git.",
  };
}
