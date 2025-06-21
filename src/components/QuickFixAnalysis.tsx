
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, BarChart3, Users, Target, TrendingUp } from "lucide-react";

export default function QuickFixAnalysis() {
  const analysisHighlights = [
    {
      icon: <Users className="w-5 h-5 text-primary/70" />,
      title: "User Behavior Research",
      description: "In-depth analysis of customer pain points and service expectations"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-primary/70" />,
      title: "Competitive Mapping",
      description: "Market positioning and differentiation strategy analysis"
    },
    {
      icon: <Target className="w-5 h-5 text-primary/70" />,
      title: "Service Design",
      description: "Operational framework and service delivery optimization"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary/70" />,
      title: "Monetization & Growth",
      description: "Revenue models and scalable expansion strategies"
    }
  ];

  return (
    <section className="section-padding" id="quickfix-analysis">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            📊 QuickFix Business Analysis
          </h2>
          <p className="text-lg sm:text-xl font-medium mb-2">
            Comprehensive Market & Operational Strategy
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-2">
            As the Co-Founder of QuickFix, I conducted an in-depth business analysis to understand the vehicle repair ecosystem in Hyderabad. This research covers user behavior, competitive mapping, service design, monetization, and growth plans — forming the strategic foundation of our startup.
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
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      Strategic Business Foundation
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      This comprehensive analysis serves as the strategic backbone for QuickFix's market entry and operational excellence. The research methodology included primary market research, competitive intelligence, and operational design thinking.
                    </p>
                  </div>
                  <a 
                    href="https://www.notion.so/QuickFix-Business-Analysis-Comprehensive-Market-and-Operational-Assessment-2199ce8d0b5f8017ac89e07ba6c0820e?source=copy_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium ml-4"
                  >
                    View Full Analysis <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {analysisHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mt-6">
                  <p className="text-sm text-muted-foreground italic">
                    "Strategic thinking backed by data-driven insights — building QuickFix on a foundation of thorough market understanding and operational excellence."
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
