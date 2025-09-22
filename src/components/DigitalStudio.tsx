import { motion } from "framer-motion";
import { ExternalLink, Monitor, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import roomScreenshot1 from "@/assets/room-screenshot-1.png";
import roomScreenshot2 from "@/assets/room-screenshot-2.png";
import roomScreenshot3 from "@/assets/room-screenshot-3.png";
import roomScreenshot4 from "@/assets/room-screenshot-4.png";
import roomScreenshot5 from "@/assets/room-screenshot-5.png";
import roomScreenshot6 from "@/assets/room-screenshot-6.png";

const screenshots = [
  { src: roomScreenshot1, alt: "3D Room Overview" },
  { src: roomScreenshot2, alt: "Workspace Detail" },
  { src: roomScreenshot3, alt: "Side Angle View" },
  { src: roomScreenshot4, alt: "Top Down View" },
  { src: roomScreenshot5, alt: "Front View" },
  { src: roomScreenshot6, alt: "Close-up Detail" },
];

const features = [
  {
    icon: Monitor,
    title: "Interactive 3D Environment",
    description: "Fully navigable 3D workspace with realistic lighting and shadows"
  },
  {
    icon: Palette,
    title: "Dynamic Lighting System",
    description: "Customizable ambient lighting with real-time color adjustments"
  },
  {
    icon: Zap,
    title: "Real-time Rendering",
    description: "Smooth performance with optimized 3D graphics and animations"
  }
];

export default function DigitalStudio() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            My Virtual Workspace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience an immersive 3D environment where innovation comes to life - my digital creative studio
          </p>
        </motion.div>

        {/* Main Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-to-br from-card/80 to-muted/30 border-primary/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Interactive 3D Workspace
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  A cutting-edge virtual environment showcasing advanced web technologies. 
                  Features real-time lighting controls, photorealistic materials, and fluid 
                  interactions that bring digital creativity to life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a
                      href="https://pixelprophett-portfolio-3d-room.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Explore Workspace
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                >
                  <img
                    src={roomScreenshot1}
                    alt="3D Room Overview"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technical Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Screenshot Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Visual Showcase</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.slice(1).map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{screenshot.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}