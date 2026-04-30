'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DOCTOR_INFO, CONTACT_INFO, SOCIAL_LINKS } from '@/config/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container-wrapper section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">
              {DOCTOR_INFO.name.split(',')[0]}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Especialista en ultrasonidos avanzados y seguimiento materno-fetal
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#acerca" className="hover:text-primary transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition-colors">
                <a href={CONTACT_INFO.locations[0].mapsUrl} target="_blank" rel="noopener noreferrer">
                  {CONTACT_INFO.locations[0].name}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-primary transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram-svgrepo-com.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Image
                  src="/icons/whatsapp-svgrepo-com.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Dra. Adriana Martínez - Especialista Materno Fetal. Todos los
              derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
