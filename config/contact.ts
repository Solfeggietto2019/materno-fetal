// Doctor and contact information
export const DOCTOR_INFO = {
  name: 'Dra. Adriana Lizette Martínez Nuño',
  title: 'Ginecóloga y Obstetra',
  specialty: 'Especialista Materno Fetal',
  yearsExperience: 15,
  profileImage: '/images/profile-picture.jpeg',
  bio: 'Especialista con más de 15 años de experiencia en ultrasonidos avanzados y seguimiento materno-fetal. Comprometida con brindar el mejor cuidado a nuestras mamás y bebés.',
  credentials: [
    'Cédula Profesional: 1234567',
    'Especialidad: Medicina Materno Fetal',
    'Certificación: Colegio de Obstetras',
  ],
  equipment: [
    'Ultrasonido 3D/4D/5D de última generación',
    'Doppler avanzado',
    'Monitoreo fetal en tiempo real',
  ],
} as const;

export const CONTACT_INFO = {
  locations: [
    {
      name: 'Consultorio Andrés Terán',
      address: 'C. Andrés Terán 1125, Chapultepec Country, 44260 Guadalajara, Jal.',
      phone: '+52 1 XXXX-XXXXX',
      mapsUrl: 'https://maps.app.goo.gl/hd4S3XjEMKgNqZVD9',
    },
    {
      name: 'Consultorio Agaves',
      address: 'Placeholder - Complete later',
      phone: '+52 1 XXXX-XXXXX',
      mapsUrl: '#',
    },
  ],
  whatsapp: 'http://wa.link/to2gu3',
  email: 'contact@example.com', // Update with real email
  instagram: 'https://www.instagram.com/dradriana_ginefetalgdl/',
} as const;

export const SOCIAL_LINKS = {
  instagram: CONTACT_INFO.instagram,
  whatsapp: CONTACT_INFO.whatsapp,
} as const;
