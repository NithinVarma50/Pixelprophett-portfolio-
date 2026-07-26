import { defineTool } from "@lovable.dev/mcp-js";
import { personalInfo } from "../../data/personal-info";

export default defineTool({
  name: "get_about",
  title: "Get about Nithin Varma",
  description:
    "Returns Nithin Varma's public profile: basics, education, interests, achievements, and goals as shown on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(personalInfo, null, 2) }],
    structuredContent: personalInfo as unknown as Record<string, unknown>,
  }),
});
