import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">OSMI</div>
            <div className="text-cyan-400">IT</div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              О нас
            </a>
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#contacts"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:inline-flex border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
            >
              Связаться
            </Button>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
