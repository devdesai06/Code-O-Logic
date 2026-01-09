import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 1. Define the Member interface
interface TeamMember {
  name: string;
  role: string;
  bio: string;
}
const TEAM = [
  {
    name: "Dhairya Vyas",
    role: "Marketing & Client Acquisition",
    bio: "Leads marketing initiatives and client outreach, helping businesses understand how automation and web systems can improve their daily operations.",
  },
  {
    name: "Ishan Pandya",
    role: "Marketing & Advertising",
    bio: "Handles digital marketing and advertising strategies, focusing on brand visibility, lead generation, and customer engagement.",
  },
  {
    name: "Kunj Shukla",
    role: "AI Engineer & Team Lead",
    bio: "Leads the technical team and builds AI-driven solutions that automate workflows and enhance business efficiency.",
  },
  {
    name: "Dev Desai",
    role: "AI Automation & Dashboards",
    bio: "Develops AI-powered automations and business dashboards that provide clear insights and reduce manual operational work.",
  },
];

export function Team() {
  // 2. Type the state (number or null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="relative py-20 md:py-28 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            About <span className="text-blue-400">Code-O-Logic</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We simplify operations using custom web systems and intelligent
            automation, building tools that scale with your business.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {TEAM.map((member, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className={`group relative rounded-2xl border transition-colors duration-300 cursor-pointer overflow-hidden
                  ${
                    isOpen
                      ? "border-blue-500/50 bg-blue-500/5"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }
                `}
              >
                {/* Mobile Tap Indicator */}
                <div className="absolute top-4 right-4 text-white/20 sm:hidden">
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="Step 19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-400/80 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="pt-4 text-gray-300 leading-relaxed border-t border-white/5 mt-4">
                          {member.bio}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
