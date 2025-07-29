
import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const LokiEffects = () => {
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
    // Throttled mouse movement for better performance
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseThrottleRef.current) return;
      mouseThrottleRef.current = setTimeout(() => {
        if (!isScrolling) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
        mouseThrottleRef.current = undefined;
      }, 16); // ~60fps
    };

    // Detect scrolling to reduce animation complexity
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
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

  // Reduced animation complexity during scroll
  const animationProps = isScrolling ? {
    // Simplified animations during scroll
    scale: 1,
    background: "radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, rgba(0, 0, 0, 0) 70%)"
  } : {
    // Full animations when not scrolling
    scale: [1, 1.1, 1],
    background: [
      "radial-gradient(circle, rgba(57, 255, 20, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
      "radial-gradient(circle, rgba(57, 255, 20, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
      "radial-gradient(circle, rgba(57, 255, 20, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
    ]
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden hw-accelerated">
      {/* Main Loki magic green glow effect - optimized */}
      <motion.div 
        className="absolute w-[50vw] h-[50vh] rounded-full hw-accelerated"
        animate={{
          x: isScrolling ? 0 : xFactor * 20 - 10,
          y: isScrolling ? 0 : yFactor * 20 - 10,
          ...animationProps
        }}
        transition={{
          x: { duration: isScrolling ? 0.1 : 1.5, ease: "easeOut" },
          y: { duration: isScrolling ? 0.1 : 1.5, ease: "easeOut" },
          scale: { duration: isScrolling ? 0 : 8, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut" },
          background: { duration: isScrolling ? 0 : 4, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut" }
        }}
        style={{
          left: "30%",
          top: "20%",
          filter: "blur(50px)",
          willChange: "transform, background"
        }}
      />
      
      {/* Simplified secondary effect during scroll */}
      {!isScrolling && (
        <motion.div 
          className="absolute w-[40vw] h-[40vh] rounded-full hw-accelerated"
          animate={{
            x: -xFactor * 15,
            y: -yFactor * 15,
            scale: [1, 1.15, 1],
            background: [
              "radial-gradient(circle, rgba(18, 110, 10, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle, rgba(57, 255, 20, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle, rgba(18, 110, 10, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
            ]
          }}
          transition={{
            x: { duration: 2, ease: "easeOut" },
            y: { duration: 2, ease: "easeOut" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
            background: { duration: 5, repeat: Infinity, ease: "easeInOut" }
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
          scaleX: isScrolling ? 1 : [0.8, 1, 0.8],
          opacity: isScrolling ? 0.3 : [0.4, 0.6, 0.4],
          y: isScrolling ? 0 : yFactor * 30 - 15
        }}
        transition={{
          scaleX: { duration: isScrolling ? 0 : 6, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut" },
          opacity: { duration: isScrolling ? 0 : 6, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut" },
          y: { duration: isScrolling ? 0.1 : 2, ease: "easeOut" }
        }}
      />
      
      {/* Reduced timeline branch lines during scroll */}
      {(!isScrolling ? [...Array(4)] : [...Array(2)]).map((_, i) => (
        <motion.div
          key={`timeline-${i}`}
          className="absolute h-[1px] hw-accelerated"
          style={{
            top: `${20 + i * 20}%`,
            width: "100%",
            backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.3) 50%, rgba(0,0,0,0) 100%)",
            boxShadow: "0 0 6px rgba(57,255,20,0.3)",
            willChange: "transform, opacity"
          }}
          animate={{
            opacity: isScrolling ? 0.1 : [0.1, 0.3, 0.1],
            scaleX: isScrolling ? 1 : [0.9, 1, 0.9],
            x: isScrolling ? 0 : (i % 2 === 0 ? 1 : -1) * (xFactor * 15 - 7.5)
          }}
          transition={{
            opacity: { duration: isScrolling ? 0 : 4 + i, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut", repeatType: "reverse" },
            scaleX: { duration: isScrolling ? 0 : 5 + i, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut", repeatType: "reverse" },
            x: { duration: isScrolling ? 0.1 : 2, ease: "easeOut" }
          }}
        />
      ))}
      
      {/* Reduced runes during scroll */}
      {(!isScrolling ? [...Array(8)] : [...Array(3)]).map((_, i) => (
        <motion.div
          key={`rune-${i}`}
          className="absolute rounded-full bg-primary/60 hw-accelerated"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 8px rgba(57,255,20,0.6), 0 0 15px rgba(57,255,20,0.3)",
            filter: "blur(1px)",
            willChange: "transform, opacity"
          }}
          animate={{
            opacity: isScrolling ? 0.2 : [0, 0.8, 0],
            scale: isScrolling ? 1 : [0, 1.3, 0],
          }}
          transition={{
            duration: isScrolling ? 0 : Math.random() * 3 + 2,
            repeat: isScrolling ? 0 : Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Cursor trail only when not scrolling */}
      {!isScrolling && cursorTrailPositions.slice(0, 3).map((trail, i) => (
        <motion.div
          key={`cursor-trail-${i}`}
          className="absolute w-[30px] h-[30px] rounded-full hw-accelerated"
          style={{
            background: "radial-gradient(circle, rgba(57,255,20,0.4) 0%, rgba(0,0,0,0) 70%)",
            boxShadow: "0 0 10px rgba(57,255,20,0.2)",
            filter: "blur(2px)",
            willChange: "transform, opacity"
          }}
          animate={{
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
            scale: trail.scale,
            opacity: [0.6, 0]
          }}
          transition={{
            x: { duration: 0.3, ease: "linear", delay: trail.delay },
            y: { duration: 0.3, ease: "linear", delay: trail.delay },
            opacity: { duration: 0.3, ease: "easeOut" }
          }}
        />
      ))}

      {/* Sacred timeline "prune" effect - only when not scrolling */}
      {!isScrolling && (
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
          rotate: isScrolling ? 0 : [0, 360],
          borderColor: isScrolling ? "rgba(57,255,20,0.2)" : ["rgba(57,255,20,0.2)", "rgba(57,255,20,0.5)", "rgba(57,255,20,0.2)"],
          boxShadow: isScrolling ? 
            "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.1)" :
            [
              "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.1)",
              "inset 0 0 30px rgba(57,255,20,0.2), 0 0 30px rgba(57,255,20,0.3)",
              "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.1)"
            ]
        }}
        transition={{
          rotate: { duration: isScrolling ? 0 : 25, repeat: isScrolling ? 0 : Infinity, ease: "linear" },
          borderColor: { duration: isScrolling ? 0 : 6, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut" },
          boxShadow: { duration: isScrolling ? 0 : 6, repeat: isScrolling ? 0 : Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
};

export default LokiEffects;
