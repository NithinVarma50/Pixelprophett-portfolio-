
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
    certificate: "/lovable-uploads/algovision-certificate.jpg"
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
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <Trophy className="w-5 h-5 text-purple-500" />
                                  {achievement.title}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    Participation Certificate
                                  </h4>
                                  <img 
                                    src={achievement.certificate} 
                                    alt="Algovision Hackathon Certificate"
                                    className="w-full rounded-lg shadow-lg"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <FileText className="w-5 h-5" />
                                    Project: The Decentralized AI Marketplace
                                  </h4>
                                  <div className="bg-secondary/50 p-4 rounded-lg">
                                    <p className="text-sm text-muted-foreground mb-2">
                                      A comprehensive solution addressing the centralization issues in AI model distribution and access.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                      <div>
                                        <h5 className="font-semibold text-sm mb-2">Key Features:</h5>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                          <li>• Decentralized AI model marketplace</li>
                                          <li>• Blockchain-based transactions</li>
                                          <li>• Community-driven model validation</li>
                                          <li>• Transparent pricing mechanisms</li>
                                        </ul>
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-sm mb-2">Technologies:</h5>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                          <li>• Blockchain integration</li>
                                          <li>• AI/ML frameworks</li>
                                          <li>• Decentralized storage</li>
                                          <li>• Smart contracts</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
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
