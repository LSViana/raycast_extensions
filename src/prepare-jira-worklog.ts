import { Clipboard, showHUD } from "@raycast/api";

export default async function main() {
  const clipboardContent = await Clipboard.read()

  if (!clipboardContent.text) {
    await showHUD("No text in clipboard.");
  }

  const result = clipboardContent.text
    .replace(/(DEV|TESTDOME)-[\d]+\s?/, '')
    .split(";")
    .map((item) => `- ${item.trim()}`)
    .join("\n");

  await Clipboard.copy(result);

  await showHUD("Worklog copied to clipboard.");
}
