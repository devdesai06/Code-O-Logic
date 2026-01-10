import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
// import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatHappensNext } from "@/components/Next";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30 selection:text-cyan-200">
      {/* Scroll progress bar */}
  
      

      <Navbar />

      <main>
        {/* HOME / HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* WHO THIS IS FOR */}
        <section id="for-you">
          <WhoThisIsFor />
        </section>

        {/* TRUST */}
        <Trust />

        {/* SERVICES */}
        <section id="services">
          <Services />
        </section>

        {/* PROCESS */}
        <section id="process">
          <Process />
        </section>

        {/* WHY US */}
        <section id="whyus">
          <WhyUs />
        </section>

      

        {/* WHAT HAPPENS NEXT */}
        <WhatHappensNext />

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

        {/* TEAM */}
        <section id="team">
          <Team />
        </section>
      </main>

      <Footer />
    </div>
  );
}
