import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = -999;
    let mouseY = -999;
    let frameCount = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Throttle mouse tracking
    let lastMouseUpdate = 0;
    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 30) return; // max 33fps mouse updates
      lastMouseUpdate = now;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 1.8 + 0.4;
        this.opacity = Math.random() * 0.5 + 0.15;
        const colors = ["#915EFF", "#a476ff", "#c084fc"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 100;

        if (distSq < maxDist * maxDist) {
          const dist = Math.sqrt(distSq);
          const force = (maxDist - dist) / maxDist;
          this.vx -= (dx / dist) * force * 1.8;
          this.vy -= (dy / dist) * force * 1.8;
        }

        this.vx += (this.baseX - this.x) * 0.05;
        this.vy += (this.baseY - this.y) * 0.05;
        this.vx *= 0.85;
        this.vy *= 0.85;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = this.opacity;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    // Reduced count for performance
    const count = Math.min(
      Math.floor((canvas.width * canvas.height) / 14000),
      80
    );
    const particles: Particle[] = Array.from({ length: count }, () => new Particle());

    const drawConnections = () => {
      const maxConnDist = 80;
      const maxConnDistSq = maxConnDist * maxConnDist;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxConnDistSq) {
            const dist = Math.sqrt(distSq);
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(145,94,255,${0.12 * (1 - dist / maxConnDist)})`;
            ctx!.lineWidth = 0.4;
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      frameCount++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connections every other frame to halve the cost
      if (frameCount % 2 === 0) {
        drawConnections();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
