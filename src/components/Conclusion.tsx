
import { motion } from "framer-motion";

export default function Conclusion() {
  return (
    <section className="section-padding bg-secondary/10" id="conclusion">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold playfair mb-6">Looking Forward</h2>
        </div>
        
        {/* Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p className="text-center sm:text-left">
            As I continue my journey in Business Analytics and Data Science, I remain committed 
            to creating innovative solutions that make a meaningful impact. My diverse project 
            portfolio and achievements reflect my passion for combining business insight with 
            technical expertise.
          </p>
          <p className="text-center sm:text-left">
            I'm always eager to collaborate on challenging projects and contribute to 
            innovative initiatives. Whether it's developing new technologies, creating 
            sustainable solutions, or revolutionizing existing systems, I bring dedication, 
            creativity, and strategic thinking to every endeavor.
          </p>
          
          {/* Call to Action */}
          <div className="mt-10 pt-8 border-t border-primary/20">
            <p className="text-xl sm:text-2xl font-semibold text-center text-foreground">
              Let's connect and explore how we can create impactful solutions together.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
