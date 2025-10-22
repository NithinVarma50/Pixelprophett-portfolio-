import { motion } from "framer-motion";
import deskImage from "@/assets/desk-setup.png";

const DeskSetup = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Desk Setup
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="order-2 md:order-1 space-y-4 text-muted-foreground">
            <p>
              This is my little command center — the place where I've spent countless hours learning, building, and dreaming. I haven't created a full production-level product yet, but I've built plenty of small projects here, experimenting with ideas and learning everything I can along the way.
            </p>
            <p>
              I've learned so many things sitting at this desk — from understanding AI concepts to watching my favorite YouTubers talk about startups, coding, and design. Every late-night session here has its own memory. Sometimes it's me debugging something for hours, other times it's just me watching videos, taking notes, or planning my next big idea.
            </p>
            <p>
              My laptop isn't some high-end machine, but it's been my constant teammate. It struggles, sure — but it never gives up on me. It's been with me through every crash, every compile, every idea that almost didn't work but somehow did.
            </p>
            <p>
              This setup might look simple, but it's where everything started for me. Every bit of progress, every spark of creativity — it all happens right here.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src={deskImage}
              alt="My desk setup - a wooden desk with laptop, keyboard, mouse, and accessories"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeskSetup;
