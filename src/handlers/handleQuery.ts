import type { classification } from "../types";

import { commandHelpHandler } from "./commandHelpHandler";
import { commandOptionHandler } from "./commandOptionHandler";
import { errorHandler } from "./errorHandler";
import { toolingHandler } from "./toolingHandler";
import { versioningHandler } from "./versioningHandler";
import { workflowHandler } from "./workflowHandler";
import { conceptHandler } from "./conceptHandler";
import { ambiguousHandler } from "./ambiguousHandler";
import { nonGitHandler } from "./nonGitHandler";
import { fallbackHandler } from "./fallbackHandler";

export async function handleQuery(
  classificationObj: classification,
  query: string
): Promise<any> {
  const { type } = classificationObj;

  switch (type) {
    case "commandHelp":
      return commandHelpHandler(
        // For commandHelp and commandOption, 'command' is required
        (classificationObj as { type: "commandHelp"; command: string }).command
      );

    case "commandOption":
      return commandOptionHandler(
        (classificationObj as { type: "commandOption"; command: string })
          .command
      );

    case "errorMessage":
      return errorHandler(query);

    case "tooling":
      return toolingHandler(query);

    case "versioning":
      return versioningHandler(query);

    case "workflow":
      return workflowHandler(query);

    case "concept":
      return conceptHandler(query);

    case "ambiguous":
      return ambiguousHandler(query);

    case "nonGit":
      return nonGitHandler(query);

    default:
      return fallbackHandler(query);
  }
}
