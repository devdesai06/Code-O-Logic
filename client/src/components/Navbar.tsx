import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        bg-background
        md:${scrolled ? "bg-background" : "bg-transparent"}
        border-b border-white/10
        backdrop-blur-md
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO — BIG & VISIBLE */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="CODE-O-LOGIC"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Process", "Why Us", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(" ", "")}
                smooth
                duration={400}
                offset={-90}
                className="
                  text-xs font-semibold text-gray-300
                  hover:text-accent cursor-pointer
                  uppercase tracking-widest
                  transition-colors
                "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
