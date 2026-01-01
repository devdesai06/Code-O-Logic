import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import {WhoThisIsFor} from "@/components/WhoThisIsFor"
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import {WhatHappensNext} from "@/components/Next"
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary
/30 selection:text-cyan-200">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary
 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        <Hero />
        <WhoThisIsFor/>
        <Trust />
        <Services />
        <Process />
        <Team />
        <WhyUs />
        <CTA />
        <WhatHappensNext/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
