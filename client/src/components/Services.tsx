import { motion } from "framer-motion";
import { Bot, Layers, Workflow, Database, Code2, Globe } from "lucide-react";

const services = [
  {
    title: "AI Workflow Automation",
    description: "End-to-end autonomous agents that handle complex decision-making tasks without human intervention.",
    icon: Bot,
    color: "cyan"
  },
  {
    title: "Business Process Automation",
    description: "Streamline operations by removing bottlenecks. We digitize and automate manual SOPs.",
    icon: Layers,
    color: "purple"
  },
  {
    title: "CRM & Lead Systems",
    description: "Automated lead nurturing, scoring, and routing. Never let a prospect slip through the cracks.",
    icon: Database,
    color: "blue"
  },
  {
    title: "Marketing Automation",
    description: "Personalized content delivery at scale. Dynamic email sequences and ad optimizations.",
    icon: Globe,
    color: "green"
  },
  {
    title: "No-Code / Low-Code Builds",
    description: "Rapid deployment using best-in-class tools like n8n, Make, and Retool for speed and agility.",
    icon: Workflow,
    color: "pink"
  },
  {
    title: "Custom API Integration",
    description: "Connect disconnected tools. We build custom bridges between your logic islands.",
    icon: Code2,
    color: "orange"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#05060A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            SYSTEM <span className="text-cyan-400">MODULES</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Our core competencies deployed to upgrade your business infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-card border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className={`w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors`}>
                <service.icon className={`w-6 h-6 text-${service.color}-400 group-hover:text-cyan-400 transition-colors`} />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
