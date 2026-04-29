'use client';

import Image from 'next/image';
import Card from '@/components/common/Card';
import { DOCTOR_INFO } from '@/config/contact';
import { ABOUT_DATA } from '@/config/about';
import { SECTIONS } from '@/lib/constants';

const AboutSection = () => {
  return (
    <section id={SECTIONS.about} className="section-padding bg-white">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{ABOUT_DATA.hero.title}</h2>
          <p className="subheading max-w-2xl mx-auto">
            {ABOUT_DATA.hero.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src={DOCTOR_INFO.profileImage}
              alt={DOCTOR_INFO.name}
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="heading-md mb-2">{DOCTOR_INFO.name}</h3>
              <p className="text-lg text-primary font-semibold mb-4">
                {DOCTOR_INFO.title} • {DOCTOR_INFO.specialty}
              </p>
              <p className="body-text">{ABOUT_DATA.sections.introduction}</p>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="text-lg font-bold text-secondary mb-3">
                Credenciales
              </h4>
              <ul className="space-y-2">
                {DOCTOR_INFO.credentials.map((credential, idx) => (
                  <li key={idx} className="flex items-start gap-2 body-text">
                    <span className="text-primary text-xl">✓</span>
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div>
              <h4 className="text-lg font-bold text-secondary mb-3">
                Equipamiento
              </h4>
              <ul className="space-y-2">
                {DOCTOR_INFO.equipment.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 body-text">
                    <span className="text-primary text-xl">⚡</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {ABOUT_DATA.values.map((value, idx) => (
            <Card key={idx} hover>
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">
                  {value.value}
                </p>
                <p className="font-semibold text-dark mb-2">{value.label}</p>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Approach */}
        <div className="mt-16 bg-lightBg rounded-xl p-8 md:p-12">
          <h3 className="heading-md mb-4 text-center">Mi Enfoque</h3>
          <p className="body-text text-center max-w-3xl mx-auto">
            {ABOUT_DATA.sections.approach}
          </p>
        </div>

        {/* Commitment */}
        <div className="mt-8 bg-primary bg-opacity-10 rounded-xl p-8 md:p-12">
          <h3 className="heading-md mb-4 text-center text-primary">
            Mi Compromiso
          </h3>
          <p className="body-text text-center max-w-3xl mx-auto">
            {ABOUT_DATA.sections.commitment}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
