
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LokiEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const xFactor = typeof window !== 'undefined' ? mousePosition.x / window.innerWidth : 0;
  const yFactor = typeof window !== 'undefined' ? mousePosition.y / window.innerHeight : 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Simplified main glow effect */}
      <motion.div 
        className="absolute w-[40vw] h-[40vh] rounded-full"
        animate={{
          x: xFactor * 20 - 10,
          y: yFactor * 20 - 10,
          background: [
            "radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
            "radial-gradient(circle, rgba(57, 255, 20, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
            "radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          ]
        }}
        transition={{
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" },
          background: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          left: "30%",
          top: "20%",
          filter: "blur(40px)",
          willChange: "transform"
        }}
      />
      
      {/* Simplified timeline effect */}
      <motion.div 
        className="absolute w-full h-[1px]"
        style={{
          top: "50%",
          backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.4) 50%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
          y: yFactor * 30 - 15
        }}
        transition={{
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 1, ease: "easeOut" }
        }}
      />
      
      {/* Reduced number of floating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-[#39ff14]"
          style={{
            width: 3,
            height: 3,
            left: `${20 + i * 20}%`,
            top: `${20 + i * 20}%`,
            filter: "blur(1px)"
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Simplified rune circle */}
      <motion.div
        className="absolute w-[200px] h-[200px]"
        style={{
          left: "calc(50% - 100px)",
          top: "calc(30% - 100px)",
          borderRadius: "50%",
          border: "1px solid rgba(57,255,20,0.2)",
        }}
        animate={{
          rotate: [0, 360],
          borderColor: ["rgba(57,255,20,0.2)", "rgba(57,255,20,0.4)", "rgba(57,255,20,0.2)"]
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          borderColor: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
};

export default LokiEffects;
