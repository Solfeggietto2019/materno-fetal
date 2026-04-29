'use client';

import Button from './Button';
import { CONTACT_INFO } from '@/config/contact';

interface WhatsAppCTAProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppCTA = ({
  message,
  size = 'md',
  variant = 'primary',
  fullWidth = false,
  className,
  children,
}: WhatsAppCTAProps) => {
  const defaultMessage = 'Hola, me interesa agendar una consulta';
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);

  const whatsappLink = `${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;

  return (
    <Button
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
    >
      {children || '💬 Contactar por WhatsApp'}
    </Button>
  );
};

export default WhatsAppCTA;
