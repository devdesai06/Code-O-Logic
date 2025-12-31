import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, Users, Megaphone, TrendingUp } from "lucide-react";
import { useState } from "react";

const useCases = [
  {
    id: "founders",
    label: "Founders",
    icon: Briefcase,
    title: "Reclaim Your Time",
    content: "Stop wearing every hat. Automate admin, scheduling, and reporting so you can focus on strategy and vision."
  },
  {
    id: "sales",
    label: "Sales Teams",
    icon: TrendingUp,
    title: "Never Miss a Lead",
    content: "Instant lead qualification, automated follow-ups, and CRM data enrichment. Close deals while you sleep."
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    title: "Scale Your Reach",
    content: "Content distribution, ad optimization, and social media scheduling on autopilot across all channels."
  },
  {
    id: "ops",
    label: "Operations",
    icon: Users,
    title: "Error-Free Workflows",
    content: "Standardize onboarding, invoicing, and project management. Eliminate human error from the equation."
  },
  {
    id: "ecom",
    label: "E-commerce",
    icon: ShoppingCart,
    title: "Inventory & Support",
    content: "Sync inventory across platforms, automate returns, and handle customer support inquiries instantly."
  }
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="usecases" className="py-24 bg-[#05060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            SECTOR <span className="text-purple-400">APPLICATIONS</span>
          </h2>
          <p className="text-gray-400">Targeted logic injection for every department.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 p-4 text-left border-l-2 transition-all duration-300 ${
                  activeTab === index 
                    ? "border-cyan-400 bg-white/5 text-white" 
                    : "border-white/10 text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]"
                }`}
              >
                <useCase.icon className={`w-5 h-5 ${activeTab === index ? "text-cyan-400" : "text-gray-600"}`} />
                <span className="font-display font-bold tracking-wide uppercase text-sm">
                  {useCase.label}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full border border-white/10 bg-card p-8 md:p-12 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full" />
              
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                {useCases[activeTab].title}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {useCases[activeTab].content}
              </p>
              
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
