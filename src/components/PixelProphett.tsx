import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Palette, Code, Sparkles, Monitor } from "lucide-react";

export default function PixelProphett() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20" id="pixelprophett">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold playfair mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            PixelProphett
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">Digital Studio</p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-4">
            Where creativity meets technology. Crafting immersive 3D experiences, interactive web applications, and digital art that pushes the boundaries of what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="hover-card loki-glass border-primary/20 h-full">
              <CardContent className="p-6 text-center">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-3 loki-text">3D Experiences</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive 3D environments built with Three.js, featuring immersive room experiences and creative digital spaces.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="hover-card loki-glass border-primary/20 h-full">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-3 loki-text">Web Development</h3>
                <p className="text-sm text-muted-foreground">
                  Modern web applications with cutting-edge technologies, responsive design, and seamless user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="hover-card loki-glass border-primary/20 h-full">
              <CardContent className="p-6 text-center">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-3 loki-text">Digital Art</h3>
                <p className="text-sm text-muted-foreground">
                  Creative digital compositions, UI/UX design, and artistic web experiences that tell compelling stories.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mx-4">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 loki-text">Featured Project</h3>
            <p className="text-base sm:text-lg mb-6 text-muted-foreground">
              <strong>My Room in 3D</strong> - An immersive 3D environment showcasing advanced Three.js techniques, 
              GSAP animations, and interactive design elements.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">Three.js</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">GSAP</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">WebGL</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">Interactive Design</span>
            </div>
            <Button 
              className="mt-4 text-base sm:text-lg py-6 px-8 relative overflow-hidden group"
              size="lg"
            >
              <span className="relative z-10">Explore Portfolio</span>
              <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></span>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}