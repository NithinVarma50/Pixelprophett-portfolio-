import { defineTool } from "@lovable.dev/mcp-js";

const personalInfo = {
  basics: {
    name: "Nithin Varma",
    age: "17",
    birthDate: "May 4, 2007",
    email: "varmanithin029@gmail.com",
    phone: "9381904726",
    location: "India",
  },
  education: {
    current: "BBA in Business Analytics",
    institution: "Tapasya Degree College",
    graduationYear: "2026",
    collegeTime: "9:00 AM to 2:00 PM",
    skills: ["Data Science", "Business Analytics", "MS Excel", "Business Problem-Solving"],
  },
  achievements: [
    "Organizing Innovators Den event at college",
    "Participated in Shark Tank event with startup pitch",
    "Created multiple startup ideas across industries",
    "Founded and manage 'Ignition in AI Era' - 2000+ member community",
    "Launched Discord server for enhanced community collaboration",
  ],
  interests: [
    "Entrepreneurship", "Business Innovation", "Technology",
    "Fitness", "Badminton", "Jump rope exercises",
  ],
  goals:
    "To become a great entrepreneur and billionaire, building and scaling groundbreaking businesses that disrupt industries.",
};

export { personalInfo };

export default defineTool({
  name: "get_about",
  title: "Get about Nithin Varma",
  description:
    "Returns Nithin Varma's public profile: basics, education, interests, achievements, and goals as shown on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(personalInfo, null, 2) }],
    structuredContent: personalInfo,
  }),
});
