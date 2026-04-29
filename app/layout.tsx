import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import FloatingWhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const APP_NAME = 'Dra. Adriana Martínez - Especialista Materno Fetal';
const APP_DESCRIPTION =
  'Especialista en ultrasonidos avanzados y seguimiento materno-fetal. Cuidado de calidad para ti y tu bebé en Guadalajara.';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: [
    'ginecología',
    'obstetricia',
    'materno fetal',
    'ultrasonidos',
    'embarazo',
    'Guadalajara',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://dradriana.com',
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://dradriana.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
