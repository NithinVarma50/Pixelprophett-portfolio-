import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Users, Zap, Target, ExternalLink, Award, Shield, Brain, Lightbulb, Globe, BookOpen } from "lucide-react";

const problemCategories = [
  { name: "AI SaaS", icon: <Brain className="w-3.5 h-3.5" />, count: 3 },
  { name: "Cybersecurity", icon: <Shield className="w-3.5 h-3.5" />, count: 3 },
  { name: "AI + Cybersec", icon: <Zap className="w-3.5 h-3.5" />, count: 3 },
  { name: "Entrepreneurship", icon: <Lightbulb className="w-3.5 h-3.5" />, count: 3 },
  { name: "Real-World", icon: <Globe className="w-3.5 h-3.5" />, count: 4 },
  { name: "Real-Time", icon: <Target className="w-3.5 h-3.5" />, count: 3 },
];

const winners = [
  {
    position: "1st",
    emoji: "🥇",
    team: "Dynamic Duo",
    members: [
      { name: "Jidnyasa Patil", linkedin: "" },
      { name: "Asmi Tatawar", linkedin: "https://www.linkedin.com/in/asmi-tatawar-3a8b11311" },
    ],
  },
  {
    position: "2nd",
    emoji: "🥈",
    team: "Code Queens",
    members: [
      { name: "Alamur Vennela", linkedin: "https://www.linkedin.com/in/vennela-alamur-82b74032b" },
      { name: "Korivi Vijayalakshmi", linkedin: "https://www.linkedin.com/in/vijayalakshmi-korivi-ab58b232b" },
    ],
  },
  {
    position: "3rd",
    emoji: "🥉",
    team: "Rising High",
    members: [
      { name: "Arham Boonlia", linkedin: "https://www.linkedin.com/in/arham-boonlia21/" },
      { name: "Priyal Khunia", linkedin: "https://www.linkedin.com/in/priyal-khunia-840316378/" },
    ],
  },
];

const stats = [
  { label: "Teams", value: "106+", icon: <Users className="w-4 h-4" /> },
  { label: "Capacity", value: "100", icon: <Target className="w-4 h-4" /> },
  { label: "Premium", value: "50", icon: <Zap className="w-4 h-4" /> },
  { label: "Problems", value: "19", icon: <BookOpen className="w-4 h-4" /> },
];

const evaluationCriteria = [
  { name: "Innovation & Uniqueness", points: 15 },
  { name: "Technical Implementation", points: 15 },
  { name: "Functionality & Performance", points: 15 },
  { name: "Presentation Quality", points: 15 },
  { name: "Problem Understanding", points: 10 },
  { name: "GitHub Quality", points: 10 },
  { name: "UI/UX & Design", points: 10 },
  { name: "Deployment", points: 10 },
];

const roleItems = [
  "Led overall vision & execution",
  "Designed hackathon structure & strategy",
  "Built partnerships with NxtGenSec",
  "Drove registrations & engagement",
  "Curated 19 problem statements",
  "Managed evaluation & certification",
];

export default function Hackathon() {
  return (
    <section className="section-padding bg-secondary/20" id="hackathon">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 text-xs bg-primary/10 border-primary/30 text-primary">
            Ignition in AI Era × NxtGenSec
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-2">
            AI & Cybersecurity Hackathon
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto px-2">
            March 15–17, 2026 · 3-day build + evaluation hackathon · 106+ teams solving real-world problems with AI.
          </p>
        </div>

        {/* Stats - compact inline */}
        <Card className="glass mb-6">
          <CardContent className="p-3 sm:p-4">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 divide-x divide-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-1">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5 text-primary">
                    {stat.icon}
                    <p className="text-lg sm:text-2xl font-bold text-foreground leading-none">{stat.value}</p>
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Two-column: Role + Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <Card className="glass border-primary/20">
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-primary" />
                <h3 className="text-sm sm:text-base font-semibold">My Role — Founder</h3>
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {roleItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-primary mt-0.5">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <h3 className="text-sm sm:text-base font-semibold">Problem Domains</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {problemCategories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-background/40 border border-border/40">
                    <span className="text-primary">{cat.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] sm:text-xs font-medium truncate">{cat.name}</p>
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground">{cat.count} statements</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Two-column: Evaluation + Winners */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
          <Card className="glass lg:col-span-2">
            <CardContent className="p-4 sm:p-5">
              <h3 className="text-sm sm:text-base font-semibold mb-3">Evaluation Criteria</h3>
              <div className="space-y-2">
                {evaluationCriteria.map((c) => (
                  <div key={c.name}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[11px] sm:text-xs text-foreground">{c.name}</span>
                      <span className="text-[10px] text-muted-foreground">{c.points}</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary/70 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.points * 100 / 15}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass lg:col-span-3">
            <CardContent className="p-4 sm:p-5">
              <h3 className="text-sm sm:text-base font-semibold mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                Winners
              </h3>
              <div className="space-y-2">
                {winners.map((w) => (
                  <div key={w.team} className="flex items-center gap-3 p-2.5 rounded-md bg-background/40 border border-border/40">
                    <span className="text-2xl">{w.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold">{w.team}</span>
                        <span className="text-[10px] text-muted-foreground">· {w.position}</span>
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                        {w.members.map((m) => (
                          <span key={m.name} className="text-[11px] text-muted-foreground inline-flex items-center gap-1">
                            {m.name}
                            {m.linkedin && (
                              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certification & Impact - compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold">Certification</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All participants received official certificates. Top 3 teams received special achievement certificates signed by founders of NxtGenSec & Ignition in AI Era.
              </p>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold">Impact</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Marked a key milestone in establishing Ignition in AI Era as a serious ecosystem for builders and AI-first product creators.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-3">
          <a href="https://vibecoding.nxtgensec.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
            vibecoding.nxtgensec.org <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-muted-foreground text-xs">·</span>
          <a href="https://nxtgensec.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
            nxtgensec.org <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
