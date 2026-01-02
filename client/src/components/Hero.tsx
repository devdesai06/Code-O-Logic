import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden"
    >
      {/* BRAND BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
      
      </div>

      <div className="max-w-3xl mx-auto px-5 text-center">
        
        {/* BRAND TAG */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            inline-block mb-6 px-4 py-1.5
            text-xs font-semibold tracking-widest
            rounded-full
            bg-white/5 border border-white/10
            text-accent
          "
        >
          SIMPLE SYSTEMS FOR BUSINESSES
        </motion.span>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight"
        >
          We build simple systems
          <br />
          <span className="text-primary">that remove manual work</span>
          <br />
          from your business.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Custom automation and web solutions for factories and service
          businesses — so things run smoothly without constant follow-ups,
          spreadsheets, or chaos.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4"
        >
          <a
            href="https://wa.me/918401100351"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full rounded-xl py-4
              bg-gradient-to-r from-primary to-accent
              text-black font-semibold
              shadow-lg shadow-primary/30
              active:scale-[0.98]
              transition
            "
          >
            Talk to us on WhatsApp →
          </a>

          <a
            href="#services"
            className="
              w-full rounded-xl py-4
              border border-white/15
              text-white
              hover:border-accent/60
              transition
            "
          >
            See what we build →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
