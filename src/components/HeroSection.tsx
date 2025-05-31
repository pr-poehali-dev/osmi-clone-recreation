import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [trailPoints, setTrailPoints] = useState<
    { x: number; y: number; timestamp: number }[]
  >([]);
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const newPoint = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          timestamp: Date.now(),
        };

        setTrailPoints((prev) => [...prev.slice(-15), newPoint]);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setTrailPoints([]);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      heroElement.addEventListener("mouseenter", handleMouseEnter);
      heroElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        heroElement.removeEventListener("mouseenter", handleMouseEnter);
        heroElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Анимация затухания точек
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      setTrailPoints((prev) =>
        prev.filter((point) => now - point.timestamp < 800),
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isHovering) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none bg-slate-900 p-5"
    >
      {/* Trail effect */}
      {isHovering && trailPoints.length > 1 && (
        <svg
          className="absolute inset-0 pointer-events-none z-50"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient
              id="trailGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ff4978" stopOpacity="0" />
              <stop offset="100%" stopColor="#ff4978" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d={`M ${trailPoints.map((point) => `${point.x},${point.y}`).join(" L ")}`}
            stroke="url(#trailGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter:
                "drop-shadow(0 0 8px #ff4978) drop-shadow(0 0 16px #ff4978)",
              opacity: Math.min(trailPoints.length / 10, 1),
            }}
          />
          {trailPoints.map((point, index) => {
            const age = Date.now() - point.timestamp;
            const opacity = Math.max(0, 1 - age / 800);
            const size = 2 + opacity * 3;

            return (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r={size}
                fill="#ff4978"
                style={{
                  opacity: opacity * 0.8,
                  filter: `blur(${(1 - opacity) * 2}px)`,
                }}
              />
            );
          })}
        </svg>
      )}

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight font-montserrat">
          СОЗДАЕМ
          <br />
          <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            WEB И AI
          </span>
          <br />
          ПРОДУКТЫ
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
