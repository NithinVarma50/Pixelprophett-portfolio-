import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Import images
import automationRed from "@/assets/posters/automation-red.png";
import systemGreen from "@/assets/posters/system-green.png";
import onlinePresence from "@/assets/posters/online-presence.png";
import moreTime from "@/assets/posters/more-time.png";
import weirdoReal from "@/assets/posters/weirdo-real.png";
import identicalOnline from "@/assets/posters/identical-online.png";
import systemsBeatEffort from "@/assets/posters/systems-beat-effort.png";
import buildBeyond from "@/assets/posters/build-beyond.png";
import ignitionMembers from "@/assets/posters/ignition-members.png";
import ignitionQuality from "@/assets/posters/ignition-quality.png";

interface Poster {
  id: number;
  src: string;
  title: string;
  description: string;
  color: string;
}

const posters: Poster[] = [
  {
    id: 1,
    src: automationRed,
    title: "Automate Work",
    description: "You can't buy time, but you can automate repetitive tasks to focus on growth.",
    color: "bg-red-500/10 text-red-500"
  },
  {
    id: 2,
    src: systemGreen,
    title: "The System Behind",
    description: "We are the invisible architecture that powers your business success.",
    color: "bg-green-500/10 text-green-500"
  },
  {
    id: 3,
    src: onlinePresence,
    title: "Better Presence",
    description: "You know you need it. We help you understand 'how' to achieve it.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 4,
    src: moreTime,
    title: "Maximize Time",
    description: "Smart websites and automated workflows to help you get more out of your day.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    id: 5,
    src: weirdoReal,
    title: "Authenticity",
    description: "Automate like a pro without losing the real human connection.",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    id: 6,
    src: identicalOnline,
    title: "Stand Out",
    description: "Most businesses look identical. Don't let your brand be forgotten.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    id: 7,
    src: systemsBeatEffort,
    title: "Systems > Effort",
    description: "Raw effort isn't enough. Superior systems yield superior results.",
    color: "bg-zinc-500/10 text-zinc-500"
  },
  {
    id: 8,
    src: buildBeyond,
    title: "Build Beyond",
    description: "Don't settle for ordinary. Create digital experiences that leave a mark.",
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    id: 9,
    src: ignitionMembers,
    title: "Community Growth",
    description: "Ignition: A community joined by 3,000+ builders, learners, and founders.",
    color: "bg-blue-600/10 text-blue-600"
  },
  {
    id: 10,
    src: ignitionQuality,
    title: "Quality First",
    description: "A community focused on quality over quantity. No unnecessary noise.",
    color: "bg-orange-600/10 text-orange-600"
  }
];
export default function MarketingPosters() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const activePoster = posters[selectedIndex] || posters[0];

  return (
    <section className="section-padding relative overflow-hidden" id="marketing">
      <div className="max-w-6xl mx-auto container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Marketing <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visual storytelling designed to convert. A collection of marketing assets
            created for various campaigns and brand identities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">

          {/* Carousel Frame */}
          <div className="w-full lg:w-3/5 relative group">
            <div
              className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 aspect-[4/5] sm:aspect-[16/10] lg:aspect-square flex items-center justify-center relative touch-pan-y"
              ref={emblaRef}
            >
              <div className="flex w-full h-full">
                {posters.map((poster) => (
                  <div
                    className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-6 h-full relative"
                    key={poster.id}
                  >
                    <img
                      src={poster.src}
                      alt={poster.title}
                      className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-black hover:scale-110 transition-all z-10"
              aria-label="Previous poster"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-black hover:scale-110 transition-all z-10"
              aria-label="Next poster"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expand Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-primary hover:text-white transition-all z-10 opacity-100 lg:opacity-0 group-hover:opacity-100"
                  title="View full screen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-white/10 w-[95vw] sm:w-full">
                <div className="relative w-full h-[85vh] sm:h-auto sm:max-h-[90vh] flex flex-col md:flex-row">
                  <div className="w-full h-1/2 md:h-auto md:w-2/3 bg-black flex items-center justify-center p-4">
                    <img
                      src={activePoster.src}
                      alt={activePoster.title}
                      className="max-h-full w-auto object-contain rounded-sm"
                    />
                  </div>
                  <div className="w-full h-1/2 md:h-auto md:w-1/3 p-6 md:p-8 flex flex-col justify-center bg-card/5 border-t md:border-t-0 md:border-l border-white/5 overflow-y-auto">
                    <div className={cn("inline-flex self-start px-3 py-1 rounded-full text-xs font-medium mb-4", activePoster.color)}>
                      Marketing Asset
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold mb-4">{activePoster.title}</DialogTitle>
                    <DialogDescription className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {activePoster.description}
                    </DialogDescription>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Designed for</p>
                      <p className="font-semibold text-sm md:text-base">PXPLab / Ignition</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap px-4">
              {posters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === selectedIndex ? "bg-primary w-8" : "bg-white/20 w-2 hover:bg-white/40"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Description Panel */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 bg-secondary/10 backdrop-blur-sm relative overflow-hidden min-h-[250px] lg:min-h-[300px] flex flex-col justify-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className={cn("inline-flex self-start px-3 py-1 rounded-full text-xs font-medium mb-4", activePoster.color)}>
                    Asset {activePoster.id} of {posters.length}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                    {activePoster.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {activePoster.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
