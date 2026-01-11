"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Layers, Workflow, Database, Code2, Globe, LucideIcon } from "lucide-react";

// 1. Data Interface
interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    title: "AI & Automation Workflows",
    description:
      "We use AI and smart automation to handle repetitive work like data entry, follow-ups, and internal processes.",
    icon: Bot,
  },
  {
    title: "Operational Process Systems",
    description:
      "We turn messy manual processes into simple digital systems — tracking tasks, approvals, reports, and daily operations.",
    icon: Layers,
  },
  {
    title: "CRM & Lead Management",
    description:
      "Web-based systems to capture, track, and manage leads automatically. No missed follow-ups, no spreadsheets.",
    icon: Database,
  },
  {
    title: "Marketing & Communication",
    description:
      "Automated messages, reminders, and campaigns across WhatsApp, email, and web tools — personalized but hands-free.",
    icon: Globe,
  },
  {
    title: "Custom Web Dashboards",
    description:
      "Simple, clean dashboards that show what’s happening in your business — sales, operations, performance.",
    icon: Workflow,
  },
  {
    title: "System & Tool Integration",
    description:
      "We connect your website, apps, and tools so everything works together smoothly instead of being scattered.",
    icon: Code2,
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Road fills up (height grows)
  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Road glow opacity
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      className="w-full relative overflow-hidden py-32"
      ref={containerRef}
      id="services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-xl"
          >
            The Digital <span className="text-purple-400">Highway</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl mx-auto drop-shadow-md text-lg"
          >
            A clear path from manual chaos to automated efficiency.
          </motion.p>
        </div>

        {/* --- THE ROAD CONTAINER --- */}
        <div className="relative">
          
          {/* 1. THE STATIC ROAD (The empty path ahead) 
             Position: Left-aligned on mobile (left-8), Centered on Desktop
          */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-16 md:w-24 bg-neutral-950/40 backdrop-blur-sm border-x border-white/5 rounded-b-lg z-0">
            {/* Road Texture (Optional noise or lines) */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            {/* Dashed Center Lines (The road markings) */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent bg-[length:2px_40px] bg-repeat-y"></div>
          </div>


          {/* 2. THE ACTIVE ROAD (The scroll progress)
             This overlays the static road and "fills" it with light
          */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-16 md:w-24 overflow-hidden z-0 border-x border-purple-500/50 box-border bg-purple-900/10"
          >
            {/* Glowing Center Beam (Replaces dashes with solid light) */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,1)]"></div>
            
            {/* Side Glows (The curbs lighting up) */}
            <div className="absolute inset-y-0 left-0 w-[1px] bg-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <div className="absolute inset-y-0 right-0 w-[1px] bg-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
          </motion.div>


          {/* 3. THE ITEMS (Cars/Stops on the road)
          */}
          <div className="space-y-24 md:space-y-32 py-10 relative z-10">
            {services.map((service, index) => (
              <TimelineItem
                key={index}
                data={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  data: ServiceItem;
  index: number;
}

function TimelineItem({ data, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex items-center md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Spacer for Desktop Alignment */}
      <div className="hidden md:block w-5/12" />

      {/* CENTER NODE (Embedded in the road) 
        This is positioned absolute center to sit exactly on the road
      */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        {/* The "Manhole Cover" Tech Node */}
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0a0a0a] border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center relative group">
          
          {/* Active Ring (Purple) */}
          <div className="absolute inset-0 rounded-full border border-purple-500/30 group-hover:border-purple-400/80 transition-colors duration-500" />
          
          {/* Inner Light */}
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-neutral-600 group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_#a855f7] transition-all duration-300" />
        </div>
      </div>

      {/* CONTENT CARD */}
      <div className="w-full pl-24 md:pl-0 md:w-5/12 z-10">
        <div
          className={`
            group relative p-6 md:p-8 rounded-2xl
            bg-neutral-900/40 backdrop-blur-md 
            border border-white/5 hover:border-purple-500/30
            shadow-2xl shadow-black/20
            hover:shadow-purple-900/10
            transition-all duration-500
            ${isEven ? "text-left" : "md:text-left text-left"}
          `}
        >
          {/* Connecting Line (From Node to Card) - Visual flair */}
          <div 
             className={`absolute top-1/2 -translate-y-1/2 h-[1px] w-8 bg-purple-500/20 
             ${isEven ? "hidden md:block right-full mr-4" : "hidden md:block left-full ml-4"}
             `} 
          />
          {/* Mobile Connecting Line */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-full h-[1px] w-6 bg-purple-500/20 mr-4" />


          <div className="relative z-10">
            {/* Header: Icon + Stage */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-300">
                <data.icon size={20} />
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] group-hover:text-purple-400 transition-colors">
                Stage 0{index + 1}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">
              {data.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}