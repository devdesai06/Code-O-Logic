import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// --- 1. THE DECRYPT ANIMATION COMPONENT ---
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
            if (index < iteration) {
              return text[index];
            }
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
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={animate} // Re-trigger on hover for effect
    >
      {displayText}
    </span>
  );
};

// --- 2. THE HERO SECTION ---
export function Hero() {
  return (
    <section
      id="hero"
      // Added justify-center for perfect centering
      // No bg-color class used here, so it remains transparent
      className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden"
    >
      {/* BRAND BACKGROUND GLOW (Preserved Wrapper) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Your glow/grid background component goes here if needed */}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* BRAND TAG */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="
            px-4 py-2
            text-xs font-bold tracking-[0.2em] uppercase
            rounded-full
            bg-white/5 border border-white/10
            text-accent shadow-[0_0_15px_rgba(255,255,255,0.05)]
            backdrop-blur-sm
          ">
            Simple Systems for Businesses
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight"
        >
          Stop drowning in <br className="hidden sm:block" />
          manual work. Build
          <br />
          {/* DECRYPTED TEXT ANIMATION APPLIED HERE */}
          <span className="text-primary block mt-2">
            <DecryptText text="Simple Systems." />
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          We replace messy spreadsheets and constant follow-ups with 
          custom automation tailored for factories and service businesses.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/918401100351"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto px-8 py-4 rounded-xl
              bg-gradient-to-r from-primary to-accent
              text-black font-bold text-lg
              shadow-lg shadow-primary/25
              hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-300
            "
          >
            Talk to us on WhatsApp &rarr;
          </a>

          <a
            href="#services"
            className="
              w-full sm:w-auto px-8 py-4 rounded-xl
              border border-white/10
              bg-white/5
              text-white font-medium
              hover:bg-white/10 hover:border-white/20
              transition-all duration-300
              backdrop-blur-sm
            "
          >
            See what we build
          </a>
        </motion.div>
      </div>
    </section>
  );
}