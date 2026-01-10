"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Coins,
  Settings2,
  MousePointer2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* ------------------------ CAROUSEL TYPES --------------------------- */
/* ------------------------------------------------------------------ */

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

const DRAG_BUFFER = 10;
const VELOCITY_THRESHOLD = 500;
const GAP = 24;
const CARD_WIDTH_DESKTOP = 380;
const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
};

/* ------------------------------------------------------------------ */
/* -------------------------- CAROUSEL ------------------------------- */
/* ------------------------------------------------------------------ */

function Carousel({
  items,
  autoplay = true,
  autoplayDelay = 4000,
}: CarouselProps) {
  // Responsive width logic (simplified)
  const [width, setWidth] = useState(CARD_WIDTH_DESKTOP);
  
  useEffect(() => {
    const handleResize = () => {
      // On mobile, use screen width minus padding
      if (window.innerWidth < 640) {
        setWidth(window.innerWidth - 48); 
      } else {
        setWidth(CARD_WIDTH_DESKTOP);
      }
    };
    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const trackItemOffset = width + GAP;

  // Clone items for infinite loop illusion
  const itemsForRender = useMemo(() => {
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items]);

  const [currentIndex, setCurrentIndex] = useState(1);
  const x = useMotionValue(-currentIndex * trackItemOffset);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Sync x value when index changes (controlled animation)
  useEffect(() => {
    if (isDragging) return;
    x.set(-currentIndex * trackItemOffset);
  }, [currentIndex, trackItemOffset, isDragging, x]);

  // Handle Infinite Loop Jumps
  const handleAnimationComplete = () => {
    if (currentIndex === 0) {
      setCurrentIndex(itemsForRender.length - 2);
      x.jump(- (itemsForRender.length - 2) * trackItemOffset);
    } else if (currentIndex === itemsForRender.length - 1) {
      setCurrentIndex(1);
      x.jump(-trackItemOffset);
    }
  };

  /* Autoplay Logic */
  useEffect(() => {
    if (!autoplay || isHovered || isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
    setIsHovered(true);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    setIsHovered(false);

    const { offset, velocity } = info;
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -VELOCITY_THRESHOLD || offset.x < -DRAG_BUFFER) {
      setCurrentIndex((prev) => prev + 1);
    } else if (swipe > VELOCITY_THRESHOLD || offset.x > DRAG_BUFFER) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const manualMove = (dir: 1 | -1) => {
    setCurrentIndex((prev) => prev + dir);
  };

  // Calculate the "real" active index for the dots
  const activeDotIndex = (currentIndex - 1 + items.length) % items.length;

  return (
    <div
      className="relative flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards Track */}
      <div 
        className="overflow-hidden w-full relative" 
        style={{ width: width, height: 280 }} // Fixed height container prevents layout shift
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }} // Free drag
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={{ x: -currentIndex * trackItemOffset }}
          transition={isDragging ? { duration: 0 } : SPRING_OPTIONS}
          onAnimationComplete={handleAnimationComplete}
          className="flex cursor-grab active:cursor-grabbing items-center absolute left-0"
          style={{ 
            gap: GAP, 
            x 
          }}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItemCard
              key={`${item.id}-${index}`}
              item={item}
              width={width}
              isActive={index === currentIndex}
            />
          ))}
        </motion.div>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-between w-full mt-8 px-4">
        {/* Left Arrow */}
        <button
          onClick={() => manualMove(-1)}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          {items.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentIndex(i + 1)}
              className={`h-2 rounded-full transition-colors duration-300 ${
                activeDotIndex === i ? "bg-primary w-6" : "bg-white/20 w-2"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => manualMove(1)}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* --------------------- CAROUSEL ITEM ------------------------------- */
/* ------------------------------------------------------------------ */

function CarouselItemCard({
  item,
  width,
  isActive,
}: {
  item: CarouselItem;
  width: number;
  isActive: boolean;
}) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.4,
      }}
      transition={SPRING_OPTIONS}
      style={{
        width: width,
        minWidth: width,
      }}
      className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col gap-6 h-[260px] justify-center relative backdrop-blur-sm shadow-xl"
    >
      {/* Subtle Glow Effect for active card */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl bg-primary/5 pointer-events-none" />
      )}

      <div className="flex items-center gap-4 relative z-10">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          {item.icon}
        </div>
        <h3 className="text-xl font-semibold text-white tracking-wide">
          {item.title}
        </h3>
      </div>
      <p className="text-gray-400 leading-relaxed text-base relative z-10">
        {item.description}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* --------------------------- WHY US -------------------------------- */
/* ------------------------------------------------------------------ */

// Added better icons for visual appeal
const BENEFITS: CarouselItem[] = [
  {
    id: 1,
    title: "Built for your business",
    description: "Tailored specifically for your workflow. No generic templates, just custom solutions.",
    icon: <Settings2 className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "Easy to maintain",
    description: "Designed with simplicity in mind. Our systems are intuitive and require zero technical debt.",
    icon: <MousePointer2 className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "Reduce manual work",
    description: "Automate repetitive tasks and free up your team to focus on high-value strategy.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: "Reliable systems",
    description: "Rock-solid infrastructure that works 24/7 without constant supervision.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    id: 5,
    title: "Direct support",
    description: "Work directly with the builders. No support tickets, just real conversations.",
    icon: <HeartHandshake className="w-6 h-6 text-primary" />,
  },
  {
    id: 6,
    title: "Affordable",
    description: "Enterprise-grade quality priced for growing teams and startups.",
    icon: <Coins className="w-6 h-6 text-primary" />,
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
              <CheckCircle2 size={14} />
              Why choose us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Simple systems. <br />
              <span className="text-white/50">Real impact.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We’re a small team that builds custom automation and web systems
              for businesses that want clarity, not complexity.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              No generic software, no unnecessary features — just systems that
              solve real problems and fit into your daily operations.
            </p>
          </motion.div>

          {/* RIGHT -> CAROUSEL */}
          <div className="w-full flex justify-center lg:justify-end">
            <Carousel items={BENEFITS} />
          </div>
        </div>
      </div>
    </section>
  );
}