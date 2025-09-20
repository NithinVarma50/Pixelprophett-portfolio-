import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Trophy, Award, Star, Users, FileText, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Algovision Hackathon Participant",
    description: "Participated in Algovision hackathon at Aurora University's AVISHKRUTI fest, presenting 'The Decentralized AI Marketplace' project",
    icon: <Trophy className="w-8 h-8 text-purple-500" />,
    hasShowcase: true,
    certificate: "/lovable-uploads/algovision-certificate-final.jpg"
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair mb-3 sm:mb-4">Achievements</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Key milestones and recognitions in my entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <div key={achievement.title}>
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
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-2"
                            onClick={() => window.open(achievement.certificate, '_blank')}
                          >
                            <Award className="w-4 h-4" />
                            Certificate
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-2"
                            onClick={() => {
                              const newWindow = window.open('', '_blank');
                              if (newWindow) {
                                newWindow.document.write(`
                                  <html>
                                    <head>
                                      <title>The Decentralized AI Marketplace - Project Details</title>
                                      <style>
                                        body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; line-height: 1.6; }
                                        .header { background: linear-gradient(135deg, #8B5CF6, #3B82F6); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px; }
                                        .section { background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                                        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
                                        .card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                                        ul { list-style-type: none; padding: 0; }
                                        li { padding: 5px 0; }
                                        li:before { content: "• "; color: #8B5CF6; font-weight: bold; }
                                      </style>
                                    </head>
                                    <body>
                                      <div class="header">
                                        <h1>The Decentralized AI Marketplace</h1>
                                        <h2>Unleashing a New Era of AI Collaboration</h2>
                                      </div>
                                      
                                      <div class="section">
                                        <p><strong>Project Overview:</strong> A revolutionary platform that transforms how we interact with artificial intelligence, moving beyond siloed applications to a fluid, dynamic ecosystem.</p>
                                      </div>
                                      
                                      <div class="grid">
                                        <div class="card">
                                          <h3>🌍 Decentralized</h3>
                                          <p>A global stage where AI agents live, work, and evolve in a shared, open environment.</p>
                                        </div>
                                        <div class="card">
                                          <h3>🧠 Universal Core</h3>
                                          <p>Central intelligence acting as both judge and project manager, orchestrating complex tasks.</p>
                                        </div>
                                        <div class="card">
                                          <h3>👥 User-Created Agents</h3>
                                          <p>Users launch specialized AI agents into the ecosystem, like building apps for an app store.</p>
                                        </div>
                                      </div>
                                      
                                      <div class="section">
                                        <h3>Core AI: Dispatcher and Judge</h3>
                                        <p>At the heart of this digital Earth lies the Core AI - a foundational intelligence that doesn't perform tasks itself, but ensures fair and efficient allocation of work across the network.</p>
                                        <ul>
                                          <li><strong>Analyzes Prompts:</strong> Deciphers user requests and breaks them down</li>
                                          <li><strong>Assigns Tasks:</strong> Selects the most suitable AI agents based on capabilities</li>
                                          <li><strong>Ensures Fairness:</strong> Operates with transparency, preventing favoritism</li>
                                          <li><strong>Orchestrates Collaboration:</strong> Facilitates seamless agent interaction</li>
                                        </ul>
                                      </div>
                                      
                                      <div class="grid">
                                        <div class="card">
                                          <h4>Agent Specializations:</h4>
                                          <ul>
                                            <li>Coding & Development</li>
                                            <li>Marketing & Content Creation</li>
                                            <li>Design & Creative Work</li>
                                            <li>Finance & Analytics</li>
                                            <li>Automation & Process Optimization</li>
                                          </ul>
                                        </div>
                                        <div class="card">
                                          <h4>Key Benefits:</h4>
                                          <ul>
                                            <li>Decentralized AI collaboration</li>
                                            <li>Fair task distribution</li>
                                            <li>Specialized agent marketplace</li>
                                            <li>Scalable ecosystem growth</li>
                                            <li>Merit-based selection process</li>
                                          </ul>
                                        </div>
                                      </div>
                                      
                                      <div class="section">
                                        <p><em>Presented at Algovision hackathon, Aurora University's AVISHKRUTI fest (September 15-19, 2025)</em></p>
                                      </div>
                                    </body>
                                  </html>
                                `);
                                newWindow.document.close();
                              }
                            }}
                          >
                            <FileText className="w-4 h-4" />
                            Project Details
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}