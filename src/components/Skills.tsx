import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Data Analytics", icon: "📊" },
      { name: "AI/ML Concepts", icon: "🤖" },
      { name: "Generative AI (Gen AI)", icon: "✨" },
      { name: "Cloud Technologies", icon: "☁️" },
      { name: "Business Technology", icon: "💻" },
      { name: "Advanced Excel", icon: "📈" },
      { name: "Project Management", icon: "📋" }
    ]
  },
  {
    title: "Business Skills",
    skills: [
      { name: "Entrepreneurial Thinking", icon: "💡" },
      { name: "Business Model Ideation", icon: "🎯" },
      { name: "Market Analysis", icon: "📊" },
      { name: "Pitch Creation", icon: "🎤" },
      { name: "Product Management", icon: "📦" },
      { name: "Sustainability Concepts", icon: "🌱" },
      { name: "Product Conceptualization", icon: "⚡" }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Strategic Thinking", icon: "🧠" },
      { name: "Creative Ideation", icon: "✨" },
      { name: "Improving Communication Skills", icon: "💬" },
      { name: "Adaptability", icon: "🔄" },
      { name: "Problem Solving", icon: "🎯" }
    ]
  }
];

export default function Skills() {
  return (
    <section className="section-padding bg-secondary/10" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold playfair mb-4">Skills & Expertise</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical, business, and soft skills developed through education and project experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
            >
              <Card className="hover-card glass h-full">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center pb-4 border-b border-primary/20">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                      >
                        <span className="text-xl sm:text-2xl flex-shrink-0">{skill.icon}</span>
                        <span className="text-sm sm:text-base">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
