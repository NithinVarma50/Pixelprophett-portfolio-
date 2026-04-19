import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { LayoutDashboard, Zap, Layout, MonitorSmartphone, Layers, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "UI Flex Project",
    description: "Built to demonstrate interactive layouts and modern UI design principles"
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Interface",
    description: "Seamlessly adapts across desktop and mobile devices"
  },
  {
    icon: Layers,
    title: "Component Structure",
    description: "Organized architecture for scalability and clean code"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized frontend delivery with fast load times"
  }
];

export default function OrbisLaunchpad() {
  return (
    <section id="orbis-launchpad" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            ORBIS LAUNCHPAD
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Modern UI Flex Frontend Architecture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Orbis Launchpad</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Personal Web Project • Built for Fun</p>
                </div>
              </div>

              <div className="mb-6">
                <a
                  href="https://orbis-launchpad.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-medium">Visit Live Preview</span>
                </a>
              </div>

              <div className="prose prose-invert max-w-none mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                  Orbis Launchpad is a polished UI flex project showcasing modern design, interactive layouts, and high-performance frontend components.
                </p>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                  Built as a frontend exploration project, it prioritizes clear visual hierarchy and component-based structured design. This allowed me to experiment with dynamic user interfaces while ensuring the website remains fast and highly responsive.
                </p>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  It serves as a clean, engaging interface that demonstrates strong UI/UX execution and layout control.
                </p>
              </div>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
