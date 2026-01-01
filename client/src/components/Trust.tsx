import { motion } from "framer-motion";
import { Activity, BarChart3, Clock, Zap } from "lucide-react";

const stats = [
  { label: "Active pilot teams", value: "12", icon: Activity },
  { label: "Processes automated", value: "47", icon: Zap },
  { label: "Time saved per week", value: "18 hrs", icon: Clock },
  { label: "Average cost reduction", value: "22%", icon: BarChart3 },
];

const companies = [
  "Apex Fabrication",
  "BlueRiver Logistics",
  "Nova Services Co.",
  "PrimeTech Works",
];

export function Trust() {
  return (
    <section className="py-16 md:py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Companies */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
            Working with growing businesses
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {companies.map((company) => (
              <span
                key={company}
                className="text-sm sm:text-base font-medium text-gray-400"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="
                p-5 md:p-6
                border border-white/10
                bg-card
                rounded-lg
                text-center
              "
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>

              <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
                {stat.value}
              </div>

              <p className="text-xs md:text-sm text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
