import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                OSMI
              </div>
              <div className="text-pink-400 font-bold text-2xl">IT</div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Услуги", "О нас", "Портфолио", "Контакты"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-2 border-pink-400/50 text-pink-400 hover:bg-pink-400 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/25"
              >
                Связаться
              </Button>

              {/* Mobile menu button */}
              <Button
                className="md:hidden bg-transparent hover:bg-white/10"
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon
                  name={isMobileMenuOpen ? "X" : "Menu"}
                  className="text-white transition-transform duration-300"
                  size={24}
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {["Услуги", "О нас", "Портфолио", "Контакты"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                variant="outline"
                className="w-full border-2 border-pink-400/50 text-pink-400 hover:bg-pink-400 hover:text-white mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
