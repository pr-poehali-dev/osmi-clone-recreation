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
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none"
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
          {/* Точки на линии для дополнительного эффекта */}
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
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-osmi-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-osmi-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-osmi-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
            Разработка
            <span className="block text-osmi-accent">IT решений</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Создаем современные веб-приложения, мобильные решения и
            автоматизируем бизнес-процессы
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-osmi-accent hover:bg-osmi-accent/90 text-white px-8 py-3"
            >
              <Icon name="Rocket" className="mr-2" />
              Начать проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-osmi-accent text-osmi-accent hover:bg-osmi-accent hover:text-white px-8 py-3"
            >
              <Icon name="PlayCircle" className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2 text-gray-300">
              <Icon name="Globe" size={32} className="text-osmi-accent" />
              <span className="text-sm">Веб-разработка</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-gray-300">
              <Icon name="Smartphone" size={32} className="text-osmi-accent" />
              <span className="text-sm">Мобильные приложения</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-gray-300">
              <Icon name="Cloud" size={32} className="text-osmi-accent" />
              <span className="text-sm">Облачные решения</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-gray-300">
              <Icon name="Settings" size={32} className="text-osmi-accent" />
              <span className="text-sm">Автоматизация</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-osmi-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
