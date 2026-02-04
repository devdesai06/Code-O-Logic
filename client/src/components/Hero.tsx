"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Player } from "@remotion/player";
import { WarehouseVideo } from "./WarehouseVideo";

// --- 1. THE DECRYPT ANIMATION COMPONENT (Restored) ---
const chars = "-_~`!@#$!^&*@)+=!@{}|;@,.<>!/";
const DecryptText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const animate = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (iteration >= text.length) clearInterval(intervalRef.current!);
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    animate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <span className={className} onMouseEnter={animate}>
      {displayText}
    </span>
  );
};

// --- 2. THE HERO SECTION ---
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT COLUMN */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Automating Operations 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95]"
          >
            Stop drowning in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              manual work.
            </span>
          </motion.h1>

          {/* DECRYPT TEXT RESTORED */}
          <div className="mt-6 font-mono text-emerald-400 text-lg md:text-xl tracking-tight">
            <DecryptText text="// Build Simple Systems." />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-lg text-gray-400 text-lg leading-relaxed"
          >
            We replace messy spreadsheets and constant follow-ups with custom
            automation tailored for factories and service businesses.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://wa.me/918401100351"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Get a Free Audit <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* The Phone Container */}
          <div className="relative w-[280px] h-[580px] bg-[#010101] rounded-[50px] border-[10px] border-[#1f2c33] shadow-[0_0_50px_rgba(0,0,0,0.4)] ring-1 ring-white/10 overflow-hidden">
            {/* Dynamic Island (Better Notch) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#111] ml-auto mr-3 border border-white/5" />
            </div>

            {/* Physical side buttons (Small visual accents) */}
            <div className="absolute -left-[11px] top-24 w-[3px] h-10 bg-[#1f2c33] rounded-r-md" />
            <div className="absolute -left-[11px] top-36 w-[3px] h-16 bg-[#1f2c33] rounded-r-md" />

            {/* The Video Player */}
            <div className="h-full w-full">
              <Player
                component={WarehouseVideo}
                durationInFrames={900}
                compositionWidth={1080}
                compositionHeight={1920}
                fps={30}
                loop
                autoPlay
                controls={false}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Screen Gloss/Glare Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-30 z-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
