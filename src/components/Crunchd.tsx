import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Zap, Layout, Type, Smartphone, Palette, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Type,
    title: "Visual Hierarchy",
    description: "Prioritizing clear visual hierarchy and layout control"
  },
  {
    icon: Layout,
    title: "Poster-Style UI",
    description: "Non-template structure with bold presentation"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach with scroll-driven sections"
  },
  {
    icon: Zap,
    title: "Modern Architecture",
    description: "Component-based frontend with performance focus"
  }
];

export default function Crunchd() {
  return (
    <section id="crunchd" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            CRUNCHD
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Street Food Café UI Concept
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">CRUNCHD</h3>
                  <p className="text-sm text-muted-foreground">Personal Project • Built for Fun • 2025</p>
                </div>
              </div>

              <div className="mb-6">
                <a
                  href="https://crunchd.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-medium">Visit Live Preview</span>
                </a>
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  CRUNCHD is a Gen-Z street food café website concept built as a UI and frontend exploration project in my free time. The project focuses on visual structure, layout experimentation, and interactive design, with an emphasis on bold presentation and scroll-driven sections.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The website uses a poster-style layout approach, prioritizing clear visual hierarchy, spacing, and color systems over traditional page structures. The goal was to design a clean, engaging interface while maintaining a fast and responsive frontend setup.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  A polished concept website that demonstrates frontend execution, UI structure, and design exploration without client or business constraints.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground/70 italic">
                  "All data shown on the website, including menu items and brand details, is mock data created purely for demonstration purposes."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
