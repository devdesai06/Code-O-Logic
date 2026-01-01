import { motion } from "framer-motion";
import { Search, PenTool, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Understand Your Business",
    description:
      "We start by understanding how your business works today — your processes, tools, and pain points.",
    icon: Search,
  },
  {
    id: "02",
    title: "Plan the Right Solution",
    description:
      "We suggest simple automation and web solutions that fit your workflow — nothing unnecessary.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Build & Improve",
    description:
      "We build the system step by step, test it with real data, and refine it based on your feedback.",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Launch & Support",
    description:
      "We deploy the system, help your team use it confidently, and stay available for improvements.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-medium text-primary mb-3 block">
            How we work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            A simple, practical process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            We keep things straightforward — understand your needs, build the
            right system, and help you use it effectively.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-center md:text-left"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5 mx-auto md:mx-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-white mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
