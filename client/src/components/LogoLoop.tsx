"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // Time in seconds for one full loop
  direction?: "left" | "right" | "up" | "down";
  logoHeight?: number; // Height in px
  gap?: number; // Gap in px
  hoverSpeed?: number; // Speed when hovered (0 to pause)
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

export default function LogoLoop({
  logos,
  speed = 40,
  direction = "left",
  logoHeight = 48,
  gap = 40,
  hoverSpeed,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "white",
  ariaLabel = "Logo marquee",
  className,
}: LogoLoopProps) {
  const isVertical = direction === "up" || direction === "down";
  
  const duration = speed + "s";
  // If hoverSpeed is 0, we don't change duration, we just pause (handled in class logic)
  // If hoverSpeed is > 0, we change duration
  const hoverDuration = (hoverSpeed && hoverSpeed > 0) ? hoverSpeed + "s" : duration;
  const isPausedOnHover = hoverSpeed === 0;

  // Repeat logos to ensure infinite loop effect without gaps
  // (Repeated 4 times to fill wide screens)
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      className={cn(
        "relative overflow-hidden flex z-0 group bg-transparent", 
        isVertical ? "flex-col h-full" : "w-full flex-row",
        className
      )}
      style={
        {
          "--gap": `${gap}px`,
          "--duration": duration,
          "--hover-duration": hoverDuration,
          "--logo-height": `${logoHeight}px`,
        } as CSSProperties
      }
      aria-label={ariaLabel}
    >
      {/* Gradient Fade Masks */}
      {fadeOut && (
        <>
          <div
            className={cn(
              "absolute z-10 pointer-events-none",
              isVertical
                ? "left-0 right-0 top-0 h-24 bg-gradient-to-b from-[var(--fade-color)] to-transparent"
                : "top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[var(--fade-color)] to-transparent"
            )}
            style={{ "--fade-color": fadeOutColor } as CSSProperties}
          />
          <div
            className={cn(
              "absolute z-10 pointer-events-none",
              isVertical
                ? "left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-[var(--fade-color)] to-transparent"
                : "top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[var(--fade-color)] to-transparent"
            )}
            style={{ "--fade-color": fadeOutColor } as CSSProperties}
          />
        </>
      )}

      {/* The Track */}
      <div
        className={cn(
          "flex w-max items-center will-change-transform", // Fix: Added will-change-transform for smoothness
          isVertical 
            ? "flex-col h-max animate-[marquee-vertical_var(--duration)_linear_infinite]" 
            : "flex-row animate-marquee",
          // Fix: If speed is 0, use PAUSED state. If not, use duration change.
          isPausedOnHover 
            ? "group-hover:[animation-play-state:paused]" 
            : "group-hover:[animation-duration:var(--hover-duration)]"
        )}
        style={{
          gap: "var(--gap)",
          animationDirection: direction === "right" || direction === "down" ? "reverse" : "normal",
        }}
      >
        {repeatedLogos.map((item, idx) => (
          <LogoItemRenderer
            key={`${idx}-${item.title}`}
            item={item}
            height={logoHeight}
            scaleOnHover={scaleOnHover}
          />
        ))}
      </div>
      
      {/* Duplicate Track for seamless loop */}
      <div
        aria-hidden="true"
        className={cn(
          "flex w-max items-center will-change-transform",
          isVertical 
            ? "flex-col h-max animate-[marquee-vertical_var(--duration)_linear_infinite]" 
            : "flex-row animate-marquee",
          isVertical ? "mt-[var(--gap)]" : "ml-[var(--gap)]",
          // Fix: Same hover logic here
          isPausedOnHover 
            ? "group-hover:[animation-play-state:paused]" 
            : "group-hover:[animation-duration:var(--hover-duration)]"
        )}
        style={{
          gap: "var(--gap)",
          animationDirection: direction === "right" || direction === "down" ? "reverse" : "normal",
        }}
      >
        {repeatedLogos.map((item, idx) => (
          <LogoItemRenderer
            key={`dup-${idx}-${item.title}`}
            item={item}
            height={logoHeight}
            scaleOnHover={scaleOnHover}
          />
        ))}
      </div>
    </div>
  );
}

// Sub-component to render individual items
const LogoItemRenderer = ({ item, height, scaleOnHover }: { item: LogoItem; height: number; scaleOnHover: boolean }) => {
  const Wrapper = item.href ? "a" : "div";
  
  return (
    <Wrapper
      href={item.href}
      target={item.href ? "_blank" : undefined}
      rel={item.href ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 relative select-none",
        scaleOnHover && "hover:scale-110 active:scale-95"
      )}
      style={{ height }}
    >
      {item.node ? (
        // Scale SVG icons to fit height
        <div className="w-auto h-full [&>svg]:w-auto [&>svg]:h-full">
          {item.node}
        </div>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          draggable={false} // Prevent image dragging interruption
        />
      )}
    </Wrapper>
  );
};