import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden" id="marketing">
      <div className="max-w-7xl mx-auto container px-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {posters.map((poster, index) => (
            <Dialog key={poster.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative cursor-pointer rounded-xl overflow-hidden bg-secondary/20 border border-white/5 hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
                  onMouseEnter={() => setHoveredId(poster.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden w-full">
                    <img
                      src={poster.src}
                      alt={poster.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white text-sm font-medium">Click to expand</p>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow glass-card bg-secondary/10 backdrop-blur-sm border-t border-white/5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {poster.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {poster.description}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-white/10">
                <div className="relative w-full h-full max-h-[85vh] flex flex-col md:flex-row">
                  <div className="w-full md:w-2/3 bg-black flex items-center justify-center p-4">
                    <img
                      src={poster.src}
                      alt={poster.title}
                      className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain rounded-sm"
                    />
                  </div>
                  <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center bg-card/5 border-l border-white/5">
                    <div className={cn("inline-flex self-start px-3 py-1 rounded-full text-xs font-medium mb-4", poster.color)}>
                      Marketing Asset
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{poster.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {poster.description}
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Designed for</p>
                      <p className="font-semibold">PXPLab / Ignition</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
