import { useEffect, useState, useRef, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import { motion, useScroll, useSpring } from "framer-motion";
import LokiEffects from "@/components/effects/LokiEffects";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const QuickFix = lazy(() => import("@/components/QuickFix"));
const QuickFixAnalysis = lazy(() => import("@/components/QuickFixAnalysis"));
const GameShowcase = lazy(() => import("@/components/GameShowcase"));
const Achievements = lazy(() => import("@/components/Achievements"));
const Conclusion = lazy(() => import("@/components/Conclusion"));

// Optimized loading component
const SectionLoader = () => (
  <div className="py-16 px-4">
    <Skeleton className="h-8 w-1/3 mx-auto mb-8" />
    <Skeleton className="h-4 w-2/3 mx-auto mb-4" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <Skeleton className="h-24 rounded-md" />
      <Skeleton className="h-24 rounded-md" />
    </div>
  </div>
);

const Index = () => {
  // Optimized scroll tracking with reduced updates
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });
  
  // More responsive spring physics with reduced calculations
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
    mass: 0.3
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollingRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Throttled scroll handler for better performance
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update if scroll difference is significant
      if (Math.abs(currentScrollY - lastScrollY.current) > 50) {
        if (!scrollingRef.current) {
          setShowScrollButton(currentScrollY > window.innerHeight * 0.3);
        }
        lastScrollY.current = currentScrollY;
      }
    };
    
    // Use passive listener and throttle updates
    let ticking = false;
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
  }, []);
  
  const scrollToTop = () => {
    scrollingRef.current = true;
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    setTimeout(() => {
      scrollingRef.current = false;
    }, 800);
  };

  return (
    <main className="min-h-screen relative">
      {/* Optimized progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100]"
        style={{ 
          scaleX,
          transformOrigin: "left",
          willChange: "transform"
        }}
        aria-hidden="true"
      />
      
      {/* Load effects and hero immediately */}
      <LokiEffects />
      <Hero />
      
      {/* Lazy-loaded sections with suspense fallbacks */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <QuickFix />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <QuickFixAnalysis />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <GameShowcase />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Achievements />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Conclusion />
      </Suspense>
      
      {/* Optimized scroll button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/80 hover:bg-primary text-white shadow-lg z-40 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ willChange: "transform" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </motion.button>
      )}
    </main>
  );
};

export default Index;
