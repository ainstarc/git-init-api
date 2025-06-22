import fetch from "node-fetch";

const queries = [
  // Command-based queries
  "git add",
  "git commit --amend",
  "git merge",
  "git status",

  // Natural language commands
  "clone a repo",
  "create new branch",
  "checkout to a branch",
  "how to stash changes",

  // Workflow/process queries
  "how to revert a commit",
  "how to undo git push",
  "steps to resolve merge conflicts",
  "rollback last commit",

  // Error messages
  "fatal: not a git repository",
  "error: failed to push some refs",
  "merge conflict error",

  // Tooling-related queries
  "git not working in vscode",
  "how to push to GitHub",
  "integrate git in gitlab ci",

  // Versioning
  "git version",
  "using git 2.40",
  "check my git version",

  // Concepts
  "what is the git index",
  "explain staging area",
  "what is a remote in git",

  // Ambiguous single terms
  "clone",
  "merge",
  "init",
  "status",

  // Non-Git
  "how to unzip a file",
  "best npm libraries for UI",
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
