import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Logic-First System Design",
  "Enterprise-Grade Security",
  "Custom API Development",
  "ROI-Driven Architecture",
  "Global 24/7 Monitoring",
  "Scalable Cloud Infrastructure"
];

export function WhyUs() {
  return (
    <section id="whyus" className="py-24 bg-[#05060A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              WHY UPGRADE TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                CODE-O-LOGIC?
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We don't just patch software together. We engineer robust, intelligent ecosystems that become the backbone of your operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-sm font-medium text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Abstract Tech Visual */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite_linear]" />
              
              <div className="h-full w-full border border-cyan-500/20 rounded-xl flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-white/10 mb-2">99.9%</div>
                  <div className="text-cyan-400 font-mono tracking-widest text-sm">UPTIME GUARANTEED</div>
                </div>
              </div>

              {/* Decorative Orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
