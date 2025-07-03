
import { motion } from "framer-motion";
import PersonalInfo from "./hero/PersonalInfo";
import SocialLinks from "./hero/SocialLinks";
import ActionButtons from "./hero/ActionButtons";
import BackgroundEffects from "./hero/BackgroundEffects";
import { InteractiveRobot } from "./ui/interactive-robot";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center section-padding text-center lg:text-left relative overflow-hidden pt-16 sm:pt-0">
      {/* Left side - Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 max-w-2xl relative z-10 px-4 sm:px-6 md:px-0 lg:pr-8"
      >
        <PersonalInfo />
        <SocialLinks />
        <ActionButtons scrollToProjects={scrollToProjects} />
      </motion.div>

      {/* Right side - Interactive 3D Robot */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 relative z-10 mt-8 lg:mt-0 w-full max-w-lg lg:max-w-none"
      >
        <motion.div 
          className="w-full h-[400px] lg:h-[500px] relative group cursor-pointer"
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            rotateX: 2
          }}
          whileTap={{ 
            scale: 0.98,
            rotateY: -2 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
          }}
        >
          {/* Interactive glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          {/* Touch indicator */}
          <motion.div
            className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Gyroscope Ready 🤖
          </motion.div>

          {/* Interactive Robot Container */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 group-hover:border-primary/20 transition-colors duration-300">
            <InteractiveRobot className="w-full h-full" />
            
            {/* Subtle overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <BackgroundEffects />
    </section>
  );
}
