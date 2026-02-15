import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import pxplabLogo from "@/assets/pxplab-logo.jpg";
import { 
  Globe, 
  Workflow, 
  Database, 
  Video, 
  Palette,
  Zap,
  Sparkles,
  Package,
  ExternalLink,
  Users
} from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Globe,
    title: "Portfolio & Business Websites",
    description: "Custom-built websites with modern design"
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description: "n8n, Make, AI Integrations"
  },
  {
    icon: Database,
    title: "Data Scraping Services",
    description: "Efficient data extraction solutions"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video production"
  },
  {
    icon: Palette,
    title: "Poster & Graphic Design",
    description: "Eye-catching visual content"
  }
];

const highlights = [
  { icon: Zap, text: "Fast Delivery" },
  { icon: Sparkles, text: "Clean Modern UI" },
  { icon: Package, text: "Affordable & Scalable" }
];

export default function PXPLab() {
  return (
    <section className="section-padding" id="pxplab">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            PXPLAB — Our Freelance Studio
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            We don't just showcase projects — we build them for others too.
          </p>
        </div>

        <Card className="glass overflow-hidden">
          <CardContent className="p-4 sm:p-8">
            {/* Studio Intro */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden">
                <img src={pxplabLogo} alt="PXPLAB logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Digital Studio</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Me & Koushik</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              PXPLAB is our digital studio providing full-stack freelance services for creators, 
              personal brands, businesses, and startups.
            </p>

            {/* Services Grid */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-2.5 sm:p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                  >
                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium leading-tight">{service.title}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full bg-primary/5 border border-primary/10"
                >
                  <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70" />
                  <span className="text-[10px] sm:text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border/50">
              <p className="text-[10px] sm:text-xs text-muted-foreground italic">
                🛠 The entire PXPLAB website is designed & developed by me
              </p>
              <Button 
                asChild 
                className="w-full sm:w-auto"
                size="sm"
              >
                <a 
                  href="https://pixelprophett-studio.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Book Services
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
