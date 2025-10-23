import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background";

export default function ShaderShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-6">
          Interactive Visualization
        </h2>
        <p className="text-lg sm:text-xl text-primary font-medium">
          WebGL Shader Animation
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative w-full max-w-5xl mx-auto"
      >
        {/* Frame/Cover around the animation */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-background/5 backdrop-blur-sm p-2 sm:p-4 shadow-2xl">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
          
          {/* Shader animation container */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
            <ShaderBackground />
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl -z-10" />
        </div>

        {/* Description below */}
        <div className="mt-6 text-center">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A real-time WebGL shader animation featuring dynamic plasma waves and particle effects.
            Showcasing technical creativity and visual computing skills.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
