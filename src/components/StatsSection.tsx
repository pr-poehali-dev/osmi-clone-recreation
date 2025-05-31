const StatsSection = () => {
  const stats = [
    { number: "150+", label: "Проектов завершено" },
    { number: "50+", label: "Довольных клиентов" },
    { number: "5+", label: "Лет опыта" },
    { number: "24/7", label: "Поддержка" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-montserrat">
                {stat.number}
              </div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
