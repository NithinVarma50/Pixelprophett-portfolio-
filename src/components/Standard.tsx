import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Layout, Zap, Globe, Palette, Code, Image, Download, Eye } from "lucide-react";

export default function Standard() {
  const features = [
    {
      icon: <Layout className="w-5 h-5 text-primary/70" />,
      title: "Minimal Interface",
      description: "Content-first UI with clean visual hierarchy using space instead of decoration"
    },
    {
      icon: <Eye className="w-5 h-5 text-primary/70" />,
      title: "Focus Interactions",
      description: "Apple TV–inspired hover states with subtle motion and scaling"
    },
    {
      icon: <Download className="w-5 h-5 text-primary/70" />,
      title: "Free Downloads",
      description: "Direct, frictionless download for all wallpapers — no login required"
    },
    {
      icon: <Palette className="w-5 h-5 text-primary/70" />,
      title: "Design Restraint",
      description: "No social features, no ads, no tracking — just content"
    }
  ];

  const techStack = [
    { name: "React", icon: <Code className="w-4 h-4" /> },
    { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
    { name: "Vite", icon: <Zap className="w-4 h-4" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" /> }
  ];

  return (
    <section className="section-padding bg-secondary/5" id="standard">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            <Image className="w-4 h-4" />
            Personal Project • Built for Fun • 2025
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            🖼️ STANDARD
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Minimal Wallpaper Library
          </p>
        </div>

        <Card className="hover-card glass overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
              <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded-full">
                ✅ Live & Free to Use
              </span>
              </div>
              <a
                href="https://standard-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Visit Live Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              STANDARD is a content-first wallpaper website designed with a minimal, Apple TV–inspired UI. 
              The goal was to remove all unnecessary interface elements and let visuals lead the experience. 
              Wallpapers are manually curated and presented in a calm, distraction-free environment focused 
              purely on browsing and downloading.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-4 text-primary">What This Project Focuses On</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
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
              <h4 className="font-semibold text-sm mb-3 text-primary">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/30 text-sm"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Static JSON data • Deployed on Vercel
              </p>
            </div>

            <div className="border border-primary/20 rounded-lg p-4 mb-6 bg-secondary/10">
              <h4 className="font-semibold text-sm mb-3 text-primary">Design Philosophy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                STANDARD was built around restraint. Every element that didn't support the core action — 
                viewing and downloading wallpapers — was removed. The result is a calm, premium browsing 
                experience where the content itself becomes the interface.
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm font-medium text-primary/90 italic">
                "This project demonstrates design discipline, content-first UI thinking, motion and focus-state 
                interaction design, and modern frontend architecture."
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
