import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, Monitor, Check } from "lucide-react";

const steps = [
  {
    title: "Quick WhatsApp conversation",
    description:
      "You message us on WhatsApp. We ask a few questions to understand your business and current process.",
    icon: MessageCircle,
  },
  {
    title: "Short call (if needed)",
    description:
      "If required, we do a 10–15 minute call to clearly understand where work gets stuck or delayed.",
    icon: PhoneCall,
  },
  {
    title: "Simple demo or example",
    description:
      "We show you a small demo or example of how a system could work for your business.",
    icon: Monitor,
  },
  {
    title: "You decide",
    description:
      "If it makes sense, we discuss next steps. If not, no pressure — the conversation still helps.",
    icon: Check,
  },
];

export function WhatHappensNext() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            What happens after you message us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No sales pressure, no long meetings — just a clear, simple process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex items-start gap-4 p-5 bg-card border border-white/10 rounded-lg"
            >
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Soft reassurance */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            We build a demo or example first so you can see the idea clearly 
            before deciding anything.
          </p>
        </div>
      </div>
    </section>
  );
}
