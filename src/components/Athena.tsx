import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Shield, Lock, Activity, Eye, ExternalLink, Globe } from "lucide-react";

const features = [
    {
        icon: Activity,
        title: "Real-Time Fraud Prevention",
        description: "Advanced AI algorithms detect and prevent fraud attempts in real-time"
    },
    {
        icon: Shield,
        title: "AI-Driven Security",
        description: "Machine learning models that adapt to evolving threats"
    },
    {
        icon: Lock,
        title: "Enterprise Protection",
        description: "Comprehensive security solutions for businesses of all sizes"
    },
    {
        icon: Eye,
        title: "Smart Monitoring",
        description: "24/7 intelligent system monitoring and threat detection"
    }
];

export default function Athena() {
    return (
        <section id="athena" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Athena
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        AI-Powered Cybersecurity & Fraud Detection
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Athena</h3>
                                    <p className="text-sm text-muted-foreground">College Project • 2025</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <a
                                    href="https://athena-cyber-sentinel.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span className="font-medium">Visit Live Project</span>
                                </a>
                            </div>

                            <div className="prose prose-invert max-w-none mb-8">
                                <p className="text-foreground/80 leading-relaxed mb-4">
                                    Athena is a cutting-edge cybersecurity platform designed to protect enterprises from modern digital threats. By leveraging advanced AI and machine learning models, Athena provides real-time fraud detection and adaptive security measures that evolve with the threat landscape.
                                </p>
                                <p className="text-foreground/80 leading-relaxed">
                                    Secure. Smart. Fast. Athena delivers comprehensive protection without compromising performance, ensuring your business remains safe and resilient against cyber attacks.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    Key Features
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors"
                                        >
                                            <div className="p-2 rounded-lg bg-primary/10 mt-1">
                                                <feature.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <h5 className="font-semibold mb-1">{feature.title}</h5>
                                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm text-foreground/70 italic">
                                    "This is a demo website showcasing the interface and capabilities of the Athena cybersecurity platform."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
