import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-cyan-900/10 to-[#05060A]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight"
        >
          TURN MANUAL WORK INTO <br />
          <span className="text-primary
 text-glow">AUTOMATED LOGIC</span>.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="contact"
            smooth={true}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold font-display tracking-wide text-lg rounded hover:bg-cyan-400 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] cursor-pointer"
          >
            START YOUR AUTOMATION JOURNEY
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="mt-6 text-gray-500 font-mono text-sm">
            LIMITED AUDIT SLOTS AVAILABLE FOR Q3
          </p>
        </motion.div>
      </div>
    </section>
  );
}
