
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

// Enhanced loading component for lazy-loaded sections
const SectionLoader = () => (
  <motion.div 
    className="py-16 px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Skeleton className="h-8 w-1/3 mx-auto mb-8" />
    <Skeleton className="h-4 w-2/3 mx-auto mb-4" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <Skeleton className="h-32 rounded-md" />
      <Skeleton className="h-32 rounded-md" />
      <Skeleton className="h-32 rounded-md" />
      <Skeleton className="h-32 rounded-md" />
    </div>
  </motion.div>
);

const Index = () => {
  // Ultra-smooth scroll tracking with optimized performance
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });
  
  // Enhanced spring physics for buttery smooth movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 35,
    restDelta: 0.0001,
    mass: 0.3
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollingRef = useRef(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    // Ultra-optimized scroll handler with RAF throttling
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!scrollingRef.current) {
            setShowScrollButton(window.scrollY > window.innerHeight * 0.4);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { 
      passive: true,
      capture: false 
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    }, 1200);
  };

  return (
    <main className="min-h-screen relative will-change-scroll">
      {/* Ultra-smooth progress bar with enhanced styling */}
      <motion.div 
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary z-[100] transform-gpu shadow-sm shadow-primary/50"
        style={{ 
          scaleX,
          transformOrigin: "left"
        }}
        aria-hidden="true"
      />
      
      {/* Optimized initial render */}
      <LokiEffects />
      <Hero />
      
      {/* Enhanced lazy-loaded sections with better transitions */}
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
      
      {/* Enhanced scroll-to-top button with smoother animations */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-primary/90 hover:bg-primary text-white shadow-xl shadow-primary/25 z-40 transition-all duration-300 transform-gpu backdrop-blur-sm border border-primary/20"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.8
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 25px rgba(57, 255, 20, 0.4)"
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </motion.svg>
        </motion.button>
      )}
    </main>
  );
};

export default Index;
