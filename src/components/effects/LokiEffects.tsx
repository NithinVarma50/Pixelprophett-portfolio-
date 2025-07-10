
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const LokiEffects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    // Throttled mouse movement handler for better performance
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      
      animationFrame.current = requestAnimationFrame(() => {
        mousePosition.current = { x: e.clientX, y: e.clientY };
      });
    };

    // Add event listeners with passive option for better scrolling performance
    checkMobile();
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    window.addEventListener('resize', checkMobile, { passive: true });

    // Cleanup
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden hw-accelerated">
      {/* Simplified mobile-optimized background glow */}
      <div 
        className="absolute w-full h-full animate-loki-pulse"
        style={{
          background: "radial-gradient(circle at 30% 20%, rgba(57, 255, 20, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
          filter: "blur(40px)",
          willChange: "opacity, transform"
        }}
      />
      
      {/* Secondary glow effect */}
      <div 
        className="absolute w-full h-full animate-magic-flicker"
        style={{
          background: "radial-gradient(circle at 70% 80%, rgba(57, 255, 20, 0.1) 0%, rgba(0, 0, 0, 0) 40%)",
          filter: "blur(30px)",
          willChange: "opacity"
        }}
      />
      
      {/* CSS-based timeline effect for better performance */}
      <div 
        className="absolute w-full h-[2px] top-1/2 animate-timeline-branch"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.6) 50%, rgba(0,0,0,0) 100%)",
          boxShadow: "0 0 15px rgba(57,255,20,0.4)",
          willChange: "transform, opacity"
        }}
      />
      
      {/* Reduced number of timeline branch lines for mobile */}
      {!isMobile && [...Array(3)].map((_, i) => (
        <div
          key={`timeline-${i}`}
          className="absolute h-[1px] w-full animate-timeline-branch"
          style={{
            top: `${20 + i * 30}%`,
            background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.4) 50%, rgba(0,0,0,0) 100%)",
            boxShadow: "0 0 6px rgba(57,255,20,0.3)",
            animationDelay: `${i * 0.5}s`,
            willChange: "transform, opacity"
          }}
        />
      ))}
      
      {/* Reduced number of glowing runes for better performance */}
      {[...Array(isMobile ? 3 : 6)].map((_, i) => (
        <div
          key={`rune-${i}`}
          className="absolute rounded-full bg-primary animate-magic-flicker"
          style={{
            width: isMobile ? 3 : 5,
            height: isMobile ? 3 : 5,
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            boxShadow: isMobile ? "0 0 5px rgba(57,255,20,0.6)" : "0 0 8px rgba(57,255,20,0.8)",
            animationDelay: `${i * 0.8}s`,
            willChange: "opacity, transform"
          }}
        />
      ))}

      {/* CSS-based rune circle for better performance */}
      <div
        className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-primary/30 animate-rune-rotate"
        style={{
          left: "calc(50% - 75px)",
          top: "calc(40% - 75px)",
          boxShadow: "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.2)",
          willChange: "transform"
        }}
      />
      
      {/* Mobile-optimized prune effect */}
      {!isMobile && (
        <div
          className="absolute w-full h-[2px] left-0 top-1/2"
          style={{ 
            background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,140,0,0.6) 50%, rgba(0,0,0,0) 100%)",
            boxShadow: "0 0 20px rgba(255,140,0,0.6)",
            animation: "timeline-branch 12s infinite ease-in-out",
            animationDelay: "5s",
            willChange: "transform, opacity"
          }}
        />
      )}
    </div>
  );
};

export default LokiEffects;
