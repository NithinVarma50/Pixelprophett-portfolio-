import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Globe, Smartphone, Code, Database, Zap, MapPin, User, Layout, Palette } from "lucide-react";

export default function FreelanceProject() {
  const projects = [
    {
      id: 1,
      emoji: "🎨",
      title: "Anousha Moon Portfolio",
      role: "Web Designer & Frontend Developer",
      status: "Completed • Not Publicly Launched",
      statusColor: "yellow-500",
      category: "Personal Brand Portfolio",
      url: "https://anousha-moon-portfolio-1.vercel.app",
      description: "Designed and developed a modern personal brand portfolio website focused on clean visuals, smooth interactions, and responsive performance. The project was completed end-to-end as part of a freelance engagement.",
      features: [
        {
          icon: <Code className="w-5 h-5 text-primary/70" />,
          title: "Semantic HTML",
          description: "Structure for accessibility and SEO"
        },
        {
          icon: <Palette className="w-5 h-5 text-primary/70" />,
          title: "Custom CSS",
          description: "Layouts, styling, and animations"
        },
        {
          icon: <Zap className="w-5 h-5 text-primary/70" />,
          title: "JavaScript",
          description: "Interactive UI behavior"
        },
        {
          icon: <Smartphone className="w-5 h-5 text-primary/70" />,
          title: "Responsive Design",
          description: "Optimized for all devices"
        }
      ],
      techStack: [
        {
          icon: <Globe className="w-4 h-4 text-primary/70" />,
          title: "HTML",
          description: "Semantic structure"
        },
        {
          icon: <Palette className="w-4 h-4 text-primary/70" />,
          title: "CSS",
          description: "Custom styling"
        },
        {
          icon: <Code className="w-4 h-4 text-primary/70" />,
          title: "JavaScript",
          description: "No frameworks"
        }
      ],
      deliverables: [
        "Complete frontend source code",
        "Clean and maintainable file structure",
        "Deployment-ready build",
        "Reusable portfolio layout for future adaptations"
      ],
      note: "The project was completed, but the client chose not to proceed with a public launch.",
      quote: "Built using pure HTML, CSS, and JavaScript with emphasis on clean UI, spacing, and visual hierarchy."
    },
    {
      id: 2,
      emoji: "🚚",
      title: "SS Courier & Cargo Services",
      role: "Web Designer & Developer",
      status: "Deployed & Client-Ready",
      statusColor: "green-500",
      category: "Logistics Website",
      url: "https://ss-courier-cargo-services.vercel.app",
      description: "Developed a responsive, multi-page logistics website for a client in import/export. The site is fully frontend-complete, backend-ready, and can be deployed anywhere.",
      features: [
        {
          icon: <Globe className="w-5 h-5 text-primary/70" />,
          title: "Home",
          description: "Service overview + strong CTAs"
        },
        {
          icon: <Smartphone className="w-5 h-5 text-primary/70" />,
          title: "Track Shipment",
          description: "Tracking UI (backend-ready)"
        },
        {
          icon: <Code className="w-5 h-5 text-primary/70" />,
          title: "Book a Pickup",
          description: "Online request form (backend-ready)"
        },
        {
          icon: <MapPin className="w-5 h-5 text-primary/70" />,
          title: "Contact & Pricing",
          description: "Map, form, rates & offers"
        }
      ],
      techStack: [
        {
          icon: <Zap className="w-4 h-4 text-primary/70" />,
          title: "Vite",
          description: "Fast dev/build"
        },
        {
          icon: <Code className="w-4 h-4 text-primary/70" />,
          title: "TypeScript",
          description: "Type safety"
        },
        {
          icon: <Database className="w-4 h-4 text-primary/70" />,
          title: "Backend-Ready",
          description: "API routing prepared"
        }
      ],
      backendIntegration: {
        description: "All frontend forms & tracking features have placeholder routes for easy backend integration:",
        routes: "POST /api/pickup • POST /api/contact • GET /api/track/:id"
      },
      quote: "Full source code delivered with clean structure, README, and integration notes for seamless backend handoff."
    }
  ];

  return (
    <section className="section-padding bg-secondary/5" id="freelance">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            Freelance Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Professional web development services for clients across industries
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
            >
              <Card className="hover-card glass">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 flex flex-wrap items-center gap-2">
                        {project.emoji} {project.title}
                        <span className={`text-sm bg-${project.statusColor}/20 text-${project.statusColor === 'green-500' ? 'green-400' : 'yellow-400'} px-2 py-1 rounded-full whitespace-nowrap`}>
                          {project.role}
                        </span>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">{project.category}</p>
                      <p className="text-xs text-primary/70 flex items-center gap-1">
                        {project.statusColor === 'green-500' ? '✅' : '⚠️'} {project.status}
                      </p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm whitespace-nowrap"
                    >
                      View {project.statusColor === 'green-500' ? 'Live Site' : 'Preview'} <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-primary">
                      {project.id === 1 ? 'Key Features' : 'Features & Pages'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {feature.icon}
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">{feature.title}</h5>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-primary/20 rounded-lg p-4 mb-6 bg-primary/5">
                    <h4 className="font-semibold text-sm mb-2 text-primary">
                      Tech {project.id === 2 && '& Deployment'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                      {project.techStack.map((tech, index) => (
                        <div key={tech.title} className="flex items-center gap-2">
                          {tech.icon}
                          <div>
                            <p className="text-sm font-medium">{tech.title}</p>
                            <p className="text-xs text-muted-foreground">{tech.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {project.id === 2 && (
                      <p className="text-sm text-muted-foreground">
                        Responsive, SEO-friendly layout • Deploy anywhere: Vercel, Netlify, AWS, etc.
                      </p>
                    )}
                  </div>

                  {project.deliverables && (
                    <div className="mb-6 border border-primary/20 rounded-lg p-4 bg-secondary/10">
                      <h4 className="font-semibold text-sm mb-3 text-primary">Deliverables</h4>
                      <ul className="space-y-2">
                        {project.deliverables.map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.backendIntegration && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-2 text-primary">Backend-Ready Integration</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.backendIntegration.description}
                      </p>
                      <div className="text-xs font-mono bg-secondary/20 p-2 rounded mb-3">
                        {project.backendIntegration.routes}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-border pt-4">
                    {project.note && (
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-semibold text-primary">Note:</span> {project.note}
                      </p>
                    )}
                    <p className="text-sm font-medium text-primary/90 italic">
                      "{project.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}