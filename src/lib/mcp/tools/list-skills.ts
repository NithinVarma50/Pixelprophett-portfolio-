import { defineTool } from "@lovable.dev/mcp-js";

const skills = {
  technical: [
    "Python", "Data Analytics", "AI/ML Concepts", "Generative AI (Gen AI)",
    "Cloud Technologies", "Business Technology", "Advanced Excel", "Project Management",
  ],
  business: [
    "Entrepreneurial Thinking", "Business Model Ideation", "Market Analysis",
    "Pitch Creation", "Product Management", "Sustainability Concepts", "Product Conceptualization",
  ],
  soft: [
    "Strategic Thinking", "Creative Ideation", "Improving Communication Skills",
    "Adaptability", "Problem Solving",
  ],
};

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "Lists Nithin Varma's skills grouped by technical, business, and soft skill categories.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
    structuredContent: skills,
  }),
});
