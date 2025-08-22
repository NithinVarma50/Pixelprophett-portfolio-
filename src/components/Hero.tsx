
import { motion } from "framer-motion";
import PersonalInfo from "./hero/PersonalInfo";
import SocialLinks from "./hero/SocialLinks";
import ActionButtons from "./hero/ActionButtons";
import BackgroundEffects from "./hero/BackgroundEffects";
import PersonalCard from "./PersonalCard";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center section-padding text-center lg:text-left relative overflow-hidden pt-16 sm:pt-0">
      {/* Left side - Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 max-w-2xl relative z-10 px-4 sm:px-6 md:px-0 lg:pr-8"
      >
        <PersonalInfo />
        <SocialLinks />
        <ActionButtons scrollToProjects={scrollToProjects} />
      </motion.div>

      {/* Right side - Courier Team Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 relative z-10 mt-8 lg:mt-0 w-full max-w-lg lg:max-w-none flex justify-center"
      >
        <PersonalCard />
      </motion.div>

      <BackgroundEffects />
    </section>
  );
}
