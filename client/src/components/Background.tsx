export  function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Deep gradient base with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d0512] to-[#000000]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/30 via-transparent to-slate-900/20" />

      {/* Animated floating shapes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Large gear top left */}
        <g className="animate-float-slow origin-[200px_250px]">
          <circle cx="200" cy="250" r="65" stroke="url(#grad1)" strokeWidth="7" fill="none" />
          <circle cx="200" cy="250" r="30" stroke="url(#grad1)" strokeWidth="5" fill="none" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="250"
              x2={200 + 50 * Math.cos((i * Math.PI) / 4)}
              y2={250 + 50 * Math.sin((i * Math.PI) / 4)}
              stroke="url(#grad1)"
              strokeWidth="3"
              opacity="0.6"
            />
          ))}
        </g>

        {/* Hexagon node top right */}
        <g className="animate-float-medium origin-[750px_200px]">
          <polygon
            points="750,140 800,170 800,230 750,260 700,230 700,170"
            stroke="url(#grad2)"
            strokeWidth="5"
            fill="none"
          />
          <circle cx="750" cy="200" r="15" fill="url(#grad2)" opacity="0.4" />
        </g>

        {/* Small rotating gear bottom left */}
        <g className="animate-float-fast origin-[250px_750px]">
          <circle cx="250" cy="750" r="45" stroke="url(#grad3)" strokeWidth="5" fill="none" />
          <circle cx="250" cy="750" r="20" stroke="url(#grad3)" strokeWidth="4" fill="none" />
        </g>

        {/* Square node mid-right */}
        <g className="animate-float-slow origin-[800px_500px]">
          <rect
            x="760"
            y="460"
            width="80"
            height="80"
            rx="15"
            stroke="url(#grad1)"
            strokeWidth="5"
            fill="none"
          />
          <rect
            x="780"
            y="480"
            width="40"
            height="40"
            rx="8"
            fill="url(#grad1)"
            opacity="0.3"
          />
        </g>

        {/* Circle cluster bottom right */}
        <g className="animate-float-medium origin-[850px_800px]">
          <circle cx="850" cy="800" r="35" stroke="url(#grad2)" strokeWidth="4" fill="none" />
          <circle cx="880" cy="780" r="20" stroke="url(#grad2)" strokeWidth="3" fill="none" />
          <circle cx="820" cy="770" r="15" stroke="url(#grad2)" strokeWidth="3" fill="none" />
        </g>

        {/* Diamond shape center */}
        <g className="animate-float-fast origin-[500px_450px]">
          <polygon
            points="500,400 550,450 500,500 450,450"
            stroke="url(#grad3)"
            strokeWidth="4"
            fill="none"
          />
        </g>

        {/* Connection lines */}
        <line
          x1="200"
          y1="250"
          x2="750"
          y2="200"
          stroke="url(#grad2)"
          strokeWidth="2"
          opacity="0.3"
          className="animate-pulse-slow"
        />
        <line
          x1="750"
          y1="200"
          x2="800"
          y2="500"
          stroke="url(#grad1)"
          strokeWidth="2"
          opacity="0.3"
          className="animate-pulse-slow"
        />
        <line
          x1="250"
          y1="750"
          x2="500"
          y2="450"
          stroke="url(#grad3)"
          strokeWidth="2"
          opacity="0.3"
          className="animate-pulse-slow"
        />

        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>

          <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <linearGradient id="grad3" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -15px) rotate(5deg); }
          66% { transform: translate(-8px, 10px) rotate(-5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-12px, 12px) rotate(8deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(8px, -10px) rotate(-10deg); }
          75% { transform: translate(-8px, 8px) rotate(10deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}