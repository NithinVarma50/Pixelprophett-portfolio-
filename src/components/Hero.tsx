
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
        className="lg:flex-1 max-w-2xl relative z-10 px-4 sm:px-6 md:px-0 lg:pr-8 w-full"
      >
        <PersonalInfo />
        <SocialLinks />
        <ActionButtons scrollToProjects={scrollToProjects} />
      </motion.div>

      {/* Right side - Interactive 3D Robot (disabled on mobile) */}
      {!isMobileDevice && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative z-10 mt-8 lg:mt-0 w-full max-w-lg lg:max-w-none"
        >
          <motion.div
            className="w-full h-[400px] lg:h-[500px] relative group cursor-pointer"
            whileHover={{
              scale: highEndAnimations ? 1.03 : 1.02,
              rotateY: highEndAnimations ? 8 : 5,
              rotateX: highEndAnimations ? 4 : 2,
              z: highEndAnimations ? 10 : 0
            }}
            whileTap={{
              scale: highEndAnimations ? 0.97 : 0.98,
              rotateY: highEndAnimations ? -3 : -2
            }}
            transition={{
              type: "spring",
              stiffness: highEndAnimations ? 250 : 200,
              damping: highEndAnimations ? 25 : 20
            }}
          >
            {/* Interactive glow effect - HIGH-END DESKTOP gets refined minimal glow */}
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${highEndAnimations
                ? 'bg-gradient-to-r from-primary/18 via-primary/12 via-transparent via-primary/12 to-primary/18'
                : 'bg-gradient-to-r from-primary/20 via-transparent to-primary/20'
              }`} />

            {/* Main 3D scene container - HIGH-END DESKTOP gets refined border glow */}
            <div className={`relative w-full h-full rounded-xl overflow-hidden transition-all duration-300 pointer-events-none ${highEndAnimations
                ? 'border border-white/10 group-hover:border-primary/30 shadow-[0_0_20px_rgba(57,255,20,0.12)] group-hover:shadow-[0_0_35px_rgba(57,255,20,0.2)]'
                : 'border border-white/5 group-hover:border-primary/20'
              }`}>
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />

              {/* Subtle overlay - refined on desktop */}
              <div className={`absolute inset-0 pointer-events-none ${highEndAnimations
                  ? 'bg-gradient-to-t from-black/12 via-transparent via-primary/3 via-transparent to-transparent'
                  : 'bg-gradient-to-t from-black/10 via-transparent to-transparent'
                }`} />

              {/* HIGH-END DESKTOP: Minimal corner accent effects */}
              {highEndAnimations && (
                <>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/12 to-transparent rounded-tl-xl blur-sm pointer-events-none" />
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/12 to-transparent rounded-tr-xl blur-sm pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/12 to-transparent rounded-bl-xl blur-sm pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/12 to-transparent rounded-br-xl blur-sm pointer-events-none" />
                </>
              )}
            </div>

            {/* Floating particles effect - HIGH-END DESKTOP gets more particles */}
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
          </motion.div>
        </motion.div>
      )}

      <BackgroundEffects />
    </section>
  );
});

export default Hero;
