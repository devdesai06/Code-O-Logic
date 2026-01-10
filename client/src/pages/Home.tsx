import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
// import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";

import { Team } from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
// import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatHappensNext } from "@/components/Next";
// import { motion, useScroll, useSpring } from "framer-motion"; // Uncomment if you use the scroll bar
import HowWeWorkStack from "@/components/HowWeWorkStack";

// --- NEW IMPORTS ---
import LogoLoop from '@/components/LogoLoop'; 
import { 
  SiWhatsapp, 
  SiTelegram, 
  SiGmail, 
  SiSlack, 
  SiDiscord, 
  SiNotion,
  SiHubspot,
  SiOpenai 
} from 'react-icons/si';

// --- DATA FOR AUTOMATION LOGOS ---
const automationLogos = [
  { node: <SiWhatsapp />, title: "WhatsApp", href: "https://whatsapp.com" },
  { node: <SiTelegram />, title: "Telegram", href: "https://telegram.org" },
  { node: <SiGmail />, title: "Gmail", href: "https://gmail.com" },
  { node: <SiSlack />, title: "Slack", href: "https://slack.com" },
  { node: <SiDiscord />, title: "Discord", href: "https://discord.com" },
  { node: <SiNotion />, title: "Notion", href: "https://notion.so" },
  { node: <SiHubspot />, title: "HubSpot", href: "https://hubspot.com" },
  { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
];

export default function Home() {
  // If you aren't using the progress bar in the return statement, you can remove these hooks
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, { ... });

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30 selection:text-cyan-200">
      
      <Navbar />

      <main>
        {/* HOME / HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* --- INSERTED AUTOMATION LOGO LOOP SECTION --- */}
        {/* Background is transparent, border added for separation */}
        <section className="py-12 border-b border-white/5 bg-transparent">
          <div className="container mx-auto px-4 mb-10 text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Automating your favorite platforms
            </p>
          </div>
          
          <LogoLoop
            logos={automationLogos}
            speed={50}
            direction="left"
            logoHeight={40}
            gap={80}
            hoverSpeed={0}      // 0 means it pauses when you hover
            scaleOnHover={true}
            fadeOut={false}     // False ensures full transparency (no gradient edges)
          />
        </section>

        {/* WHO THIS IS FOR */}
        <section id="for-you">
          <WhoThisIsFor />
        </section>

        {/* HOW WE WORK STACK */}
        <section id="howweWork">
          <HowWeWorkStack />
        </section>

        {/* SERVICES */}
        <section id="services">
          <Services />
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