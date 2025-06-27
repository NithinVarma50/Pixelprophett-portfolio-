
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Wrench, Zap, TrendingUp, Target, Bot } from "lucide-react";

export default function QuickFix() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-primary/70" />,
      title: "Built & deployed the entire website",
      description: "Full-stack development: Frontend, backend, UI/UX, deployment"
    },
    {
      icon: <Bot className="w-6 h-6 text-primary/70" />,
      title: "AI Assistant (QuickFix AI)",
      description: "Designed & integrated intelligent assistant with natural language processing"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary/70" />,
      title: "Strategy & logistics planning",
      description: "Driving market positioning and growth"
    },
    {
      icon: <Target className="w-6 h-6 text-primary/70" />,
      title: "Daily marketing campaigns",
      description: "Executing digital growth hacks"
    }
  ];

  return (
    <section className="section-padding bg-secondary/10" id="quickfix">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            Current Venture
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Leading a hyperlocal vehicle repair startup from concept to market
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="hover-card glass mb-6 sm:mb-8">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                      🚗 QuickFix
                      <span className="text-sm bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                        Co-Founder
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">Tech & Strategy Lead</p>
                    <p className="text-xs text-primary/70 flex items-center gap-1">
                      🚧 Progress-Stage Startup
                    </p>
                  </div>
                  <a 
                    href="https://quic-fix.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  QuickFix is a hyperlocal vehicle repair startup bringing 10-minute response times to roadside breakdowns. 
                  We're building a smart, dispatch-on-demand system that connects users with mechanics — fast, simple, and fully digital.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
                        <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border border-primary/20 rounded-lg p-4 mb-6 bg-primary/5">
                  <h4 className="flex items-center gap-2 font-semibold text-sm mb-2 text-primary">
                    <Bot className="w-4 h-4" />
                    🛠️ AI Assistant (QuickFix AI)
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Designed & integrated an intelligent assistant that interprets user vehicle issues using natural language 
                    and recommends DIY solutions or instant bookings. Built complete full-stack solution including backend APIs 
                    and frontend integration.
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    We've launched our MVP, delivered early customer orders, and are actively scaling toward a franchise-backed, tech-driven model.
                  </p>
                  <p className="text-sm font-medium text-primary/90 italic">
                    "Real-world hustle, tech-backed scale — QuickFix is just getting started."
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
