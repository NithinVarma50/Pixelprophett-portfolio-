import { useEffect, useState, useRef, memo, useCallback } from "react";
import Hero from "@/components/Hero";
import PersonalCard from "@/components/PersonalCard";
import { motion, useScroll, useSpring } from "framer-motion";
import LokiEffects from "@/components/effects/LokiEffects";
import { initMobileOptimizations } from "@/lib/mobile-optimization";

// Import all components directly for better caching - no lazy loading for smooth scrolling
import About from "@/components/About";
import DeskSetup from "@/components/DeskSetup";
import FitForge from "@/components/FitForge";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import QuickFix from "@/components/QuickFix";
import QuickFixAnalysis from "@/components/QuickFixAnalysis";
import FreelanceProject from "@/components/FreelanceProject";
import Community from "@/components/Community";
import GameShowcase from "@/components/GameShowcase";
import Achievements from "@/components/Achievements";
import Conclusion from "@/components/Conclusion";

// Removed lazy loading - all components load upfront for smooth scrolling

const Index = () => {
  const isMobileDevice = typeof window !== 'undefined' && (window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  
  // Performance-optimized scroll tracking - reduced on mobile
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    // Reduce precision on mobile for better performance
    layoutEffect: !isMobileDevice
  });
  
  // Optimized spring physics - lighter on mobile
  const scaleX = useSpring(scrollYProgress, {
    stiffness: isMobileDevice ? 100 : 200, // Lighter on mobile
    damping: isMobileDevice ? 30 : 40, // More damping on mobile
    restDelta: isMobileDevice ? 0.01 : 0.001, // Less precise on mobile
    mass: isMobileDevice ? 1 : 0.3 // More mass = less responsive but smoother on mobile
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollingRef = useRef(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Optimized scroll handler with better throttling
  const handleScroll = useCallback(() => {
    if (!scrollingRef.current) {
      setShowScrollButton(window.scrollY > window.innerHeight * 0.5);
    }
  }, []);

  useEffect(() => {
    // Initialize mobile optimizations on mount
    initMobileOptimizations();
    
    let ticking = false;
    
    // Ultra-smooth scroll handler with RAF
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);
  
  const scrollToTop = useCallback(() => {
    scrollingRef.current = true;
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    // Use RAF instead of setTimeout for better performance
    requestAnimationFrame(() => {
      setTimeout(() => {
        scrollingRef.current = false;
      }, 1000);
    });
  }, []);

  return (
    <main className="min-h-screen relative ultra-smooth">
      {/* Highly optimized progress bar */}
      <motion.div 
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] transform-gpu"
        style={{ 
          scaleX,
          transformOrigin: "left"
        }}
        aria-hidden="true"
      />
      
      {/* All components load upfront - no lazy loading for smooth scrolling */}
      <LokiEffects />
      <Hero />
      
      {/* All sections loaded immediately - cached and ready */}
      <div className="section-padding bg-secondary/20" id="about">
        <div className="max-w-4xl mx-auto">
          {/* Mobile: Card stacks above text */}
          <div className="block lg:hidden mb-8 flex justify-center">
            <PersonalCard />
          </div>
          
          {/* Desktop: Text wraps around floating card */}
          <div className="relative">
            {/* Floating card on desktop - positioned much lower to allow more text above */}
            <div className="hidden lg:block float-right mt-32 ml-8 mb-8 mr-6" style={{shapeOutside: 'margin-box'}}>
              <PersonalCard />
            </div>
            
            <About />
            
            {/* Clear float */}
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
      
      <DeskSetup />
      <Skills />
      <FitForge />
      <Projects />
      <QuickFix />
      <QuickFixAnalysis />
      <FreelanceProject />
      <Community />
      <GameShowcase />
      <Achievements />
      <Conclusion />
      
      {/* Optimized button with GPU acceleration */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/80 hover:bg-primary text-white shadow-lg z-40 transition-colors transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </motion.button>
      )}
    </main>
  );
};

// Memoized Index component for better performance
export default memo(Index);
