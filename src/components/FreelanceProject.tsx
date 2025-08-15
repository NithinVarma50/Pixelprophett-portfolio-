import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Globe, Smartphone, Code, Database, Zap, MapPin } from "lucide-react";

export default function FreelanceProject() {
  const features = [
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
  ];

  const techStack = [
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

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="hover-card glass mb-6">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                      🚚 SS Courier & Cargo Services
                      <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        Web Designer & Developer
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">Logistics Website</p>
                    <p className="text-xs text-primary/70 flex items-center gap-1">
                      ✅ Deployed & Client-Ready
                    </p>
                  </div>
                  <a 
                    href="https://ss-courier-cargo-services.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    View Live Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  Developed a responsive, multi-page logistics website for a client in import/export. 
                  The site is fully frontend-complete, backend-ready, and can be deployed anywhere.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3 text-primary">Features & Pages</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
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
                    Tech & Deployment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                    {techStack.map((tech, index) => (
                      <div key={tech.title} className="flex items-center gap-2">
                        {tech.icon}
                        <div>
                          <p className="text-sm font-medium">{tech.title}</p>
                          <p className="text-xs text-muted-foreground">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Responsive, SEO-friendly layout • Deploy anywhere: Vercel, Netlify, AWS, etc.
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm mb-2 text-primary">Backend-Ready Integration</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    All frontend forms & tracking features have placeholder routes for easy backend integration:
                  </p>
                  <div className="text-xs font-mono bg-secondary/20 p-2 rounded mb-3">
                    POST /api/pickup • POST /api/contact • GET /api/track/:id
                  </div>
                  <p className="text-sm font-medium text-primary/90 italic">
                    "Full source code delivered with clean structure, README, and integration notes for seamless backend handoff."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}