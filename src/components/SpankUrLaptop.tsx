
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Mic, Zap, Volume2, BarChart3, Fingerprint, Terminal, AlertTriangle } from "lucide-react";

export default function SpankUrLaptop() {
  const technicalFeatures = [
    {
      icon: <Fingerprint className="w-5 h-5 text-primary/70" />,
      title: "FFT Frequency Fingerprinting",
      description: "Calibrates to the exact resonance of your specific laptop chassis"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-primary/70" />,
      title: "Crest Factor Filtering",
      description: "Distinguishes sharp physical impact from sustained sounds"
    },
    {
      icon: <Mic className="w-5 h-5 text-primary/70" />,
      title: "92% Cosine Similarity",
      description: "Only fires if the sound matches your calibration profile"
    },
    {
      icon: <Zap className="w-5 h-5 text-primary/70" />,
      title: "11ms Block Detection",
      description: "Faster than human reaction time"
    }
  ];

  const stats = [
    { label: "Audio Reactions", value: "59" },
    { label: "Intensity Buckets", value: "5" },
    { label: "Calibration Slaps", value: "100" },
    { label: "Platforms", value: "3" }
  ];

  return (
    <section className="section-padding bg-secondary/5" id="spankurlaptop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            🖐️💻 SpankUrLaptop
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            The Windows answer to a viral Mac-only trend
          </p>
        </div>

        <Card className="hover-card glass">
          <CardContent className="p-4 sm:p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <p className="text-sm font-medium text-primary mb-1">Open Source Tool</p>
                <p className="text-xs text-muted-foreground">Python · sounddevice · NumPy · pygame · FFT · Real-time Audio</p>
              </div>
              <a
                href="https://github.com/NithinVarma50/spankurlaptop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm whitespace-nowrap"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Punch line */}
            <div className="border-l-4 border-primary/50 pl-4 mb-6 bg-primary/5 py-3 rounded-r-lg">
              <p className="text-sm sm:text-base font-medium italic text-foreground/90">
                "From idea to execution — 100+ calibration slaps, real-time audio processing, works on every OS."
              </p>
            </div>

            {/* The Gap */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm sm:text-base mb-2 text-primary flex items-center gap-2">
                <Volume2 className="w-4 h-4" /> The Problem
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SlapMac went viral — 4M+ Instagram views, $5K in 3 days. But every slap app requires Apple Silicon's built-in accelerometer. Windows and Linux users were locked out entirely. SpankUrLaptop solves this with <span className="text-foreground font-medium">microphone-based impact detection</span> — works on any laptop, any OS, any hardware.
              </p>
            </div>

            {/* Why it's harder */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm sm:text-base mb-2 text-primary flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Why It's Technically Harder
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Mac tools have it easy — clean accelerometer signal → detect spike → play sound. SpankUrLaptop listens through a microphone, which picks up everything — voice, keyboard, music. It figures out in real time which spike is actually a chassis slap.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technicalFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20"
                  >
                    <div className="flex-shrink-0 mt-0.5">{feature.icon}</div>
                    <div>
                      <h5 className="font-medium text-sm mb-0.5">{feature.title}</h5>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Calibration */}
            <div className="mb-6 border border-primary/20 rounded-lg p-4 bg-primary/5">
              <h4 className="font-semibold text-sm mb-2 text-primary flex items-center gap-2">
                <Fingerprint className="w-4 h-4" /> Personalized Calibration
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Run one command — the tool records 100 of your slaps, builds a personal frequency fingerprint from your chassis + hitting style, and saves it as a <code className="text-xs bg-secondary/30 px-1.5 py-0.5 rounded">.npz</code> profile. From that point, it only reacts to you.
              </p>
              <div className="font-mono text-xs bg-secondary/30 p-3 rounded-lg text-foreground/80">
                $ spankurlaptop calibrate
              </div>
            </div>

            {/* Install */}
            <div className="mb-6 border border-primary/20 rounded-lg p-4 bg-secondary/10">
              <h4 className="font-semibold text-sm mb-2 text-primary">Install</h4>
              <div className="font-mono text-xs bg-secondary/30 p-3 rounded-lg text-foreground/80 overflow-x-auto">
                $ pip install git+https://github.com/NithinVarma50/spankurlaptop.git
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary/20">
                  <p className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Platform + Warning */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 border border-primary/20 rounded-lg p-3 bg-secondary/10">
                <p className="text-xs font-semibold text-primary mb-1">Platform</p>
                <p className="text-xs text-muted-foreground">Windows · macOS · Linux — the one that actually works everywhere</p>
              </div>
              <div className="flex-1 border border-destructive/20 rounded-lg p-3 bg-destructive/5">
                <p className="text-xs font-semibold text-destructive flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> 18+ Warning
                </p>
                <p className="text-xs text-muted-foreground">The reactions scale with intensity. You've been warned.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
