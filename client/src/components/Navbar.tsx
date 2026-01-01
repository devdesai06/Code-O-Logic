import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40 && !scrolled) setScrolled(true);
      if (window.scrollY <= 40 && scrolled) setScrolled(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-200
        ${scrolled ? "bg-background border-b border-white/10" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO */}
          <div className="flex items-center cursor-pointer">
            <img
              src="/logo.png"
              alt="CODE-O-LOGIC"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Process", "Why Us", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(" ", "")}
                smooth
                duration={400}
                offset={-80}
                className="
                  text-sm font-medium text-gray-400
                  hover:text-primary cursor-pointer
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
