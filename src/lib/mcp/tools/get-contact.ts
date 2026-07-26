import { defineTool } from "@lovable.dev/mcp-js";
import { personalInfo } from "@/data/personal-info";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Returns Nithin Varma's public contact information (email, phone, location) as listed on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `Email: ${personalInfo.basics.email}\nPhone: ${personalInfo.basics.phone}\nLocation: ${personalInfo.basics.location}`,
      },
    ],
    structuredContent: {
      email: personalInfo.basics.email,
      phone: personalInfo.basics.phone,
      location: personalInfo.basics.location,
    },
  }),
});
