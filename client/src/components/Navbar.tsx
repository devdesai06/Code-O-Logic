import { Link } from "react-scroll";
import { Cpu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-8 h-8 text-cyan-400 relative z-10" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            CODE-O-<span className="text-cyan-400">LOGIC</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Process", "Use Cases", "Why Us"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(" ", "")}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-widest hover:text-glow"
            >
              {item}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-2 rounded bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-display font-semibold text-sm hover:bg-cyan-500 hover:text-black transition-all duration-300 cursor-pointer box-glow-hover"
          >
            INITIATE CONTACT
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
