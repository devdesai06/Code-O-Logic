import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Layers, MousePointer2 } from "lucide-react";

// --- 1. THE DECRYPT ANIMATION COMPONENT (Preserved & Optimized) ---
const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

interface DecryptTextProps {
  text: string;
  className?: string;
}

const DecryptText = ({ text, className = "" }: DecryptTextProps) => {
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
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    animate();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <span className={className} onMouseEnter={animate}>
      {displayText}
    </span>
  );
};

// --- 2. THE HERO SECTION (SaaS Upgrade) ---
export   function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-transparent">
      {/* Visual Depth: Abstract Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Shimmering Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            Automating Operations 2026
          </span>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05]"
        >
          Stop drowning in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            manual work.
          </span>
        </motion.h1>

        {/* The Decrypt Accent */}
        <div className="mt-6 font-mono text-emerald-400 text-lg md:text-xl tracking-tight">
          <DecryptText text="// Build Simple Systems." />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
        >
          We replace messy spreadsheets and constant follow-ups with 
          custom automation tailored for factories and service businesses.
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/918401100351"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2"
          >
            Get a Free Audit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors font-medium border-b border-transparent hover:border-white/20 pb-1">
            See our process
          </a>
        </motion.div>
      </div>
    </section>
  );
}