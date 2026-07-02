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
import openaiDistribution from "@/assets/posters/openai-distribution-tbpn.png";
import ignite1Percent from "@/assets/posters/ignite-1-percent.png";
import stayBuildingTwin from "@/assets/posters/stay-building-twin.png";
import beAddictedBuilding from "@/assets/posters/be-addicted-building.png";
import claudeMythos from "@/assets/posters/claude-mythos.jpg";
import igniteCreativeNotLinear from "@/assets/posters/ignite-creative-not-linear.jpg";
import aiBubbleOrShift from "@/assets/posters/ai-bubble-or-shift.png";
import ignitepediaZine from "@/assets/posters/ignitepedia-zine.png";
import aiVault from "@/assets/posters/ai-vault.png";
import joinIgnite1Percent from "@/assets/posters/join-ignite-1-percent.png";
import igniteYourFuture from "@/assets/posters/ignite-your-future.png";
import bePartOf1Percent from "@/assets/posters/be-part-of-1-percent.png";
import gamingBiggestIndustry from "@/assets/posters/gaming-biggest-industry.png";
import igniteTheFutureBuilder from "@/assets/posters/ignite-the-future-builder.png";
import ignitepedia12ResearchDrops from "@/assets/posters/ignitepedia-12-research-drops.jpg";
import bestValueForBuilders from "@/assets/posters/best-value-for-builders.png";
import agentBossPlaybook from "@/assets/posters/agent-boss-playbook.png";
import learnConnectBuildTogether from "@/assets/posters/learn-connect-build-together.png";
import learnFutureIgnitepedia from "@/assets/posters/learn-future-ignitepedia.png";
import ignitepediaInternetAgentic from "@/assets/posters/ignitepedia-internet-agentic.png";
import howToBuildStartupAiEra from "@/assets/posters/how-to-build-startup-ai-era.jpg";
import whyStartupsBuilderProgram from "@/assets/posters/why-startups-builder-program.jpg";
import readyToBuildFutureChair from "@/assets/posters/ready-to-build-future-chair.jpg";
import buildLaunchStartupsLocker from "@/assets/posters/build-launch-startups-locker.jpg";
import buildLaunchStartupsWithAi from "@/assets/posters/build-launch-startups-with-ai.jpg";
import registrations615Celebration from "@/assets/posters/registrations-615-celebration.jpg";
import ignite1PercentSiliconValley from "@/assets/posters/ignite-1-percent-silicon-valley.jpg";
import ignitepediaUltimateBuilderResource from "@/assets/posters/ignitepedia-ultimate-builder-resource.jpg";
import ignite1PercentZineAsset from "@/assets/posters/ignite-1percent-zine.png.asset.json";
import virtualSharkTankAsset from "@/assets/posters/virtual-shark-tank.png.asset.json";
import sunday3FundraisingAsset from "@/assets/posters/sunday3-fundraising.png.asset.json";
import sunday3WasabiAicAsset from "@/assets/posters/sunday3-wasabi-aic.png.asset.json";
import finalTwoSundaysGrandAsset from "@/assets/posters/final-two-sundays-grand.png.asset.json";
const ignite1PercentZine = ignite1PercentZineAsset.url;
const virtualSharkTank = virtualSharkTankAsset.url;
const sunday3Fundraising = sunday3FundraisingAsset.url;
const sunday3WasabiAic = sunday3WasabiAicAsset.url;
const finalTwoSundaysGrand = finalTwoSundaysGrandAsset.url;

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
  },
  {
    id: 27,
    src: ignitionBuildOpportunity,
    title: "Build Opportunity",
    description: "Don't wait for opportunity. Build it — with people who are doing the same. Ignition in AI Era.",
    color: "bg-orange-600/10 text-orange-600"
  },
  {
    id: 28,
    src: ignitionCofounders,
    title: "Find Your Co-Founders",
    description: "Ignition in AI Era — 3000+ builders. Find your co-founders and build together.",
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    id: 29,
    src: claudeCodeLeaked,
    title: "Claude Code Leaked",
    description: "Massive AI leak — 512,000+ lines of Anthropic's Claude Code system source code exposed. Read on IgnitePedia.",
    color: "bg-fuchsia-500/10 text-fuchsia-500"
  },
  {
    id: 30,
    src: openaiDistribution,
    title: "Why OpenAI Bet on Distribution",
    description: "IgnitePedia presents — The TBPN Case Study. Breaking down why OpenAI acquired The Big Picture Network and why distribution matters more than ever.",
    color: "bg-emerald-600/10 text-emerald-600"
  },
  {
    id: 31,
    src: ignite1Percent,
    title: "Ignite 1% — Not Everyone Gets In",
    description: "Ignite 1% is a curated tier inside Ignition in AI Era. Apply for free, we review your profile, and only pay ₹67 if selected. Limited to 100 members. Apply at forms.gle/oh1SmxnBWpYVaPcKA.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 32,
    src: stayBuildingTwin,
    title: "Stay Building, Twin",
    description: "Ignition in AI Era — a reminder to keep shipping. Stay building, twin. The era belongs to those who don't stop.",
    color: "bg-zinc-400/10 text-zinc-400"
  },
  {
    id: 33,
    src: beAddictedBuilding,
    title: "Be Addicted to Building Your Future",
    description: "Join IGNITE 1% by Ignition in AI Era — a curated circle for builders, creators & future leaders. High-value networking, real opportunities, exclusive resources & meaningful collaborations. Not a group. A movement.",
    color: "bg-amber-400/10 text-amber-400"
  },
  {
    id: 34,
    src: claudeMythos,
    title: "Claude Mythos: The Quiet AI Giant",
    description: "Ignitepedia Drop — a premium research document exploring why Anthropic & Claude are suddenly everywhere. The model they don't want you to try. The future isn't public. Yet.",
    color: "bg-red-600/10 text-red-500"
  },
  {
    id: 35,
    src: igniteCreativeNotLinear,
    title: "Ignite 1% — The Creative Isn't Linear",
    description: "Not for everyone. For the ones who actually want to build. Learn. Build. Connect. Ignite.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    id: 36,
    src: aiBubbleOrShift,
    title: "AI Bubble or Biggest Shift Since the Internet?",
    description: "Ignitepedia Drop — a data-backed, balanced deep dive into AI: the hype, the numbers, the reality, and what it means for you. 15+ sections, real data from top global reports, balanced bubble vs revolution signals, and actionable takeaways for builders & learners.",
    color: "bg-orange-600/10 text-orange-500"
  },
  {
    id: 37,
    src: ignitepediaZine,
    title: "Ignitepedia — Explore. Learn. Ignite.",
    description: "AI research papers, playbooks & startup guides — 100% free for everyone. The Ignition in AI Era zine, hand-lettered on neon pages, made for builders who actually read.",
    color: "bg-lime-400/10 text-lime-400"
  },
  {
    id: 38,
    src: aiVault,
    title: "AI Vault — Just Dropped",
    description: "Your ultimate AI resource vault. 30+ free AI tools, prompt engineering pack, premium website design prompts, GitHub goldmine, 1000+ n8n workflows, Claude skills packs, AntiGravity skill pack, curated learning resources, and founder shortcuts. ₹199 — one-time access, lifetime value.",
    color: "bg-sky-500/10 text-sky-400"
  },
  {
    id: 39,
    src: joinIgnite1Percent,
    title: "Join Ignite 1%",
    description: "Most groups go silent after you join. Inside Ignite 1%, members are already discussing startups, open-source, AI tools, and collaborations. We didn't build a group — we built momentum. Cohort 1 closes soon. Apply at forms.gle/oh1SmxnBWpYVaPcKA.",
    color: "bg-blue-600/10 text-blue-500"
  },
  {
    id: 40,
    src: igniteYourFuture,
    title: "Ignite Your Future in the AI Era",
    description: "Ignition in AI Era — Learn. Build. Connect. Grow. Together. Knowledge resources, strong community, build & innovate, grow your future, and exclusive opportunities.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    id: 41,
    src: bePartOf1Percent,
    title: "Ignite 1% — Be Part of the 1%",
    description: "A curated circle of builders, creators, and founders driven to create impact and shape the future. Exclusive community, premium resources, networking & collaborations, growth & opportunities. Ignite 1% access — ₹112. Ignite 1% + AI Vault Pack — ₹199. Only 9 slots left.",
    color: "bg-zinc-500/10 text-zinc-300"
  },
  {
    id: 42,
    src: gamingBiggestIndustry,
    title: "Gaming Is Quietly Becoming One of the Biggest Industries on Earth",
    description: "Ignitepedia New Drop — a deep research document uncovering how gaming is reshaping economies, culture, technology & the future. Global market insights, platform shift analysis, opportunities for builders, India's rise & future outlook, and trends & data 2026–2035. Free for everyone. Knowledge that builds.",
    color: "bg-blue-500/10 text-blue-400"
  },
  {
    id: 43,
    src: igniteTheFutureBuilder,
    title: "Ignite the Future — A Builder Ecosystem",
    description: "Ignition in AI Era — Build. Learn. Connect. Ignitepedia research drops, AI Vault tools & resources, Agent Boss playbooks & systems, Ignition Arena hackathons, Ignite 1% private builder circle, and a community to collaborate & grow. Be part of the movement. Be part of the future.",
    color: "bg-red-600/10 text-red-500"
  },
  {
    id: 44,
    src: ignitepedia12ResearchDrops,
    title: "12+ Research Drops — All for Free",
    description: "A growing open research ecosystem for builders, founders, creators, students & future-focused minds. AI research papers, market analysis, AI workflow systems, prompt engineering, case studies, startup playbooks, agentic AI deep-dives, gaming industry analysis & productivity frameworks. Real research. Raw insights. Zero paywalls.",
    color: "bg-red-500/10 text-red-400"
  },
  {
    id: 45,
    src: bestValueForBuilders,
    title: "The Best Value for Builders",
    description: "Two systems. One unfair advantage. AI Vault + The Agent Boss Playbook — buy both & get 20% off. ₹239 (was ₹298), one-time payment, lifetime access. Bonus guide: The Complete AI Builder Operating System — how to use both as one unified AI-native workflow.",
    color: "bg-stone-400/10 text-stone-300"
  },
  {
    id: 46,
    src: agentBossPlaybook,
    title: "How Top 1% Builders Actually Use AI",
    description: "Ignitepedia Exclusive — The Agent Boss Playbook. A leaked operating manual for the AI-native era. Agent Boss framework, Pokémon trainer analogy, AI team structures, multi-agent workflows. ₹99 one-time access, lifetime value. Not a beginner guide. Not a top-10 prompts list. This is how the top 1% actually operate.",
    color: "bg-lime-500/10 text-lime-400"
  },
  {
    id: 47,
    src: learnConnectBuildTogether,
    title: "Learn, Connect & Build Together",
    description: "The more you learn, connect & build together, the more you grow together. Why join Ignition in AI Era — future-focused research drops, exclusive premium resources, private builder community, hackathons & build events, AI tools, workflows & automations, network with builders & founders, discussions that actually matter, learn, collaborate & build together. Join the ecosystem. Build the future.",
    color: "bg-lime-400/10 text-lime-300"
  },
  {
    id: 48,
    src: learnFutureIgnitepedia,
    title: "You Can Learn the Future — But Not Without Signal",
    description: "Welcome to Ignitepedia — built for builders, founders, developers, creators & curious minds trying to understand where AI, technology, startups, and the internet are heading next. Ignitepedia (Free): deep research drops on AI shifts, future tech, gaming, internet culture, startup opportunities, creator economy. Ignitepedia Exclusive: AI Vault & The Agent Boss Playbook. Most people casually use AI. Builders learn how to leverage it.",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    id: 49,
    src: ignitepediaInternetAgentic,
    title: "The Internet Is Quietly Becoming Agentic",
    description: "Ignitepedia Featured Document — How AI Agents May Become the Next Users of the Internet. A deep dive into the next evolution of the internet. Research. Insights. Opportunities. The future belongs to builders.",
    color: "bg-red-600/10 text-red-500"
  },
  {
    id: 50,
    src: howToBuildStartupAiEra,
    title: "How to Build a Startup in the AI Era",
    description: "Announcing a new community event — June 14, 2026. From Idea → MVP → Customers → Growth. The startup playbook is changing: AI enables builders to validate ideas faster, build MVPs quicker, reach customers more efficiently, and scale with resources once reserved for large teams. Designed for Students, Builders, Aspiring Founders, Developers, Creators & AI Enthusiasts. Expect hands-on AI workshops, expert & founder sessions, startup building frameworks, networking, certificates & AI platform benefits. Organized by Ignition in AI Era × Student Tech, in collaboration with Wasabi AI × Marketing Rizz. More details and registrations coming soon — ignitioninaiera.space",
    color: "bg-red-600/10 text-red-500"
  },
  {
    id: 51,
    src: whyStartupsBuilderProgram,
    title: "Why Startups? Your Journey Starts Here",
    description: "Build & Launch — FREE 4-Sunday Builder Program. 14 June → 05 July 2026. Learn → Build → Launch → Pitch → Win. Get Manus AI credits, premium AI resources, hands-on workshops, startup frameworks, certificate of participation & startup showcase. Top performers get into Ignite 1%. Organized by Ignitepedia, Wasabi AI & Manus AI. Community partners: NxtGenSec, Student Tech & Careers. Register: luma.com/owvaawyf · blsa.vercel.app",
    color: "bg-red-600/10 text-red-500"
  },
  {
    id: 52,
    src: readyToBuildFutureChair,
    title: "Ready to Build Your Future?",
    description: "Build & Launch Startups in the Age of AI. 4-weekend program starting Sunday June 14 — registrations close June 13. Only a few days left! 100% Free · Premium Resources · Certificate. Top performers get Ignite 1% entry. Register: luma.com/owvaawyf",
    color: "bg-blue-500/10 text-blue-400"
  },
  {
    id: 53,
    src: buildLaunchStartupsLocker,
    title: "Build & Launch Startups in the Age of AI",
    description: "4-Week Builder Program. Schedule: 14 June — Idea → MVP, 21 June — Marketing, Content & Growth, 28 June — Fundraising & Startup Readiness, 05 July — Startup Finals. What you'll get: Manus AI credits, premium AI resources & tools, workshops & hands-on learning, startup frameworks & templates, certificate of participation, startup showcase opportunity. Top performers may receive an invitation to Ignite 1% — a curated community of ambitious builders & founders. Who can join: students, developers, creators, designers, AI enthusiasts & aspiring founders. Organisers: Ignitepedia (by Ignition in AI Era), Wasabi AI, Manus AI. Partners: Student Hub, Student Tech and Career, NxtGenSec. Register: luma.com/owvaawyf",
    color: "bg-blue-600/10 text-blue-400"
  },
  {
    id: 54,
    src: buildLaunchStartupsWithAi,
    title: "Build & Launch Startups With AI",
    description: "Ignitepedia (by Ignition in AI Era) × Wasabi AI × Manus AI presents — Idea to Impact. Build the Future. Organized by Ignitepedia × Wasabi AI × Manus AI. Community Partners: Student Hub × Student Tech & Career × NxtGenSec × Legion. Media Partner: AI Startup Impact. What you'll get: Manus AI Subscription Credits (for selected participants), premium AI resources & startup tools, hands-on workshops, startup frameworks & templates, certificate of participation, startup showcase opportunities, access to a growing builder ecosystem, find co-founders, teammates & collaborators, top performers may receive entry into Ignite 1%. Schedule: 14 June — Idea→MVP · 21 June — Marketing, Content & Growth · 28 June — Fundraising & Startup Readiness · 05 July — Startup Finals. 100% Online · Completely Free. Register: luma.com/owvaawyf",
    color: "bg-blue-700/10 text-blue-500"
  },
  {
    id: 55,
    src: registrations615Celebration,
    title: "615+ Registrations — Thank You, Builders",
    description: "Build & Launch Startups With AI is a 4-Sunday online program designed to help you turn ideas into real startups. Learn. Build. Launch. Pitch. Win. We're excited to celebrate 615+ registrations. Thank you to every builder who took the first step. Your energy, ideas & passion are what make this journey special. Let's build, learn & launch together.",
    color: "bg-red-500/10 text-red-500"
  },
  {
    id: 56,
    src: ignite1PercentSiliconValley,
    title: "Ignite 1% — Your Silicon Valley in Your Pocket",
    description: "Handpicked. High Impact. Top 1%. Ignite 1% by Ignition in AI Era. Top People · Real Connections · Bigger Impact. Build · Learn · Launch · Scale. Elite community of builders & founders, exclusive opportunities & early access, collaborate · grow · level up, be among the top 1% who make it happen. Spots are limited. Selection is intentional. Apply now: forms.gle/QQA8vx1j5wprjy4T7",
    color: "bg-orange-600/10 text-orange-500"
  },
  {
    id: 57,
    src: ignitepediaUltimateBuilderResource,
    title: "Ignitepedia Exclusive — The Ultimate Builder's Resource Pack",
    description: "The complete operating system for builders who want to design better products, ship faster, and earn real money from what they build — with AI as the primary tool. 14 Resources (curated & verified June 2026) · 2 Parts (Toolkit + Monetization Playbook) · 40+ Links (GitHub, OSS, tools, platforms) · 1 Goal (Build great things. Earn from them.). Includes The AI Website Selling Playbook — how to earn 10,000–50,000/month selling AI-built websites to local businesses. Published June 2026 · Ignition in the AI Era · ignitioninaiera.space",
    color: "bg-yellow-400/10 text-yellow-300"
  },
  {
    id: 58,
    src: ignite1PercentZine,
    title: "Ignite 1% — Built for Builders",
    description: "The top 1% don't wait for opportunities, they build them. A hand-drawn zine-style manifesto for Ignite 1% by Ignition in AI Era. Surround yourself with builders, not watchers. Join a curated community of ambitious builders — collaborate, learn, build, turn ideas into startups. Student Founder Offer: ₹112 → ₹67 for verified students. Only 4 student slots. Apply: forms.gle/vfRBpNXXxnaW6E23A",
    color: "bg-yellow-500/10 text-yellow-400"
  },
  {
    id: 59,
    src: virtualSharkTank,
    title: "Virtual Shark Tank — Pitch to Real Incubators",
    description: "Opportunities don't wait. Neither should you. Pitch your startup in Virtual Shark Tank in front of real incubators from Atal Incubation Centre — GGSIPU. Pitch live, defend your vision, receive expert feedback, and take your first step into the startup ecosystem. 100% free · Sunday, July 5, 2026 · 10:00 AM onwards · Virtual. Limited spots. Big opportunities.",
    color: "bg-red-600/10 text-red-500"
  },
  {
    id: 60,
    src: sunday3Fundraising,
    title: "Sunday 3 — Fundraising & Startup Readiness",
    description: "Learn. Build. Grow. A high-impact session with Atal Incubation Centre — GGSIPU on fundraising, pitch decks, and startup growth. Learn from the best, build investor-ready ideas, and grow your startup. This Sunday · 3:00 PM – 5:30 PM · Online (Google Meet). Free Manus AI credits for every registered participant. Powered by Ignitepedia × Wasabi AI × Manus. Be the 1%.",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    id: 61,
    src: sunday3WasabiAic,
    title: "Sunday 3 — Wasabi AI × Ignition in AI Era",
    description: "Bringing India's innovation powerhouse to empower the next generation of founders. A high-impact session with Atal Incubation Centre — GGSIPU to help you build, prepare, and raise with confidence. Covers Investor Perspective, Pitch Deck Mastery, Founder Story, and Startup Readiness — plus Incubation & Mentorship, Funding Readiness, and Ecosystem Connect. Register: luma.com/owvaawyf",
    color: "bg-amber-700/10 text-amber-500"
  },
  {
    id: 62,
    src: finalTwoSundaysGrand,
    title: "The Final Two Sundays Are Going to Be GRAND",
    description: "Build and Launch Startups with AI. Learn Faster — practical AI frameworks to accelerate your learning. Build Smarter — real products and MVPs using AI workflows. Launch Stronger — go from idea to launch with proven strategies and playbooks. Think Bigger — explore opportunities and stay ahead of the curve. Join us this Sunday. Register: luma.com/owvaawyf",
    color: "bg-red-500/10 text-red-400"
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
