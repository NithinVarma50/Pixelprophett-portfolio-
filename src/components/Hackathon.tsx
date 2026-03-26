import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Users, Zap, Target, ExternalLink, Award, Shield, Brain, Lightbulb, Globe, BookOpen } from "lucide-react";

const problemCategories = [
  { name: "AI SaaS", icon: <Brain className="w-4 h-4" />, count: 3, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { name: "Cybersecurity", icon: <Shield className="w-4 h-4" />, count: 3, color: "bg-red-500/10 text-red-400 border-red-500/20" },
  { name: "AI + Cybersecurity", icon: <Zap className="w-4 h-4" />, count: 3, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Entrepreneurship", icon: <Lightbulb className="w-4 h-4" />, count: 3, color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  { name: "Real-World Problems", icon: <Globe className="w-4 h-4" />, count: 4, color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Real-Time Challenges", icon: <Target className="w-4 h-4" />, count: 3, color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
];

const winners = [
  {
    position: "1st Prize",
    emoji: "🥇",
    team: "Dynamic Duo",
    members: [
      { name: "Jidnyasa Patil", email: "jidnyasapatil019@gmail.com", linkedin: "" },
      { name: "Asmi Tatawar", email: "tatawar.asmi@gmail.com", linkedin: "https://www.linkedin.com/in/asmi-tatawar-3a8b11311" },
    ],
    color: "from-yellow-500/20 to-amber-600/20 border-yellow-500/30",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  },
  {
    position: "2nd Prize",
    emoji: "🥈",
    team: "Code Queens",
    members: [
      { name: "Alamur Vennela", email: "vennelaalamur@gmail.com", linkedin: "https://www.linkedin.com/in/vennela-alamur-82b74032b" },
      { name: "Korivi Vijayalakshmi", email: "korivivijayalakshmi47@gmail.com", linkedin: "https://www.linkedin.com/in/vijayalakshmi-korivi-ab58b232b" },
    ],
    color: "from-slate-400/20 to-gray-500/20 border-slate-400/30",
    badgeColor: "bg-slate-400/20 text-slate-300 border-slate-400/30",
  },
  {
    position: "3rd Prize",
    emoji: "🥉",
    team: "Rising High",
    members: [
      { name: "Arham Boonlia", email: "arhambulia21@gmail.com", linkedin: "https://www.linkedin.com/in/arham-boonlia21/" },
      { name: "Priyal Khunia", email: "khunia.priyal25@gmail.com", linkedin: "https://www.linkedin.com/in/priyal-khunia-840316378/" },
    ],
    color: "from-orange-600/20 to-amber-700/20 border-orange-600/30",
    badgeColor: "bg-orange-600/20 text-orange-300 border-orange-600/30",
  },
];

const stats = [
  { label: "Teams Registered", value: "106+", icon: <Users className="w-5 h-5" /> },
  { label: "Capacity Planned", value: "100", icon: <Target className="w-5 h-5" /> },
  { label: "Premium Registrations", value: "50", icon: <Zap className="w-5 h-5" /> },
  { label: "Problem Statements", value: "19", icon: <BookOpen className="w-5 h-5" /> },
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

export default function Hackathon() {
  return (
    <section className="section-padding bg-secondary/20" id="hackathon">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="mb-4 text-xs sm:text-sm bg-primary/10 border-primary/30 text-primary">
            Ignition in AI Era × NxtGenSec
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            AI & Cybersecurity Hackathon
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            March 15–17, 2026 · A 3-day build + evaluation hackathon bringing together 106+ teams of builders, students, and innovators to solve real-world problems using AI.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 italic">
            "From idea to execution — 100+ teams, real products, real builders."
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="glass hover-card text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                  <p className="text-xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* My Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <Card className="glass hover-card border-primary/20">
            <CardContent className="p-4 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold">My Role — Founder, Ignition in AI Era</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  "Led overall vision & execution",
                  "Designed hackathon structure & strategy",
                  "Built partnerships with NxtGenSec",
                  "Drove registrations & community engagement",
                  "Curated 19 problem statements across 6 domains",
                  "Managed evaluation & certification pipeline",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Problem Statement Categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Problem Statement Domains</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {problemCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="glass hover-card h-full">
                  <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                    <Badge variant="outline" className={`${cat.color} p-1.5 sm:p-2`}>
                      {cat.icon}
                    </Badge>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-medium truncate">{cat.name}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{cat.count} statements</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathon Structure */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Evaluation Criteria</h3>
          <Card className="glass">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-2.5">
                {evaluationCriteria.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm text-foreground">{c.name}</span>
                        <span className="text-xs text-muted-foreground">{c.points}/100</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary/70 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.points}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Winners */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
            Winners
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {winners.map((winner, i) => (
              <motion.div
                key={winner.team}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <Card className={`glass hover-card h-full bg-gradient-to-br ${winner.color}`}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center mb-3">
                      <span className="text-3xl sm:text-4xl">{winner.emoji}</span>
                      <Badge variant="outline" className={`mt-2 block mx-auto w-fit ${winner.badgeColor}`}>
                        {winner.position}
                      </Badge>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-center mb-3">{winner.team}</h4>
                    <div className="space-y-2.5">
                      {winner.members.map((member) => (
                        <div key={member.name} className="text-center">
                          <p className="text-xs sm:text-sm font-medium text-foreground">{member.name}</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{member.email}</p>
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-primary hover:underline mt-0.5"
                            >
                              LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification & Impact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass hover-card h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-sm sm:text-lg font-semibold">Certification</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  All participants were officially recognized with certificates for their contributions. Top 3 teams received special achievement certificates signed by the founders of NxtGenSec and Ignition in AI Era.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass hover-card h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="text-sm sm:text-lg font-semibold">Impact</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  This hackathon marked a key milestone in building Ignition in AI Era into a serious ecosystem for builders, innovators, and AI-first product creators. Validated demand for structured AI-focused hackathons with strong community engagement.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-3 mt-8">
          <a
            href="https://vibecoding.nxtgensec.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline"
          >
            vibecoding.nxtgensec.org <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="https://nxtgensec.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline"
          >
            nxtgensec.org <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
