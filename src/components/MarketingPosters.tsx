import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
import thinkBeforeBuild from "@/assets/posters/think-before-build.png";
import miniBuildChallenge from "@/assets/posters/mini-build-challenge.png";
import promptToPrototype from "@/assets/posters/prompt-to-prototype.png";
import ignitionShare from "@/assets/posters/ignition-share.png";
import hackathonBlue from "@/assets/posters/hackathon-blue.png";
import hackathonGradient from "@/assets/posters/hackathon-gradient.png";
import hackathonRegistration from "@/assets/posters/hackathon-registration.png";
import hackathonRegTomorrow from "@/assets/posters/hackathon-registrations-tomorrow.png";
import hackathonRegsOpen from "@/assets/posters/hackathon-registrations-open.png";
import hackathonDreamBig from "@/assets/posters/hackathon-dream-big.png";
import ignitionLinkedin from "@/assets/posters/ignition-linkedin.png";
import hackathonIdeasBuild from "@/assets/posters/hackathon-ideas-build.jpg";
import hackathonGloriousPurpose from "@/assets/posters/hackathon-glorious-purpose.png";
import hackathonDreamBigOrange from "@/assets/posters/hackathon-dream-big-orange.png";
import ignitionCommunityPoster from "@/assets/posters/ignition-community-poster.png";
import aiMarketingPlaybook from "@/assets/posters/ai-marketing-playbook.png";
import ignitionBuildOpportunity from "@/assets/posters/ignition-build-opportunity.png";
import ignitionCofounders from "@/assets/posters/ignition-cofounders.png";
import claudeCodeLeaked from "@/assets/posters/claude-code-leaked.png";

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
  },
  {
    id: 11,
    src: thinkBeforeBuild,
    title: "Think Before You Build",
    description: "Research, validate, and architect before writing a single line of code. Reliable, actionable, scalable, and future-ready.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 12,
    src: miniBuildChallenge,
    title: "Mini Build Challenge",
    description: "Ignition's 7-day build challenge. Build small, build unique, build sharp — and get featured on the Ignition website.",
    color: "bg-red-500/10 text-red-500"
  },
  {
    id: 13,
    src: promptToPrototype,
    title: "Prompt to Prototype",
    description: "Building AI products from prompts to full systems. An IgnitePedia drop for the AI era — out now.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    id: 14,
    src: ignitionShare,
    title: "Share Ignition",
    description: "If you care about AI, builders, and startups — join Ignition in AI Era. Let's build a valuable community together.",
    color: "bg-blue-600/10 text-blue-600"
  },
  {
    id: 15,
    src: hackathonBlue,
    title: "Hackathon Announcement",
    description: "Ignition in AI Era × NxtGenSec — Hackathon coming soon. Build the future with the community.",
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    id: 16,
    src: hackathonGradient,
    title: "Hackathon Teaser",
    description: "A bold visual teaser for the upcoming Ignition × NxtGenSec hackathon. Coming soon — build the future.",
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    id: 17,
    src: hackathonRegistration,
    title: "Hackathon Registration",
    description: "Ignition × NxtGenSec Hackathon — March 15–18. Cash prizes, certificates, and premium AI tools for top performers. Registrations are open!",
    color: "bg-blue-700/10 text-blue-700"
  },
  {
    id: 18,
    src: hackathonRegTomorrow,
    title: "Hackathon — Registrations Tomorrow",
    description: "AI Hackathon by Ignition × NxtGenSec — March 15–18. Cash prizes up to ₹5000, certificates for all, and premium AI tools for top performers. Register at ignitioninaiera.space.",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    id: 19,
    src: hackathonRegsOpen,
    title: "Registrations Open Now",
    description: "Ignition in AI Era × NxtGenSec AI Hackathon — Let's build the future of AI. Win cash prizes, premium tools, expert mentors, and certificates. Register at vibecoding.nxtgensec.org.",
    color: "bg-yellow-400/10 text-yellow-400"
  },
  {
    id: 20,
    src: hackathonDreamBig,
    title: "Dream Big",
    description: "The Ignition AI Hackathon has begun. Believe in your ideas, start building, and dream big. Push your limits and create something extraordinary.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    id: 21,
    src: ignitionLinkedin,
    title: "Now on LinkedIn",
    description: "Ignition in AI Era is now on LinkedIn. Follow, connect, and build with a growing community of AI builders and founders.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 22,
    src: hackathonIdeasBuild,
    title: "Ideas Aren't Enough",
    description: "You don't build the future without writing a few lines of code. Ignition × NxtGenSec AI Hackathon — March 15. Register now.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    id: 23,
    src: hackathonGloriousPurpose,
    title: "Find Your Glorious Purpose",
    description: "Ignition in AI Era × NxtGenSec AI Hackathon — 4 days to go. Find your glorious purpose and build something extraordinary.",
    color: "bg-amber-600/10 text-amber-600"
  },
  {
    id: 24,
    src: hackathonDreamBigOrange,
    title: "Dream Big — Register Now",
    description: "Ignition in AI Era × NxtGenSec AI Hackathon — March 15. Dream big, register now, and build the future at ignitioninaiera.space.",
    color: "bg-orange-600/10 text-orange-600"
  },
  {
    id: 25,
    src: ignitionCommunityPoster,
    title: "Ignition Community",
    description: "Ignition in AI Era — a community for founders, builders, innovators, and AI explorers. Hackathons, real-world challenges, co-founder matchmaking, and AI events. Join at ignitioninaiera.space.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 26,
    src: aiMarketingPlaybook,
    title: "AI Marketing Playbook",
    description: "IgnitePedia Drop 2026 — AI Marketing Playbook. Built for builders who want attention. From invisible to distributed.",
    color: "bg-red-600/10 text-red-600"
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
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-display">
            Marketing <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
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
                    className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-3 sm:p-6 h-full relative"
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
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-black hover:scale-110 transition-all z-10"
              aria-label="Previous poster"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-black hover:scale-110 transition-all z-10"
              aria-label="Next poster"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
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
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-secondary/10 backdrop-blur-sm relative overflow-hidden min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center h-full">
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
                    {activePoster.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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
