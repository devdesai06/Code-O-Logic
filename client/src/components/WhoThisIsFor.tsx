import { motion } from "framer-motion";
import { Check } from "lucide-react";

const forWho = [
  "You run a factory, service business, or operations-heavy company",
  "Daily work depends on WhatsApp, Excel, calls, and manual follow-ups",
  "Things slip through the cracks when people forget or get busy",
  "You want systems that work quietly in the background",
  "You prefer simple tools over complicated enterprise software",
];

export function WhoThisIsFor() {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            This is for you if
          </h2>

          <div className="space-y-4">
            {forWho.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                
                className="flex items-start gap-3"
              >
                <div className="mt-1">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-400">
              If this sounds familiar, a short conversation can usually uncover
              where automation or a simple web system can save you time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
