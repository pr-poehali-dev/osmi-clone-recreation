import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Globe",
      title: "Веб-разработка",
      description:
        "Создание современных веб-приложений и сайтов с использованием последних технологий",
      features: ["React", "TypeScript", "Node.js"],
    },
    {
      icon: "Smartphone",
      title: "Мобильная разработка",
      description:
        "Разработка нативных и кроссплатформенных мобильных приложений",
      features: ["React Native", "iOS", "Android"],
    },
    {
      icon: "Settings",
      title: "Автоматизация",
      description:
        "Автоматизация бизнес-процессов и интеграция с внешними системами",
      features: ["API", "CRM", "ERP"],
    },
    {
      icon: "BarChart3",
      title: "Аналитика",
      description: "Системы аналитики и бизнес-интеллекта для принятия решений",
      features: ["Dashboard", "Reports", "ML"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Полный спектр IT-услуг для развития вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-osmi-dark/50 border-osmi-accent/20 hover:bg-osmi-dark/70 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-osmi-accent rounded-full w-fit">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-white font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-osmi-accent/20 text-osmi-accent rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
