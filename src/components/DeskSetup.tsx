import { FeatureSteps } from "@/components/ui/feature-section";
import deskImage from "@/assets/desk-setup.png";

const DeskSetup = () => {
  const features = [
    {
      step: "Step 1",
      title: "My Command Center",
      content:
        "This is my little command center — the place where I've spent countless hours learning, building, and dreaming. I haven't created a full production-level product yet, but I've built plenty of small projects here, experimenting with ideas and learning everything I can along the way.",
      image: deskImage,
    },
    {
      step: "Step 2",
      title: "Learning & Growing",
      content:
        "I've learned so many things sitting at this desk — from understanding AI concepts to watching my favorite YouTubers talk about startups, coding, and design. Every late-night session here has its own memory. Sometimes it's me debugging something for hours, other times it's just me watching videos, taking notes, or planning my next big idea.",
      image: deskImage,
    },
    {
      step: "Step 3",
      title: "My Constant Teammate",
      content:
        "My laptop isn't some high-end machine, but it's been my constant teammate. It struggles, sure — but it never gives up on me. It's been with me through every crash, every compile, every idea that almost didn't work but somehow did.",
      image: deskImage,
    },
    {
      step: "Step 4",
      title: "Where It All Started",
      content:
        "This setup might look simple, but it's where everything started for me. Every bit of progress, every spark of creativity — it all happens right here.",
      image: deskImage,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <FeatureSteps
        features={features}
        title="My Desk Setup"
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
      />
    </section>
  );
};

export default DeskSetup;
