
import { motion } from "framer-motion";
import PersonalInfo from "./hero/PersonalInfo";
import SocialLinks from "./hero/SocialLinks";
import ActionButtons from "./hero/ActionButtons";
import BackgroundEffects from "./hero/BackgroundEffects";
import { SplineScene } from "./ui/splite";

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
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
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
        transition={{ 
          duration: 0.6, 
          delay: 0.2, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className="flex-1 relative z-10 mt-8 lg:mt-0 w-full max-w-lg lg:max-w-none"
      >
        <motion.div 
          className="w-full h-[400px] lg:h-[500px] relative group cursor-pointer transform-gpu"
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
            stiffness: 300, 
            damping: 25,
            mass: 0.8
          }}
        >
          {/* Enhanced interactive glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Touch indicator with smoother animation */}
          <motion.div
            className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 1.2,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            animate={{
              y: [0, -2, 0],
            }}
            whileHover={{
              scale: 1.05,
            }}
          >
            Interactive ✨
          </motion.div>

          {/* Main 3D scene container with enhanced styling */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-lg group-hover:shadow-primary/20">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full transform-gpu"
            />
            
            {/* Enhanced overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            
            {/* Rim light effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-700 pointer-events-none" />
          </div>

          {/* Enhanced floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/50 rounded-full shadow-sm shadow-primary/50"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${25 + i * 15}%`,
                }}
                animate={{
                  y: [-15, 15, -15],
                  x: [-5, 5, -5],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Pulse ring effect */}
          <motion.div
            className="absolute inset-0 rounded-xl border border-primary/20 opacity-0 group-hover:opacity-100"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      <BackgroundEffects />
    </section>
  );
}
