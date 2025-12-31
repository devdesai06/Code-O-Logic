import { motion } from "framer-motion";
import { Search, PenTool, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Audit & Discovery",
    description: "We map your current manual workflows and identify high-impact automation opportunities.",
    icon: Search
  },
  {
    id: "02",
    title: "System Architecture",
    description: "We design a logic blueprint tailored to your stack, ensuring scalability and security.",
    icon: PenTool
  },
  {
    id: "03",
    title: "Build & Testing",
    description: "Rapid development sprints with rigorous testing in a sandbox environment.",
    icon: Cpu
  },
  {
    id: "04",
    title: "Live Deployment",
    description: "Seamless integration into your production environment with team training.",
    icon: Rocket
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-[#08090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">The Protocol</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            EXECUTION <span className="text-purple-400">SEQUENCE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="w-24 h-24 bg-[#08090f] border border-white/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10 group hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
                <step.icon className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-[#05060A] font-bold font-mono text-xs">
                  {step.id}
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
