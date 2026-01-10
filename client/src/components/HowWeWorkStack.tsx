"use client";

import { useRef } from "react";
import { Search, Route, Cpu, Rocket } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

// --- DATA & THEMES ---
const STEPS = [
  {
    title: "01. Understand Your Business",
    description:
      "We start by understanding how your business works today, your processes, tools, and pain points.",
    icon: Search,
    image: "./understand-business.png",
    cardStyle:
      "bg-[#0b0f1c]/90 border-violet-500/25 shadow-[0_0_80px_-25px_rgba(139,92,246,0.35)]",
    iconStyle: "bg-violet-500/15 text-violet-300 border-violet-400/30",
  },
  {
    title: "02. Plan the Right Solution",
    description:
      "We suggest simple automation and web solutions that fit your workflow. Nothing unnecessary!!",
    icon: Route,
    image: "./workflow-image.png",
    cardStyle:
      "bg-[#0b0f1c]/90 border-fuchsia-500/25 shadow-[0_0_80px_-25px_rgba(217,70,239,0.35)]",
    iconStyle: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30",
  },
  {
    title: "03. Build & Improve",
    description:
      "We build the system step by step, test it with real data, and refine it based on your feedback.",
    icon: Cpu,
    image: "./software-image.png",
    cardStyle:
      "bg-[#0b0f1c]/90 border-violet-500/25 shadow-[0_0_80px_-25px_rgba(139,92,246,0.35)]",
    iconStyle: "bg-violet-500/15 text-violet-300 border-violet-400/30",
  },
  {
    title: "04. Launch & Support",
    description:
      "We deploy the system, help your team use it confidently, and stay available for improvements.",
    icon: Rocket,
    image: "./launch-image.png",
    cardStyle:
      "bg-[#0b0f1c]/90 border-fuchsia-500/25 shadow-[0_0_80px_-25px_rgba(217,70,239,0.35)]",
    iconStyle: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30",
  },
];

// --- MAIN COMPONENT ---
export default function HowWeWorkStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-transparent font-sans relative">
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-500/10 text-violet-300 text-sm font-medium tracking-wide border border-violet-500/25">
            How we work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            A simple, practical process
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            We keep things straightforward — understand your needs, build the
            right system, and help you use it effectively.
          </p>
        </div>

        {/* The Stacking Area */}
        <div ref={containerRef} className="relative w-full">
          {STEPS.map((step, i) => {
            // Calculate dynamic scale
            const targetScale = 1 - (STEPS.length - i) * 0.05;

            return (
              <Card
                key={i}
                i={i}
                step={step}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>

      {/* Spacer to ensure enough scroll room */}
     
    </section>
  );
}

// --- CARD COMPONENT ---
interface CardProps {
  i: number;
  step: (typeof STEPS)[0];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, step, progress, range, targetScale }: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = step.icon;

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={cn(
          "relative flex flex-col w-full max-w-4xl border backdrop-blur-xl rounded-[40px] p-8 md:p-14 origin-top",
          step.cardStyle
        )}
      >
        {/* Visual Header of Card */}
        <div className="flex items-center gap-6 mb-8">
          <div
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center border",
              step.iconStyle
            )}
          >
            <Icon size={28} />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            {step.title}
          </h3>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <p className="text-lg text-white/80 leading-relaxed font-light">
            {step.description}
          </p>

          {/* IMAGE BLOCK - UPDATED */}
          {/* Added 'group' for hover tracking and 'overflow-hidden' to clip the zoom */}
          <div className="h-48 md:h-64 w-full rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">
            {/* Background color in case image loads slow */}
            <div className="absolute inset-0 bg-[#0b0f1c]" />
            
            <img
              src={step.image}
              alt={step.title}
              loading="lazy"
              // 1. object-cover: Fills the block
              // 2. absolute inset-0: Stretches to corners
              // 3. transition-transform & group-hover:scale-110: Handles the zoom
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 hover:opacity-100"
            />
            
            {/* Optional: Subtle gradient overlay for better integration with dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};