"use client";
import React, { useEffect, useRef } from "react";

interface BackgroundProps {
  particleCount?: number;
}

export function Background({ particleCount }: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;

    const ctx = currentCanvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: AshParticle[] = [];

    const resize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        init();
      }
    };

    class AshParticle {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speedX: number;
      speedY: number;
      wobble: number;
      wobbleSpeed: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Ash is irregular: some tiny, some larger flakes
        this.size = Math.random() * 2.5 + 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
        // Slow drifting movement
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.speedY = Math.random() * 0.4 + 0.6;
        this.wobble = Math.random() * Math.PI;
        this.wobbleSpeed = Math.random() * 0.2;
      }

      update(width: number, height: number) {
        this.x += this.speedX + Math.sin(this.wobble) * 0.8;
        this.y -= this.speedY; // Floating upwards like embers
        this.wobble += this.wobbleSpeed;

        // Wrap around logic
        if (this.y < -10) this.y = height + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.x < -10) this.x = width + 10;
      }

      draw(context: CanvasRenderingContext2D, scrollOffset: number, cHeight: number) {
        // Subtle Parallax: Ash moves slightly when you scroll
        const parallaxY = (this.y + (scrollOffset * 0.15)) % cHeight;
        
        context.fillStyle = `rgba(200, 200, 220, ${this.opacity})`;
        context.shadowBlur = 4;
        context.shadowColor = "rgba(255, 255, 255, 0.1)";
        
        context.beginPath();
        // Slightly irregular shapes instead of perfect circles
        context.ellipse(this.x, parallaxY, this.size, this.size * 0.8, this.wobble, 0, Math.PI * 2);
        context.fill();
      }
    }

    const init = () => {
      if (!canvasRef.current) return;
      particles = [];
      const { width, height } = canvasRef.current;
      const finalCount = particleCount || (window.innerWidth < 768 ? 40 : 100);
      
      for (let i = 0; i < finalCount; i++) {
        particles.push(new AshParticle(width, height));
      }
    };

    const animate = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      const scrollY = window.scrollY;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(context, scrollY, canvas.height);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
      {/* The "Upside Down" Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#1e1b4b_0%,_transparent_50%)] opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_120%,_#450a0a_0%,_transparent_40%)] opacity-40" />
      
      {/* Heavy Vignette for that claustrophobic horror feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_95%)]" />

      <canvas
        ref={canvasRef}
        className="block w-full h-full filter blur-[0.5px]"
      />
    </div>
  );
}