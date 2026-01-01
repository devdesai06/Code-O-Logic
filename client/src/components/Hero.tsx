import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24">
      {/* Contrast overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl
            font-extrabold text-white
            mb-5 md:mb-6
            leading-snug md:leading-tight
          "
        >
          We build simple systems
          <span className="block text-primary">
            that remove manual work
          </span>
          from your business.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="
            text-gray-300
            text-base sm:text-lg md:text-xl
            mb-8 md:mb-10
            max-w-3xl mx-auto
            leading-relaxed
          "
        >
          Custom automation and web solutions for factories and service businesses —
          so things run smoothly without constant follow-ups, spreadsheets, or chaos.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <a
            href="https://wa.me/918401100351"
            className="
              px-8 py-4
              bg-primary text-black
              font-semibold rounded-md
              transition hover:opacity-90
              inline-flex items-center justify-center
            "
          >
            Talk to us on WhatsApp
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>

          <Link
            to="services"
            smooth
            offset={-80}
            className="
              px-8 py-4
              border border-white/30
              text-white rounded-md
              hover:text-primary
              cursor-pointer transition
              inline-flex items-center justify-center
            "
          >
            See what we build
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
