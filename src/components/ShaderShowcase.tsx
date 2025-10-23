import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background";

export default function ShaderShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] sm:h-[500px] overflow-hidden"
    >
      <ShaderBackground />
    </motion.div>
  );
}
