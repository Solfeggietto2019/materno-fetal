'use client';

import Image from 'next/image';
import { CONTACT_INFO } from '@/config/contact';

const FloatingWhatsAppButton = () => {
  const whatsappLink = CONTACT_INFO.whatsapp;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <Image
        src="/icons/whatsapp-svgrepo-com.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
