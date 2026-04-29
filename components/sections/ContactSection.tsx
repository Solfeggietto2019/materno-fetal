'use client';

import Image from 'next/image';
import Card from '@/components/common/Card';
import { WhatsAppCTA, Button } from '@/components/common';
import { CONTACT_INFO, DOCTOR_INFO } from '@/config/contact';
import { SECTIONS } from '@/lib/constants';

const ContactSection = () => {
  return (
    <section id={SECTIONS.contact} className="section-padding bg-white">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Contacto</h2>
          <p className="subheading max-w-2xl mx-auto">
            Contáctame para agendar tu consulta o resolver cualquier duda
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Locations */}
          <div>
            <h3 className="heading-md mb-6 text-secondary">Ubicaciones</h3>
            <div className="space-y-6">
              {CONTACT_INFO.locations.map((location, idx) => (
                <Card key={idx} hover className="border-l-4 border-primary">
                  <h4 className="font-bold text-dark mb-2">
                    {location.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {location.address}
                  </p>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {location.phone}
                  </p>
                  <Button
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    Ver en Google Maps
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div>
            <h3 className="heading-md mb-6 text-secondary">
              Medios de Contacto
            </h3>
            <div className="space-y-4">
              {/* WhatsApp */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <Image
                      src="/icons/whatsapp-svgrepo-com.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-dark mb-2">WhatsApp</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Disponible para consultas y agendamientos
                    </p>
                    <WhatsAppCTA
                      size="sm"
                      variant="primary"
                      message="Hola Dra. Adriana, quisiera agendar una cita"
                    >
                      Enviar mensaje
                    </WhatsAppCTA>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-dark mb-2">Email</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Para consultas detalladas
                    </p>
                    <Button
                      href={`mailto:${CONTACT_INFO.email}`}
                      variant="primary"
                      size="sm"
                    >
                      Enviar correo
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Instagram */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Image
                      src="/icons/instagram-svgrepo-com.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-dark mb-2">Instagram</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Sígueme para actualizaciones
                    </p>
                    <Button
                      href={CONTACT_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                    >
                      Seguir
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8797857314!2d-103.26566!3d20.62627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(CONTACT_INFO.locations[0].address)}!2s!5e0!3m2!1ses!2smx!4v1234567890`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
