import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Users, MessageCircle, Trophy, Calendar, Target, Lightbulb } from "lucide-react";

export default function Community() {
  const initiatives = [
    {
      icon: <MessageCircle className="w-5 h-5 text-primary/70" />,
      title: "Multiple Channels",
      description: "Discussions, collaborations, promotions, and resources"
    },
    {
      icon: <Calendar className="w-5 h-5 text-primary/70" />,
      title: "Weekly Activities",
      description: "Engagement boosting events and knowledge sharing"
    },
    {
      icon: <Target className="w-5 h-5 text-primary/70" />,
      title: "Startup Pitches",
      description: "Opportunities & personal brand building"
    },
    {
      icon: <Trophy className="w-5 h-5 text-primary/70" />,
      title: "Planned Hackathons",
      description: "Collaborative events with prize money"
    }
  ];

  const impact = [
    {
      icon: <Users className="w-4 h-4 text-primary/70" />,
      title: "Fostered Connections",
      description: "Member partnerships and learning opportunities"
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-primary/70" />,
      title: "Knowledge Sharing",
      description: "Active space for AI/tech updates and opportunities"
    },
    {
      icon: <Target className="w-4 h-4 text-primary/70" />,
      title: "Collaborative Culture",
      description: "Encouraging mutual support and growth"
    }
  ];

  return (
    <section className="section-padding" id="community">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">
            Community Leadership
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Building and nurturing tech communities for innovation and collaboration
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="hover-card glass mb-6">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                      🤖 Ignition in AI Era
                      <span className="text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                        Founder & Community Admin
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">300+ Member AI & Tech Community</p>
                    <p className="text-xs text-primary/70 flex items-center gap-1">
                      🚀 Active & Growing
                    </p>
                  </div>
                  <a 
                    href="https://chat.whatsapp.com/your-community-invite" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    Join Community <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  Manage a 300+ member community for AI enthusiasts, engineers, entrepreneurs, and creators to share knowledge, 
                  collaborate, and grow their networks in the rapidly evolving AI landscape.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3 text-primary">Key Initiatives</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {initiatives.map((initiative, index) => (
                      <motion.div
                        key={initiative.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {initiative.icon}
                        </div>
                        <div>
                          <h5 className="font-medium text-sm mb-1">{initiative.title}</h5>
                          <p className="text-xs text-muted-foreground">{initiative.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border border-primary/20 rounded-lg p-4 mb-6 bg-primary/5">
                  <h4 className="font-semibold text-sm mb-2 text-primary">
                    Community Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                    {impact.map((item, index) => (
                      <div key={item.title} className="flex items-start gap-2">
                        {item.icon}
                        <div>
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary/70" />
                    <h4 className="font-semibold text-sm text-primary">Community Features</h4>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 mb-3">
                    <p>• Open member-led events (admin-supported)</p>
                    <p>• Weekly activities to boost engagement</p>
                    <p>• Startup pitch opportunities & personal brand building</p>
                    <p>• Planned hackathons with prize money</p>
                  </div>
                  <p className="text-sm font-medium text-primary/90 italic">
                    "Building bridges between AI enthusiasts and fostering a culture of innovation, collaboration, and mutual growth."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}