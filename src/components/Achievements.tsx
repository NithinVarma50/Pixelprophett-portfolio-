
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Trophy, Award, Star, Users, Eye, FileText } from "lucide-react";

const achievements = [
  {
    title: "Algovision Hackathon Participant",
    description: "Participated in Algovision hackathon at Aurora University's AVISHKRUTI fest, presenting 'The Decentralized AI Marketplace' project",
    icon: <Trophy className="w-8 h-8 text-purple-500" />,
    hasShowcase: true,
    certificate: "/lovable-uploads/algovision-certificate-new.jpg"
  },
  {
    title: "AI Community Founder",
    description: "Founded and manage 'Ignition in AI Era' - a 300+ member community for AI enthusiasts, engineers, and entrepreneurs",
    icon: <Users className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Shark Tank Event Finalist",
    description: "Successfully pitched innovative startup ideas at college-level competition",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />
  },
  {
    title: "Innovators Den Organizer",
    description: "Led the organization of a major entrepreneurship event, fostering innovation",
    icon: <Star className="w-8 h-8 text-yellow-500" />
  },
  {
    title: "Community Leadership",
    description: "Active participant in entrepreneurship communities and tech meetups",
    icon: <Award className="w-8 h-8 text-green-500" />
  }
];

export default function Achievements() {
  return (
    <section className="section-padding bg-secondary/20" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">Achievements</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Key milestones and recognitions in my entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Card className="hover-card glass h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{achievement.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3">{achievement.description}</p>
                        {achievement.hasShowcase && (
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" className="flex items-center gap-2">
                                  <Award className="w-4 h-4" />
                                  Certificate
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <DialogHeader>
                                  <DialogTitle className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-purple-500" />
                                    Participation Certificate
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <img 
                                    src={achievement.certificate} 
                                    alt="Algovision Hackathon Certificate"
                                    className="w-full rounded-lg shadow-lg"
                                  />
                                  <p className="text-sm text-muted-foreground text-center">
                                    Certificate awarded for participating in Algovision hackathon at Aurora University's AVISHKRUTI fest (September 15-19, 2025)
                                  </p>
                                </div>
                              </DialogContent>
                            </Dialog>
                            
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" className="flex items-center gap-2">
                                  <FileText className="w-4 h-4" />
                                  Project PPT
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                                <DialogHeader>
                                  <DialogTitle className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-purple-500" />
                                    The Decentralized AI Marketplace
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-2">Unleashing a New Era of AI Collaboration</h3>
                                    <p className="text-muted-foreground">
                                      A revolutionary platform that transforms how we interact with artificial intelligence, 
                                      moving beyond siloed applications to a fluid, dynamic ecosystem.
                                    </p>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-secondary/50 p-4 rounded-lg">
                                      <h4 className="font-semibold mb-2">🌍 Decentralized</h4>
                                      <p className="text-sm text-muted-foreground">
                                        A global stage where AI agents live, work, and evolve in a shared, open environment.
                                      </p>
                                    </div>
                                    <div className="bg-secondary/50 p-4 rounded-lg">
                                      <h4 className="font-semibold mb-2">🧠 Universal Core</h4>
                                      <p className="text-sm text-muted-foreground">
                                        Central intelligence acting as both judge and project manager, orchestrating complex tasks.
                                      </p>
                                    </div>
                                    <div className="bg-secondary/50 p-4 rounded-lg">
                                      <h4 className="font-semibold mb-2">👥 User-Created Agents</h4>
                                      <p className="text-sm text-muted-foreground">
                                        Users launch specialized AI agents into the ecosystem, like building apps for an app store.
                                      </p>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-lg font-semibold mb-3">Core AI: Dispatcher and Judge</h4>
                                    <div className="bg-secondary/30 p-4 rounded-lg">
                                      <p className="text-sm text-muted-foreground mb-3">
                                        At the heart of this digital Earth lies the Core AI - a foundational intelligence that doesn't perform tasks itself, 
                                        but ensures fair and efficient allocation of work across the network.
                                      </p>
                                      <ul className="text-sm space-y-1">
                                        <li>• <strong>Analyzes Prompts:</strong> Deciphers user requests and breaks them down</li>
                                        <li>• <strong>Assigns Tasks:</strong> Selects the most suitable AI agents based on capabilities</li>
                                        <li>• <strong>Ensures Fairness:</strong> Operates with transparency, preventing favoritism</li>
                                        <li>• <strong>Orchestrates Collaboration:</strong> Facilitates seamless agent interaction</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-lg font-semibold mb-3">Ecosystem of Specialized Agents</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="bg-secondary/30 p-4 rounded-lg">
                                        <h5 className="font-semibold text-sm mb-2">Agent Specializations:</h5>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                          <li>• Coding & Development</li>
                                          <li>• Marketing & Content Creation</li>
                                          <li>• Design & Creative Work</li>
                                          <li>• Finance & Analytics</li>
                                          <li>• Automation & Process Optimization</li>
                                        </ul>
                                      </div>
                                      <div className="bg-secondary/30 p-4 rounded-lg">
                                        <h5 className="font-semibold text-sm mb-2">Key Benefits:</h5>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                          <li>• Decentralized AI collaboration</li>
                                          <li>• Fair task distribution</li>
                                          <li>• Specialized agent marketplace</li>
                                          <li>• Scalable ecosystem growth</li>
                                          <li>• Merit-based selection process</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
