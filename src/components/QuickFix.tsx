
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Wrench } from "lucide-react";

export default function QuickFix() {
  return (
    <section className="section-padding bg-background" id="quickfix">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            QuickFix Project
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Hyperlocal vehicle repair service with full-stack implementation
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center px-4">
          <motion.div 
            className="flex-1" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="hover-card loki-glass border-primary/20 overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-center mb-4">
                  <Wrench className="w-16 h-16 text-primary mx-auto animate-float" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center loki-text">QuickFix</h3>
                <p className="text-sm sm:text-base mb-6">
                  A hyperlocal vehicle repair service designed to bring 10-minute response times to roadside breakdowns. 
                  Built a complete full-stack platform including a smart dispatch-on-demand system that connects users with mechanics — fast, simple, and fully digital. 
                  Features an AI assistant that interprets vehicle issues using natural language and recommends DIY solutions or instant bookings. 
                  The project includes comprehensive business analysis, market research, and operational strategy planning.
                </p>
                <div className="mt-auto text-center">
                  <Button 
                    className="mt-4 text-base sm:text-lg py-6 px-8 relative overflow-hidden group"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://quic-fix.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative z-10"
                    >
                      <span className="relative z-10">Visit QuickFix</span>
                      <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
