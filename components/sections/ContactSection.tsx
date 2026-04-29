'use client';

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
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.912 1.244c-.915.424-1.699 1.023-2.302 1.75a9.758 9.758 0 00-1.51 2.752 9.733 9.733 0 00-.546 3.556 9.765 9.765 0 00.928 4.042 9.84 9.84 0 002.252 3.106 9.847 9.847 0 003.106 2.252 9.766 9.766 0 004.042.928c1.122 0 2.228-.16 3.297-.478a9.89 9.89 0 003.643-1.762 9.88 9.88 0 002.652-2.873 9.86 9.86 0 001.762-3.643c.318-1.069.478-2.175.478-3.297a9.765 9.765 0 00-.928-4.042 9.84 9.84 0 00-2.252-3.106 9.847 9.847 0 00-3.106-2.252 9.766 9.766 0 00-4.042-.928" />
                    </svg>
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
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
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
