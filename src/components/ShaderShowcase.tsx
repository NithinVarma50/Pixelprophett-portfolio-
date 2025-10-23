import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background";

export default function ShaderShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-[300px] sm:h-[400px] relative overflow-hidden"
    >
      {/* Background gradient for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      {/* Horizontal flowing shader */}
      <div className="absolute inset-0 w-full h-full">
        <ShaderBackground />
      </div>
      
      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Interactive Shader Effects
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Real-time WebGL animations flowing horizontally across the screen
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
