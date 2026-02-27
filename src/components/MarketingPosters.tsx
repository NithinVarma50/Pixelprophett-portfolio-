import { motion } from "framer-motion";
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from "@/components/ui/progressive-carousel";
import { Palette } from "lucide-react";

import poster1 from "@/assets/posters/poster-1.png";
import poster2 from "@/assets/posters/poster-2.png";
import poster3 from "@/assets/posters/poster-3.jpg";

const items = [
  {
    img: poster1,
    title: "Brand Identity",
    desc: "Visual identity design capturing bold aesthetics and modern branding principles.",
    sliderName: "poster-1",
  },
  {
    img: poster2,
    title: "Social Campaign",
    desc: "LinkedIn marketing poster designed to drive engagement and professional presence.",
    sliderName: "poster-2",
  },
  {
    img: poster3,
    title: "PXPLab Branding",
    desc: "Clean logo and brand identity design for PXPLab creative studio.",
    sliderName: "poster-3",
  },
];

export default function MarketingPosters() {
  return (
    <section className="section-padding bg-secondary/20" id="posters">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Palette className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Graphic Design
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Marketing & Poster Design
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of marketing posters and brand visuals I've designed — blending bold typography, color theory, and clean layouts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProgressSlider
            activeSlider={items[0].sliderName}
            duration={4000}
            className="w-full"
          >
            <SliderContent className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/50 bg-card">
              {items.map((item) => (
                <SliderWrapper
                  key={item.sliderName}
                  value={item.sliderName}
                  className="absolute inset-0"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain bg-background/50"
                    loading="lazy"
                  />
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {items.map((item) => (
                <SliderBtn
                  key={item.sliderName}
                  value={item.sliderName}
                  className="p-4 rounded-lg border border-border/30 bg-card/50 hover:bg-card transition-colors"
                  progressBarClass="mt-3"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
          </ProgressSlider>
        </motion.div>
      </div>
    </section>
  );
}
