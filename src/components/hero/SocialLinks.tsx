
import { motion } from "framer-motion";
import { Github, Instagram } from "lucide-react";
import { Icon } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { lazy, Suspense } from "react";

const DiscordIcon = lazy(dynamicIconImports.discord);

export default function SocialLinks() {
  return (
    <motion.div 
      className="flex gap-6 justify-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.5 }}
    >
      <motion.a 
        href="https://www.instagram.com/this_is_nithinvarma?igsh=ZmRjcGVsOGp4enlq" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors p-2 rounded-full hover:bg-foreground/5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Instagram className="w-6 h-6" />
      </motion.a>
      <motion.a 
        href="https://discordapp.com/users/1028715157720944722" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors p-2 rounded-full hover:bg-foreground/5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Suspense fallback={<div className="w-6 h-6" />}>
          <DiscordIcon className="w-6 h-6" />
        </Suspense>
      </motion.a>
      <motion.a 
        href="https://github.com/NithinVarma50" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors p-2 rounded-full hover:bg-foreground/5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Github className="w-6 h-6" />
      </motion.a>
    </motion.div>
  );
}
