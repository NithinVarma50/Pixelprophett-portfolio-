
import { useEffect, useState, useCallback, useRef, memo } from "react";
import { motion } from "framer-motion";
import { shouldReduceAnimations, shouldEnableHighEndAnimations } from "@/lib/mobile-optimization";

const LokiEffects = () => {
  const reduceAnimations = shouldReduceAnimations();
  const highEndAnimations = shouldEnableHighEndAnimations();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportDimensions, setViewportDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const mouseThrottleRef = useRef<NodeJS.Timeout>();

  // Handle viewport resizing - useCallback at component level
  const handleResize = useCallback(() => {
    setViewportDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    let rafId: number;
    
    // Ultra-optimized mouse movement with RAF
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (!isScrolling) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
        rafId = 0;
      });
    };

    // Optimized scroll detection
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100); // Reduced timeout for more responsive animations
    };

    // Add event listeners with passive options for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial setup
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (mouseThrottleRef.current) {
        clearTimeout(mouseThrottleRef.current);
      }
    };
  }, [handleResize, isScrolling]);

  // Calculate positions for the effects based on mouse movement
  const xFactor = mousePosition.x / viewportDimensions.width;
  const yFactor = mousePosition.y / viewportDimensions.height;

  // Create trailing effects for mouse cursor
  const cursorTrailPositions = Array.from({ length: 5 }).map((_, i) => ({
    delay: i * 0.1,
    scale: 1 - (i * 0.15)
  }));

  // Ultra-optimized animation props with reduced complexity
  // On mobile or when reduced motion is preferred, disable most animations
  // On desktop (high-end), enable full rich animations
  const animationProps = (isScrolling || reduceAnimations) ? {
    // Minimal animations during scroll or on mobile for 60fps
    scale: 1,
    background: "radial-gradient(circle, rgba(57, 255, 20, 0.1) 0%, rgba(0, 0, 0, 0) 70%)"
  } : highEndAnimations ? {
    // HIGH-END DESKTOP: Full rich animations with enhanced effects
    scale: [1, 1.15, 1], // More dramatic scale for desktop
    background: [
      "radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
      "radial-gradient(circle, rgba(57, 255, 20, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
      "radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
    ]
  } : {
    // Simplified animations when not scrolling (tablet/small desktop)
    scale: [1, 1.05, 1], // Reduced scale for better performance
    background: [
      "radial-gradient(circle, rgba(57, 255, 20, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
      "radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
      "radial-gradient(circle, rgba(57, 255, 20, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
    ]
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden hw-accelerated">
      {/* Main Loki magic green glow effect - optimized */}
      <motion.div 
        className="absolute w-[50vw] h-[50vh] rounded-full hw-accelerated"
        animate={{
          x: (isScrolling || reduceAnimations) ? 0 : (highEndAnimations ? xFactor * 30 - 15 : xFactor * 20 - 10),
          y: (isScrolling || reduceAnimations) ? 0 : (highEndAnimations ? yFactor * 30 - 15 : yFactor * 20 - 10),
          ...animationProps
        }}
        transition={{
          x: { duration: (isScrolling || reduceAnimations) ? 0.1 : (highEndAnimations ? 2 : 1.5), ease: "easeOut" },
          y: { duration: (isScrolling || reduceAnimations) ? 0.1 : (highEndAnimations ? 2 : 1.5), ease: "easeOut" },
          scale: { duration: (isScrolling || reduceAnimations) ? 0 : (highEndAnimations ? 10 : 8), repeat: (isScrolling || reduceAnimations) ? 0 : Infinity, ease: "easeInOut" },
          background: { duration: (isScrolling || reduceAnimations) ? 0 : (highEndAnimations ? 5 : 4), repeat: (isScrolling || reduceAnimations) ? 0 : Infinity, ease: "easeInOut" }
        }}
        style={{
          left: "30%",
          top: "20%",
          filter: "blur(50px)",
          willChange: "transform, background"
        }}
      />
      
      {/* Simplified secondary effect during scroll - disabled on mobile */}
      {/* HIGH-END DESKTOP: Enhanced secondary effect with more particles */}
      {!isScrolling && !reduceAnimations && (
        <motion.div 
          className="absolute w-[40vw] h-[40vh] rounded-full hw-accelerated"
          animate={{
            x: -xFactor * (highEndAnimations ? 20 : 15),
            y: -yFactor * (highEndAnimations ? 20 : 15),
            scale: [1, highEndAnimations ? 1.25 : 1.15, 1],
            background: highEndAnimations ? [
              "radial-gradient(circle, rgba(18, 110, 10, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle, rgba(57, 255, 20, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle, rgba(18, 110, 10, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
            ] : [
              "radial-gradient(circle, rgba(18, 110, 10, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle, rgba(57, 255, 20, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle, rgba(18, 110, 10, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
            ]
          }}
          transition={{
            x: { duration: highEndAnimations ? 2.5 : 2, ease: "easeOut" },
            y: { duration: highEndAnimations ? 2.5 : 2, ease: "easeOut" },
            scale: { duration: highEndAnimations ? 12 : 10, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
            background: { duration: highEndAnimations ? 6 : 5, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            right: "20%",
            bottom: "30%",
            filter: "blur(40px)",
            willChange: "transform, background"
          }}
        />
      )}
      
      {/* Simplified timeline effect during scroll */}
      <motion.div 
        className="absolute w-[100%] h-[2px] hw-accelerated"
        style={{
          top: "50%",
          backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.6) 50%, rgba(0,0,0,0) 100%)",
          boxShadow: "0 0 15px rgba(57,255,20,0.4)",
          willChange: "transform, opacity"
        }}
        animate={{
          scaleX: (isScrolling || reduceAnimations) ? 1 : [0.8, 1, 0.8],
          opacity: (isScrolling || reduceAnimations) ? 0.3 : [0.4, 0.6, 0.4],
          y: (isScrolling || reduceAnimations) ? 0 : yFactor * 30 - 15
        }}
        transition={{
          scaleX: { duration: (isScrolling || reduceAnimations) ? 0 : 6, repeat: (isScrolling || reduceAnimations) ? 0 : Infinity, ease: "easeInOut" },
          opacity: { duration: (isScrolling || reduceAnimations) ? 0 : 6, repeat: (isScrolling || reduceAnimations) ? 0 : Infinity, ease: "easeInOut" },
          y: { duration: (isScrolling || reduceAnimations) ? 0.1 : 2, ease: "easeOut" }
        }}
      />
      
      {/* Optimized timeline branch lines - reduced count for better performance - disabled on mobile */}
      {!reduceAnimations && (!isScrolling ? [...Array(2)] : [...Array(1)]).map((_, i) => (
        <motion.div
          key={`timeline-${i}`}
          className="absolute h-[1px] hw-accelerated"
          style={{
            top: `${30 + i * 30}%`,
            width: "100%",
            backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.2) 50%, rgba(0,0,0,0) 100%)",
            boxShadow: "0 0 4px rgba(57,255,20,0.2)",
            willChange: "transform, opacity"
          }}
          animate={{
            opacity: isScrolling ? 0.05 : [0.1, 0.2, 0.1],
            scaleX: isScrolling ? 1 : [0.95, 1, 0.95],
            x: isScrolling ? 0 : (i % 2 === 0 ? 1 : -1) * (xFactor * 10 - 5)
          }}
          transition={{
            opacity: { duration: isScrolling ? 0 : 6 + i, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut", repeatType: "reverse" },
            scaleX: { duration: isScrolling ? 0 : 8 + i, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut", repeatType: "reverse" },
            x: { duration: isScrolling ? 0.1 : 3, ease: "easeOut" }
          }}
        />
      ))}
      
      {/* Optimized runes - HIGH-END DESKTOP gets more runes */}
      {!reduceAnimations && (!isScrolling ? [...Array(highEndAnimations ? 6 : 4)] : [...Array(1)]).map((_, i) => (
        <motion.div
          key={`rune-${i}`}
          className="absolute rounded-full bg-primary/40 hw-accelerated"
          style={{
            width: 3 + i,
            height: 3 + i,
            left: `${20 + i * 20}%`,
            top: `${20 + i * 20}%`,
            boxShadow: "0 0 4px rgba(57,255,20,0.3), 0 0 8px rgba(57,255,20,0.1)",
            filter: "blur(0.5px)",
            willChange: "transform, opacity"
          }}
          animate={{
            opacity: isScrolling ? 0.1 : [0, 0.4, 0],
            scale: isScrolling ? 1 : [0, 1.1, 0],
          }}
          transition={{
            duration: isScrolling ? 0 : 4 + i,
            repeat: isScrolling ? 0 : Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Optimized cursor trail - HIGH-END DESKTOP gets more particles */}
      {!isScrolling && !reduceAnimations && cursorTrailPositions.slice(0, highEndAnimations ? 4 : 2).map((trail, i) => (
        <motion.div
          key={`cursor-trail-${i}`}
          className="absolute w-[20px] h-[20px] rounded-full hw-accelerated"
          style={{
            background: "radial-gradient(circle, rgba(57,255,20,0.3) 0%, rgba(0,0,0,0) 70%)",
            boxShadow: "0 0 6px rgba(57,255,20,0.1)",
            filter: "blur(1px)",
            willChange: "transform, opacity"
          }}
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            scale: trail.scale,
            opacity: [0.4, 0]
          }}
          transition={{
            x: { duration: 0.2, ease: "linear", delay: trail.delay },
            y: { duration: 0.2, ease: "linear", delay: trail.delay },
            opacity: { duration: 0.2, ease: "easeOut" }
          }}
        />
      ))}

      {/* Sacred timeline "prune" effect - only when not scrolling - disabled on mobile */}
      {!isScrolling && !reduceAnimations && (
        <motion.div
          className="absolute w-full h-[2px] left-0 origin-left hw-accelerated"
          style={{ 
            top: "50%", 
            background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,140,0,0.6) 50%, rgba(0,0,0,0) 100%)",
            boxShadow: "0 0 20px rgba(255,140,0,0.6)",
            willChange: "transform, opacity"
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 15,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* TVA logo effect - simplified during scroll */}
      <motion.div
        className="absolute w-[150px] h-[150px] hw-accelerated"
        style={{
          left: "calc(50% - 75px)",
          top: "calc(35% - 75px)",
          borderRadius: "50%",
          border: "1px solid rgba(57,255,20,0.2)",
          boxShadow: "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.1)",
          willChange: "transform, border-color, box-shadow"
        }}
        animate={{
          rotate: (isScrolling || reduceAnimations) ? 0 : [0, 360],
          borderColor: (isScrolling || reduceAnimations) ? "rgba(57,255,20,0.2)" : highEndAnimations ? ["rgba(57,255,20,0.2)", "rgba(57,255,20,0.7)", "rgba(57,255,20,0.2)"] : ["rgba(57,255,20,0.2)", "rgba(57,255,20,0.5)", "rgba(57,255,20,0.2)"],
          boxShadow: (isScrolling || reduceAnimations) ? 
            "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.1)" :
            highEndAnimations ? [
              "inset 0 0 20px rgba(57,255,20,0.15), 0 0 20px rgba(57,255,20,0.15)",
              "inset 0 0 40px rgba(57,255,20,0.3), 0 0 40px rgba(57,255,20,0.4)",
              "inset 0 0 20px rgba(57,255,20,0.15), 0 0 20px rgba(57,255,20,0.15)"
            ] : [
              "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.1)",
              "inset 0 0 30px rgba(57,255,20,0.2), 0 0 30px rgba(57,255,20,0.3)",
              "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.1)"
            ]
        }}
        transition={{
          rotate: { duration: (isScrolling || reduceAnimations) ? 0 : 25, repeat: (isScrolling || reduceAnimations) ? 0 : Infinity, ease: "linear" },
          borderColor: { duration: (isScrolling || reduceAnimations) ? 0 : 6, repeat: (isScrolling || reduceAnimations) ? 0 : Infinity, ease: "easeInOut" },
          boxShadow: { duration: (isScrolling || reduceAnimations) ? 0 : 6, repeat: (isScrolling || reduceAnimations) ? 0 : Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
};

// Memoized LokiEffects for better performance
export default memo(LokiEffects);
