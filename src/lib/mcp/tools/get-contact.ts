import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  email: "varmanithin029@gmail.com",
  phone: "9381904726",
  location: "India",
};

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
        text: `Email: ${contact.email}\nPhone: ${contact.phone}\nLocation: ${contact.location}`,
      },
    ],
    structuredContent: contact,
  }),
});
