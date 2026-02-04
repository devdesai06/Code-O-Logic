import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      {/* 1. THE RADIAL GLOW: Inherited from Team Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Brand & Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-4 group">
              <img
                src="/logo.png"
                alt="Code-O-Logic"
                className="h-12 w-auto brightness-110 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-white font-bold tracking-tight text-lg">
                Code-O-Logic
              </span>
            </div>
            <p className="text-sm text-gray-500 text-center md:text-left max-w-xs leading-relaxed">
              Simplifying operations using custom web systems and intelligent automation.
            </p>
          </motion.div>

          {/* Links / Copyright Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            {/* Social / Quick Links (Optional SaaS Touch) */}
            <div className="flex gap-6 mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                <a href="#team" className="hover:text-blue-400 transition-colors">Team</a>
                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                <a href="https://wa.me/918401100351" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
            </div>

            <div className="space-y-1">
                <p className="text-xs text-gray-400 font-medium">
                © {currentYear} Code-O-Logic. All rights reserved.
                </p>
                <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                Built with precision in India
                </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </footer>
  );
}