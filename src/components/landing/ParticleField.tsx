'use client';

import { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createParticle = useCallback((width: number, height: number): Particle => ({
    x: Math.random() * width,
    y: height + Math.random() * 50,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(Math.random() * 0.8 + 0.2),
    size: Math.random() * 2 + 0.5,
    alpha: Math.random() * 0.5 + 0.1,
    life: 0,
    maxLife: Math.random() * 300 + 200,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      const p = createParticle(canvas.width, canvas.height);
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Remove dead and add new particles
      particlesRef.current = particlesRef.current.filter((p) => {
        if (p.life >= p.maxLife) {
          particlesRef.current.push(createParticle(canvas.width, canvas.height));
          return false;
        }
        return true;
      });

      // Update & draw particles
      particlesRef.current.forEach((p) => {
        p.life++;
        const progress = p.life / p.maxLife;
        const fade = progress < 0.1 ? progress * 10 : progress > 0.8 ? (1 - progress) * 5 : 1;

        // Mouse influence
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx -= dx * 0.00005;
          p.vy -= dy * 0.00005;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Draw glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(56, 189, 248, ${p.alpha * fade * 0.8})`);
        gradient.addColorStop(0.5, `rgba(56, 189, 248, ${p.alpha * fade * 0.2})`);
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha * fade})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
