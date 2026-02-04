import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "./NavAnim";

const NAV_ITEMS = [
  { label: "Home", href: "home" },
  { label: "Who It’s For", href: "for-you" },
  { label: "Process", href: "howweWork" },
  { label: "Services", href: "services" },
  { label: "Why Us", href: "whyus" },
  { label: "Contact", href: "contact" },
  { label: "Team", href: "team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scroller.scrollTo(href, {
      smooth: true,
      duration: 500,
      offset: -100, // Adjusted for the larger navbar height
    });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${scrolled 
          ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/10" 
          : "py-6 bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <img
              src="/logo.png"
              alt="CODE-O-LOGIC"
              // Increased size: h-14 on mobile, h-20 on desktop
              className="
                h-14 md:h-18 w-auto 
                transition-all duration-500 
                group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]
              "
            />
          
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center relative h-full">
            <GooeyNav
              items={NAV_ITEMS}
              onItemClick={(item) => handleNavClick(item.href)}
              initialActiveIndex={0}
            />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-xl transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-2xl flex flex-col pt-32 px-10 gap-8"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-3xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight"
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Mobile Footer Decor */}
            <div className="mt-auto mb-10 border-t border-white/10 pt-6">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                // Operations Automation
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}