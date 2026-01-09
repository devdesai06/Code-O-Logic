"use client";
import React, { useEffect, useRef } from "react";

interface BackgroundProps {
  particleCount?: number;
}

export function Background({ particleCount }: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      opacity: number;

      constructor(cvs: HTMLCanvasElement) {
        this.x = Math.random() * cvs.width;
        this.y = Math.random() * cvs.height;
        this.baseX = this.x;
        this.baseY = this.y;
        // INCREASED SIZE: Larger, more visible nodes
        this.size = Math.random() * 1.5 + 1.5; 
        this.density = Math.random() * 25 + 1;
        // SLIGHTLY LOWER OPACITY: To balance the larger size/count
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(148, 163, 184, ${this.opacity})`; 
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dxReturn = this.x - this.baseX;
            this.x -= dxReturn / 20;
          }
          if (this.y !== this.baseY) {
            let dyReturn = this.y - this.baseY;
            this.y -= dyReturn / 20;
          }
        }
      }
    }

    const drawLines = (context: CanvasRenderingContext2D) => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          // Slightly increased line distance to accommodate more particles
          if (distance < 110) {
            const opacity = 1 - distance / 110;
            context.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.12})`;
            context.lineWidth = 0.8;
            context.beginPath();
            context.moveTo(particles[a].x, particles[a].y);
            context.lineTo(particles[b].x, particles[b].y);
            context.stroke();
          }
        }
      }
    };

    const init = () => {
      particles = [];
      // INCREASED NUMBERS: More dense for a more "active" feel
      const finalCount = particleCount || (window.innerWidth < 768 ? 80 : 180);
      
      for (let i = 0; i < finalCount; i++) {
        particles.push(new Particle(canvas));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawLines(ctx);

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,41,59,0.5),transparent)]" />
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-70"
      />
    </div>
  );
}