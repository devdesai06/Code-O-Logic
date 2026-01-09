import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { Menu, X } from "lucide-react";
import GooeyNav from "./NavAnim";

const NAV_ITEMS = [
  { label: "Home", href: "home" },
  { label: "Who It’s For", href: "for-you" },
  { label: "Services", href: "services" },
  { label: "Process", href: "process" },
  { label: "Why Us", href: "whyus" },
  { label: "Contact", href: "contact" },
  { label: "Team", href: "team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    scroller.scrollTo(href, {
      smooth: true,
      duration: 500,
      offset: -90, // height of navbar
    });
  };

  return (
    <nav
      className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${scrolled ? "bg-background/90" : "bg-transparent"}
    backdrop-blur-md
  `}
    >
      {/* NAVBAR BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <img
            src="/logo.png"
            alt="CODE-O-LOGIC"
            className="h-10 md:h-14 w-auto"
          />

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center h-full relative">
            <GooeyNav
              items={NAV_ITEMS}
              onItemClick={(item) => handleNavClick(item.href)}
              initialActiveIndex={0}
            />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm">
          <div className="absolute top-20 left-0 right-0 bg-background/95 border-t border-white/10">
            <div className="flex flex-col px-6 py-6 gap-5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-lg font-medium text-white hover:text-gray-300 transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
