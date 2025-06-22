import fetch from "node-fetch";

const queries = [
  "git add",
  "clone a repo",
  "how to revert a commit",
  "checkout to a branch",
  "merge conflicts",
];

async function runTests() {
  for (const query of queries) {
    const res = await fetch("http://localhost:8000/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();
    console.log(`\n🔎 Query: "${query}"`);
    console.log("➡️ Result:", JSON.stringify(json, null, 2));
  }
}

runTests().catch(console.error);
