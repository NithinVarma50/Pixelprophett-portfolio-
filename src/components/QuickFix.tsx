
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Wrench, Bot, Code, BarChart3, ExternalLink } from "lucide-react";

export default function QuickFix() {
  const keyFeatures = [
    {
      icon: <Code className="w-5 h-5" />,
      label: "Full-Stack Development",
      detail: "Complete platform with frontend, backend & deployment"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      label: "AI Assistant Integration",
      detail: "Natural language processing for vehicle diagnostics"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Business Strategy",
      detail: "Market research & operational planning"
    }
  ];

  return (
    <section className="section-padding bg-background" id="quickfix">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-4"
          >
            <Wrench className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto animate-float" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3">
            QuickFix
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Hyperlocal Vehicle Repair Platform
          </p>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="hover-card loki-glass border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              {/* Project Overview */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Project Overview</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Full-stack service platform</p>
                  </div>
                  <a 
                    href="https://quic-fix.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-medium shrink-0"
                  >
                    <span className="hidden sm:inline">Visit Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  A hyperlocal vehicle repair service designed to deliver 10-minute response times to roadside breakdowns. 
                  Built a complete full-stack platform with smart dispatch-on-demand system connecting users with mechanics — 
                  fast, simple, and fully digital.
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {keyFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex gap-3 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex-shrink-0 text-primary mt-0.5">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-1">{feature.label}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Assistant Highlight */}
              <div className="border-t border-border bg-primary/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base mb-2">QuickFix AI Assistant</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Integrated intelligent assistant that interprets vehicle issues using natural language processing 
                      and recommends DIY solutions or instant bookings. Full-stack implementation includes backend APIs 
                      and seamless frontend integration.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-6 sm:p-8 bg-secondary/10 text-center">
                <Button 
                  className="text-base sm:text-lg py-6 px-8 relative overflow-hidden group"
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://quic-fix.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10"
                  >
                    <span className="relative z-10">Explore QuickFix Platform</span>
                    <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></span>
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Comprehensive project with market research & operational strategy
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
