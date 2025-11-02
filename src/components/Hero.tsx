
import { motion } from "framer-motion";
import { memo, useCallback } from "react";
import PersonalInfo from "./hero/PersonalInfo";
import SocialLinks from "./hero/SocialLinks";
import ActionButtons from "./hero/ActionButtons";
import BackgroundEffects from "./hero/BackgroundEffects";
import { SplineScene } from "./ui/splite";
import { isMobile, shouldEnableHighEndAnimations } from "@/lib/mobile-optimization";

const Hero = memo(() => {
  const isMobileDevice = isMobile();
  const highEndAnimations = shouldEnableHighEndAnimations();
  
  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      // Use smooth scrolling with better performance
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, []);

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
            Interactive ✨
          </motion.div>

          {/* Main 3D scene container - disabled on mobile for performance */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 group-hover:border-primary/20 transition-colors duration-300">
            {!isMobileDevice ? (
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-primary/60 text-sm">Interactive 3D Model</p>
                  <p className="text-muted-foreground text-xs mt-1">Optimized for mobile</p>
                </div>
              </div>
            )}
            
            {/* Subtle overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating particles effect - HIGH-END DESKTOP gets more particles */}
          {!isMobileDevice && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(highEndAnimations ? 5 : 3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: highEndAnimations ? [-15, 15, -15] : [-10, 10, -10],
                    opacity: highEndAnimations ? [0.4, 1, 0.4] : [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: highEndAnimations ? (4 + i) : (3 + i),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>

      <BackgroundEffects />
    </section>
  );
});

export default Hero;
