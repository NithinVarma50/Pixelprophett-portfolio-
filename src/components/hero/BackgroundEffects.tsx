
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const [isMobile, setIsMobile] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();
  
  useEffect(() => {
    // Detect mobile for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Throttled mouse movement for better performance
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return; // Skip mouse tracking on mobile
      
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      
      animationFrame.current = requestAnimationFrame(() => {
        mousePosition.current = { x: e.clientX, y: e.clientY };
      });
    };

    checkMobile();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', checkMobile, { passive: true });
    
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <>
      <div className="absolute inset-0 -z-10 hw-accelerated">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-black/90" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#39ff14]/15 via-[#003300]/20 to-black blur-3xl opacity-60 animate-loki-pulse"
          style={{ willChange: "opacity, transform" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden hw-accelerated">
        {/* Simplified floating orbs for mobile performance */}
        {[...Array(isMobile ? 3 : 5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-magic-flicker"
            style={{
              width: isMobile ? 60 : 80,
              height: isMobile ? 60 : 80,
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              backgroundColor: i % 2 === 0 ? "rgba(57, 255, 20, 0.2)" : "rgba(35, 192, 25, 0.15)",
              boxShadow: i % 2 === 0 ? "0 0 20px rgba(57, 255, 20, 0.3)" : "none",
              filter: "blur(2px)",
              animationDelay: `${i * 0.5}s`,
              willChange: "opacity, transform"
            }}
          />
        ))}
        
        {/* CSS-based timeline lines for better performance */}
        <div
          className="absolute w-[80%] h-[1px] left-[10%] animate-timeline-branch"
          style={{ 
            top: "30%", 
            boxShadow: "0 0 12px #39ff14",
            background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.6) 50%, rgba(0,0,0,0) 100%)",
            willChange: "transform, opacity"
          }}
        />
        
        {!isMobile && (
          <div
            className="absolute w-[60%] h-[1px] left-[20%] animate-timeline-branch"
            style={{ 
              top: "70%", 
              boxShadow: "0 0 10px #39ff14",
              background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.5) 50%, rgba(0,0,0,0) 100%)",
              animationDelay: "2s",
              willChange: "transform, opacity"
            }}
          />
        )}
        
        {/* CSS-based magic rune circles for better performance */}
        <div
          className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-[#39ff14]/25 animate-rune-rotate"
          style={{
            left: "calc(50% - 100px)",
            top: "calc(50% - 100px)",
            borderWidth: "1px",
            boxShadow: "inset 0 0 15px rgba(57,255,20,0.1), 0 0 15px rgba(57,255,20,0.2)",
            willChange: "transform"
          }}
        />
        
        {!isMobile && (
          <div
            className="absolute w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full border border-[#39ff14]/35 animate-rune-rotate"
            style={{
              left: "calc(50% - 60px)",
              top: "calc(50% - 60px)",
              borderWidth: "1px",
              animationDirection: "reverse",
              animationDuration: "15s",
              willChange: "transform"
            }}
          />
        )}
      </div>
    </>
  );
}
