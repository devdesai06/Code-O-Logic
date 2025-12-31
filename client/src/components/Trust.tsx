import { motion } from "framer-motion";
import { Activity, BarChart3, Clock, Zap } from "lucide-react";

const stats = [
  { label: "Hours Saved", value: "50,000+", icon: Clock, color: "text-cyan-400" },
  { label: "Workflows Automated", value: "1,200+", icon: Zap, color: "text-purple-400" },
  { label: "Efficiency Gain", value: "350%", icon: Activity, color: "text-green-400" },
  { label: "ROI Generated", value: "$5M+", icon: BarChart3, color: "text-blue-400" },
];

const companies = [
  "TECHSPACE", "NEXUS CORP", "VANGUARD AI", "OMEGA SYSTEMS", "SYNTHWAVE INC", "FUTURE LOGIC"
];

export function Trust() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">
            Trusted by fast-growing logic engines worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {companies.map((company, i) => (
              <span key={i} className="text-xl md:text-2xl font-display font-bold text-white/40 hover:text-cyan-400/80 cursor-default transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className={`absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className={`text-3xl md:text-4xl font-display font-bold mb-2 ${stat.color} drop-shadow-lg`}>
                {stat.value}
              </h3>
              <p className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
