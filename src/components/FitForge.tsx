import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Dumbbell, Brain, TrendingUp, Calendar, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    description: "Integrated OpenRouter's Grok-4 Fast model for intelligent workout generation"
  },
  {
    icon: TrendingUp,
    title: "Adaptive Programs",
    description: "Workout plans that evolve with your progress over time"
  },
  {
    icon: Calendar,
    title: "Progress Tracking",
    description: "Data-driven approach to monitor fitness journey and improvements"
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Custom bulking and flexibility roadmaps tailored to individual needs"
  }
];

export default function FitForge() {
  return (
    <section id="fitforge" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FitForge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal AI-Powered Fitness App
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
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">FitForge</h3>
                  <p className="text-sm text-muted-foreground">Personal Project • 2024</p>
                </div>
              </div>

              <div className="mb-6">
                <a 
                  href="https://nithin-fit-forge.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Visit Live App</span>
                </a>
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  I built FitForge when I started going to the gym for the first time at 18. I had no experience and wasn't sure how to plan or track workouts. I initially asked AI to create a fitness plan for me — it gave me a good bulking and flexibility roadmap, but it was just a one-time answer.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  That's when I decided to build my own app — something that could adapt to my progress over time. I integrated AI using OpenRouter's free Grok-4 Fast model, allowing the app to generate and adjust personalized workout plans.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  FitForge isn't a product or startup — it's a personal tool I created to make my fitness journey easier and more data-driven. It reflects how I like to use AI not just for ideas, but to build practical tools that fit into everyday life.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
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
                  "Building FitForge taught me that the best AI applications are those that solve real problems in your own life — tools that learn and grow with you, not just one-time answers."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
