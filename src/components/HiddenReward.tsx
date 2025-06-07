
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

export default function HiddenReward() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(true);
    // Auto-hide after 3 seconds
    setTimeout(() => setIsRevealed(false), 3000);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.button
        onClick={handleClick}
        className="w-6 h-6 flex items-center justify-center text-primary/40 hover:text-primary/70 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Eye className="w-4 h-4" />
      </motion.button>

      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-8 left-0 min-w-max"
          >
            <div className="glass loki-border px-4 py-2 rounded-lg shadow-lg">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-sm loki-text font-medium"
              >
                Congratulations, you got ₹3
              </motion.p>
              <motion.div
                className="absolute -bottom-1 left-4 w-2 h-2 bg-background/80 border-r border-b border-primary/20 transform rotate-45"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
