import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  { title: "Brain Candy", category: "Education", description: "An innovative education platform designed to enhance learning experiences." },
  { title: "BrainCandy AI Study Assistant", category: "AI & Education", description: "An AI-powered study assistant that helps students with learning and productivity." },
  { title: "Matrix-Based Computer", category: "Computing", description: "A next-generation computing system utilizing a multidimensional matrix structure." },
  { title: "Cloudix", category: "Gaming", description: "A cloud gaming service offering optimized connectivity and performance." },
  { title: "Green Terra", category: "Sustainability", description: "A plant-based food service with eco-friendly packaging and a sustainable approach." },
  { title: "Feastify", category: "Food Tech", description: "A cloud restaurant concept providing high-quality meals through online delivery." },
  { title: "Waveroo", category: "Audio", description: "A music and audio platform concept." },
  { title: "Minimate", category: "Product", description: "A minimalist product concept." },
  { title: "Radianto", category: "Space", description: "A space station concept." },
  { title: "Velox", category: "Mobility", description: "A next-gen mobility concept." },
  { title: "Evolvion", category: "Innovation", description: "An evolution-focused innovation concept." },
  { title: "Gravix", category: "Tech", description: "A gravity/physics-related tech concept." },
  { title: "Lumin", category: "Lifestyle", description: "A lighting/lifestyle concept." },
  { title: "QuickFix", category: "Personal Project", description: "A personal project built for fun." },
  { title: "STANDARD", category: "Personal Project", description: "A minimal wallpaper library." },
  { title: "SpankUrLaptop", category: "Personal Project", description: "The Windows answer to a viral Mac-only trend — a Python-based audio processing app." },
  { title: "FitForge AI", category: "AI", description: "An AI-integrated fitness project." },
  { title: "Orbis Launchpad", category: "Personal Project", description: "A UI flex frontend project showcasing modern design and interactive layouts." },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "Lists all projects featured on Nithin Varma's portfolio with their category and short description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});
