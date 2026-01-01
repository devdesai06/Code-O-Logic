export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo.png"
              alt="Code-O-Logic"
              className="h-16 w-auto mb-2"
            />
            <p className="text-sm text-gray-500 text-center md:text-left max-w-xs">
              Practical automation and web systems for growing businesses.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              © {currentYear} Code-O-Logic
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Built with care by a small, focused team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
