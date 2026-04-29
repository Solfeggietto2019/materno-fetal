'use client';

import Image from 'next/image';
import { WhatsAppCTA } from '@/components/common';
import { SECTIONS } from '@/lib/constants';

const HeroSection = () => {
  return (
    <section
      id={SECTIONS.home}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/consultorio.jpeg"
          alt="Consultorio"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wrapper section-padding flex items-center min-h-screen">
        <div className="max-w-2xl">
          <h1 className="heading-xl text-white mb-6">
            Tu Bebé en las Mejores Manos
          </h1>

          <p className="text-xl text-white mb-8 leading-relaxed">
            Especialista en ultrasonidos avanzados y seguimiento materno-fetal.
            Más de 15 años de experiencia brindando atención de calidad a mamás
            y bebés en Guadalajara.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA
              size="lg"
              message="Hola, quiero agendar una consulta con la Dra. Adriana"
              variant="secondary"
            >
              ✨ Agendar Consulta
            </WhatsAppCTA>

            <button
              onClick={() => {
                const element = document.getElementById(SECTIONS.about);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Conocer Más
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">15+</p>
              <p className="text-sm">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">2000+</p>
              <p className="text-sm">Pacientes Satisfechas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm">Tecnología Avanzada</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
