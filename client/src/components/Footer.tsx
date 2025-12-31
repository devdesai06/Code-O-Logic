import { Link } from "react-scroll";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020205] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="CODE-O-LOGIC" className="h-10 w-auto" />
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Architecting the automated future. We build the systems that build your business.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer transition-colors text-gray-500">
                <span className="font-bold">X</span>
              </div>
              <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer transition-colors text-gray-500">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">NAVIGATION</h4>
            <ul className="space-y-4">
              {["Services", "Process", "Use Cases", "Why Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(" ", "")}
                    smooth={true}
                    className="text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors text-sm uppercase tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">LEGAL</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wide">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wide">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm font-mono">
            © {currentYear} CODE-O-LOGIC. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-gray-500">SYSTEM STATUS: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
