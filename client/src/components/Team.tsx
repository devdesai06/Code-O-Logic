import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dhairya Vyas",
    role: "Co-Founder",
    description:
      "Focused on business strategy, operations, and understanding real-world problems that can be solved with systems.",
  },
  {
    name: "Kunj Shukla",
    role: "Co-Founder · Automation & AI",
    description:
      "Works on automation logic and AI-driven workflows to simplify complex business processes.",
  },
  {
    name: "Dev Desai",
    role: "Web Developer",
    description:
      "Builds clean, reliable web systems and dashboards that businesses can actually use every day.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 relative">
      {/* Soft background for contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary
 mb-3 block">
            Meet the team
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            The People Behind the Systems
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We’re a small, focused team building practical AI, automation,
            and web solutions for real businesses.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              {/* Photo Placeholder */}
              <div className="w-40 h-40 mx-auto mb-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 text-sm">
                Photo
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-primary
 text-sm font-medium mb-3">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
