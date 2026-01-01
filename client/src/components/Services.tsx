import { motion } from "framer-motion";
import { Bot, Layers, Workflow, Database, Code2, Globe } from "lucide-react";

const services = [
  {
    title: "AI & Automation Workflows",
    description:
      "We use AI and smart automation to handle repetitive work like data entry, follow-ups, and internal processes so your team can focus on real work.",
    icon: Bot,
  },
  {
    title: "Operational Process Systems",
    description:
      "We turn messy manual processes into simple digital systems — tracking tasks, approvals, reports, and daily operations in one place.",
    icon: Layers,
  },
  {
    title: "CRM & Lead Management",
    description:
      "Web-based systems to capture, track, and manage leads automatically. No missed follow-ups, no spreadsheets, no confusion.",
    icon: Database,
  },
  {
    title: "Marketing & Communication Automation",
    description:
      "Automated messages, reminders, and campaigns across WhatsApp, email, and web tools — personalized but hands-free.",
    icon: Globe,
  },
  {
    title: "Custom Web Dashboards",
    description:
      "Simple, clean dashboards that show what’s happening in your business — sales, operations, performance, and daily progress.",
    icon: Workflow,
  },
  {
    title: "System & Tool Integration",
    description:
      "We connect your website, apps, and tools so everything works together smoothly instead of being scattered across platforms.",
    icon: Code2,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24 relative">
      {/* subtle divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white mb-5">
            Smart <span className="text-primary">business systems</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Practical automation and web systems built to simplify operations
            and help businesses run smoother.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="
                group relative p-6 sm:p-8 bg-card
                border border-white/10
                transition-colors duration-300
                hover:border-primary/40
              "
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-md bg-white/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent (desktop hover only) */}
              <div className="hidden md:block absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
