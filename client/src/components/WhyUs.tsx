import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Built specifically for your business needs",
  "Easy to use and easy to maintain",
  "Reduces repetitive manual work",
  "Reliable systems that work daily",
  "Direct support from the builders",
  "Affordable for growing teams",
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium text-primary mb-3 block">
              Why choose us
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5 leading-snug">
              Simple systems.
              <br className="hidden sm:block" />
              Real business impact.
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              We’re a small team that builds custom automation and web systems
              for businesses that want clarity, not complexity.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              No generic software, no unnecessary features — just systems that
              solve real problems and fit into your daily operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/10 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE PANEL */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="bg-card border border-white/10 rounded-xl p-6 md:p-8">
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How we’re different
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We don’t push complex enterprise tools. We build what you
                    actually need, start small, and improve it as you grow.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <div className="text-xl font-semibold text-white mb-1">
                      Direct
                    </div>
                    <div className="text-sm text-gray-400">communication</div>
                  </div>

                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <div className="text-xl font-semibold text-white mb-1">
                      Clear
                    </div>
                    <div className="text-sm text-gray-400">pricing & scope</div>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    You work directly with the people building your system — no
                    ticket queues, no layers, no confusion.
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
