'use client';

import Card from '@/components/common/Card';
import { SERVICES } from '@/config/services';
import { SECTIONS } from '@/lib/constants';

// Icon mapping for services
const iconMap: { [key: string]: React.ReactNode } = {
  heart: (
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  sparkles: (
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  'chart-bar': (
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z" />
    </svg>
  ),
};

const ServicesSection = () => {
  return (
    <section id={SECTIONS.services} className="section-padding bg-lightBg">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            ¿Por qué son importantes los ultrasonidos especializados?
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            Ofrecemos atención integral con tecnología de última generación
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              hover
              className="flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center mb-4 text-primary">
                {iconMap[service.icon] || (
                  <span className="text-2xl">✨</span>
                )}
              </div>

              {/* Content */}
              <h3 className="heading-md mb-3 text-secondary">
                {service.title}
              </h3>
              <p className="body-text mb-6 flex-grow">
                {service.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary font-bold flex-shrink-0">
                      •
                    </span>
                    <span className="text-dark">{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-pink-400 rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="mb-6 text-lg">
            Contáctame para agendar tu consulta y conocer todos los beneficios
            de nuestros servicios especializados.
          </p>
          <a
            href="http://wa.link/to2gu3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition-all duration-200"
          >
            Agendar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
