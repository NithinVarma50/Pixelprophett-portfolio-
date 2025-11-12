
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Trophy, Award, Star, Users, GraduationCap, MessageCircle } from "lucide-react";

const achievements = [
  {
    title: "Build-A-Thon Participation",
    description: "AVISHKRUTI 2025 – National Level Technical & Management Fest (Aurora University), CodeVerse Club. Participated in the national-level Build-A-Thon, showcasing innovative ideas and contributing to tech development challenges.",
    icon: <Award className="w-8 h-8 text-purple-500" />
  },
  {
    title: "Algovision Hackathon Participant",
    description: "Participated in Algovision hackathon at Aurora University's AVISHKRUTI fest, presenting 'The Decentralized AI Marketplace' project",
    icon: <Trophy className="w-8 h-8 text-purple-500" />
  },
  {
    title: "AI Community Founder",
    description: "Founded and manage 'Ignition in AI Era' - a 2000+ member community for AI enthusiasts, engineers, and entrepreneurs",
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
    title: "Outskill Gen AI Program Completion",
    description: "Successfully completed the comprehensive Outskill Gen AI course and all workshops, mastering advanced AI concepts and gaining hands-on experience with cutting-edge AI technologies",
    icon: <GraduationCap className="w-8 h-8 text-indigo-500" />
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
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold playfair mb-4">Achievements</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Key milestones and recognitions in my entrepreneurial and technical journey.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-card glass h-full">
                <CardContent className="p-6 sm:p-8 flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-secondary/30">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">{achievement.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
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
