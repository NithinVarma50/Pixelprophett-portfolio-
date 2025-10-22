import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Monitor, Coffee, BookOpen, Zap } from "lucide-react";
import deskImage from "@/assets/desk-setup.png";

const features = [
  {
    icon: Monitor,
    title: "Learning Station",
    description: "Where I spend hours coding, debugging, and building projects"
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    description: "Watching tutorials, taking notes, and planning next big ideas"
  },
  {
    icon: Coffee,
    title: "Late Night Sessions",
    description: "Countless hours of experimentation and creative problem-solving"
  },
  {
    icon: Zap,
    title: "Creative Space",
    description: "Where every spark of creativity and progress begins"
  }
];

const DeskSetup = () => {
  return (
    <section className="section-padding bg-secondary/10" id="desk-setup">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            My Desk Setup
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Where the magic happens ✨
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
                      🖥️ Command Center
                      <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded-full">
                        Personal Space
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">My Learning & Building Hub</p>
                    <p className="text-xs text-primary/70 flex items-center gap-1">
                      💻 Where Ideas Come to Life
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative group">
                    <div className="border-2 border-primary/20 rounded-lg p-2 bg-background/50 hover:border-primary/40 transition-all duration-300">
                      <img
                        src={deskImage}
                        alt="My desk setup - a wooden desk with laptop, keyboard, mouse, and accessories"
                        className="w-full h-auto rounded-md shadow-lg"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      viewport={{ once: true }}
                      className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg font-semibold text-xs"
                    >
                      🚀 Command Center
                    </motion.div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  This is my little command center — the place where I've spent countless hours learning, building, and dreaming. 
                  I haven't created a full production-level product yet, but I've built plenty of small projects here, 
                  experimenting with ideas and learning everything I can along the way.
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
                        <feature.icon className="w-5 h-5 text-primary/70" />
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
                    <BookOpen className="w-4 h-4" />
                    💡 Learning Journey
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I've learned so many things sitting at this desk — from understanding AI concepts to watching my favorite 
                    YouTubers talk about startups, coding, and design. Every late-night session here has its own memory. 
                    Sometimes it's me debugging something for hours, other times it's just me watching videos, taking notes, 
                    or planning my next big idea.
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    My laptop isn't some high-end machine, but it's been my constant teammate. It struggles, sure — but it never gives up on me. 
                    It's been with me through every crash, every compile, every idea that almost didn't work but somehow did.
                  </p>
                  <p className="text-sm font-medium text-primary/90 italic">
                    "This setup might look simple, but it's where everything started for me. Every bit of progress, every spark of creativity — it all happens right here."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DeskSetup;
