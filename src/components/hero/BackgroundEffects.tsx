
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const orbs = useRef<Array<{ x: number; y: number; size: number; color: string }>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Reduced number of orbs for better performance
    const colors = [
      "rgba(57, 255, 20, 0.15)",
      "rgba(35, 192, 25, 0.12)",
      "rgba(0, 85, 35, 0.1)",
    ];
    
    orbs.current = [...Array(4)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 30,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

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
    <>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-black/90" />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#39ff14]/15 via-[#003300]/20 to-black blur-3xl opacity-60"
          animate={{ 
            x: xFactor * 10 - 5,
            y: yFactor * 10 - 5,
          }}
          transition={{ 
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 0.8, ease: "easeOut" },
          }}
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {orbs.current.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              backgroundColor: orb.color,
              willChange: "transform, opacity"
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Simplified timeline lines */}
        <motion.div
          className="absolute w-[60%] h-[1px] left-[20%]"
          style={{ 
            top: "30%", 
            background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(57,255,20,0.4) 50%, rgba(0,0,0,0) 100%)"
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
    </>
  );
}
