export async function commandOptionHandler(command: string) {
  return {
    source: "commandOptionHandler",
    command,
    message: `Placeholder: Options and flags for '${command}'`,
  };
}
