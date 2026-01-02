import { motion } from "framer-motion";

const teamNames = [
  "Dhairya Vyas",
  "Kunj Shukla",
  "Dev Desai",
];

export function Team() {
  return (
    <section id="team" className="py-24 relative">
      {/* Soft background */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            About Code-O-Logic
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Code-O-Logic helps small businesses work better using simple web
            systems and smart automation.
            <br />
            <br />
            We reduce manual work, organize daily operations, and give business
            owners clear visibility of what is happening — all in one easy-to-use
            system.
          </p>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Built and managed by a small focused team:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white text-lg font-medium">
            {teamNames.map((name, index) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
