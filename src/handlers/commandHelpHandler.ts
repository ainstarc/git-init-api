export async function commandHelpHandler(command: string) {
  return {
    source: "commandHelpHandler",
    command,
    message: `Placeholder: Help info for '${command}'`,
  };
}
