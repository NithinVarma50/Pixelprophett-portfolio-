
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, BarChart3, Users, Target, TrendingUp, FileText } from "lucide-react";
import { Button } from "./ui/button";

export default function QuickFixAnalysis() {
  const analysisCategories = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "User Research",
      description: "Customer pain points & service expectations"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Market Analysis",
      description: "Competitive positioning & differentiation"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Service Design",
      description: "Operational framework & delivery optimization"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Growth Strategy",
      description: "Revenue models & expansion planning"
    }
  ];

  return (
    <section className="section-padding bg-secondary/5" id="quickfix-analysis">
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
            <FileText className="w-12 h-12 sm:w-14 sm:h-14 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3">
            Business Analysis
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive market & operational strategy for QuickFix
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="hover-card glass border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              {/* Introduction */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Strategic Foundation</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">In-depth market research & analysis</p>
                  </div>
                  <a 
                    href="https://www.notion.so/QuickFix-Business-Analysis-Comprehensive-Market-and-Operational-Assessment-2199ce8d0b5f8017ac89e07ba6c0820e?source=copy_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-medium shrink-0"
                  >
                    <span className="hidden sm:inline">Full Report</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  Conducted comprehensive business analysis to understand the vehicle repair ecosystem in Hyderabad. 
                  The research methodology included primary market research, competitive intelligence, and operational 
                  design thinking — forming the strategic backbone for market entry and operational excellence.
                </p>

                {/* Analysis Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {analysisCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex gap-3 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex-shrink-0 text-primary mt-0.5">
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-1">{category.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{category.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Insight */}
              <div className="border-t border-border bg-primary/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Research Methodology</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      Combined qualitative user interviews, competitive benchmarking, and market trend analysis to 
                      develop actionable insights. The analysis covers user behavior patterns, service delivery models, 
                      pricing strategies, and scalable growth frameworks.
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground italic">
                      "Data-driven strategy backed by thorough market understanding and operational excellence planning."
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 sm:p-8 bg-secondary/10 text-center">
                <Button 
                  className="text-base sm:text-lg py-6 px-8 relative overflow-hidden group"
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://www.notion.so/QuickFix-Business-Analysis-Comprehensive-Market-and-Operational-Assessment-2199ce8d0b5f8017ac89e07ba6c0820e?source=copy_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10"
                  >
                    <span className="relative z-10">Read Complete Analysis</span>
                    <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></span>
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Detailed breakdown of market research & strategic planning
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
