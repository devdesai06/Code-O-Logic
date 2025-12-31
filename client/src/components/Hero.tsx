import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#05060A] to-[#05060A]">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            System Online v2.4
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-6 leading-tight"
        >
          AUTOMATE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">LOGIC</span>.
          <br />
          SCALE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 text-glow-purple">BUSINESS</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed"
        >
          We build AI-powered automation systems that eliminate manual work, optimize workflows, and unlock exponential growth for modern enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="contact"
            smooth={true}
            offset={-50}
            className="group relative px-8 py-4 bg-cyan-500 text-black font-bold font-display tracking-wide text-sm clip-path-slant cursor-pointer hover:bg-cyan-400 transition-colors w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              BOOK AUTOMATION AUDIT
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
          </Link>

          <Link
            to="services"
            smooth={true}
            offset={-80}
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold font-display tracking-wide text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-pointer w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              SEE SYSTEMS
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Scroll to Initialize</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
      </motion.div>
    </section>
  );
}
