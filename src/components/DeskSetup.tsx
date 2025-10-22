import { motion } from "framer-motion";
import deskImage from "@/assets/desk-setup.png";

const DeskSetup = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Title with unique styling */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              My Desk Setup
            </motion.h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-4 text-lg"
          >
            Where the magic happens ✨
          </motion.p>
        </motion.div>

        {/* Main content with unique layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with special effects */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl" />
              <img
                src={deskImage}
                alt="My desk setup - a wooden desk with laptop, keyboard, mouse, and accessories"
                className="relative rounded-xl shadow-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg font-semibold text-sm"
              >
                Command Center 🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Text content with staggered animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              "This is my little command center — the place where I've spent countless hours learning, building, and dreaming. I haven't created a full production-level product yet, but I've built plenty of small projects here, experimenting with ideas and learning everything I can along the way.",
              "I've learned so many things sitting at this desk — from understanding AI concepts to watching my favorite YouTubers talk about startups, coding, and design. Every late-night session here has its own memory. Sometimes it's me debugging something for hours, other times it's just me watching videos, taking notes, or planning my next big idea.",
              "My laptop isn't some high-end machine, but it's been my constant teammate. It struggles, sure — but it never gives up on me. It's been with me through every crash, every compile, every idea that almost didn't work but somehow did.",
              "This setup might look simple, but it's where everything started for me. Every bit of progress, every spark of creativity — it all happens right here."
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative pl-6 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeskSetup;
