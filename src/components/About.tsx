
import { motion } from "framer-motion";

export default function About() {
  const polymathQualities = [
    "Business Analytics",
    "Data Science",
    "Entrepreneurship",
    "Problem Solving",
    "Innovation",
    "Creative Thinking"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8 sm:space-y-12"
    >
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold playfair mb-4">About Me</h2>
        <p className="text-xl sm:text-2xl text-primary font-medium">A Polymath's Journey</p>
      </div>
      
      {/* Main Content */}
      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
        <p className="text-center sm:text-left">
          As a modern polymath, I cultivate expertise across multiple domains including business analytics, 
          data science, and entrepreneurship. This multidisciplinary approach allows me to see connections 
          others might miss and develop innovative solutions at the intersection of different fields.
        </p>
        
        {/* Areas of Expertise */}
        <div className="my-8 sm:my-12">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {polymathQualities.map((quality, index) => (
              <motion.div
                key={quality}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-secondary/30 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-primary/10 text-center hover:border-primary/30 hover:bg-secondary/40 transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-medium">{quality}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <p className="text-center sm:text-left">
          My unique blend of business acumen and technical knowledge empowers me to identify innovative 
          solutions for complex business challenges. Like the Renaissance polymaths who excelled in 
          multiple disciplines, I believe that the most groundbreaking innovations happen at the 
          intersection of different domains.
        </p>
        
        <p className="text-center sm:text-left">
          I've demonstrated this multifaceted approach through various projects and achievements, 
          including participating in a Shark Tank-style event where I pitched original startup ideas 
          and organizing the Innovators Den event at college. My goal is to continue developing 
          as a polymath, constantly expanding my knowledge and skills across disciplines to create 
          meaningful impact through entrepreneurial ventures.
        </p>
      </div>
    </motion.div>
  );
}
