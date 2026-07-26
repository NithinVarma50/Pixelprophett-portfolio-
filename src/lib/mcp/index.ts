import { defineMcp } from "@lovable.dev/mcp-js";
import getAbout from "./tools/get-about";
import listProjects from "./tools/list-projects";
import listSkills from "./tools/list-skills";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "nithin-varma-portfolio",
  title: "Nithin Varma Portfolio",
  version: "0.1.0",
  instructions:
    "Public MCP server for Nithin Varma's portfolio. Use these tools to look up his profile, projects, skills, and contact info.",
  tools: [getAbout, listProjects, listSkills, getContact],
});
