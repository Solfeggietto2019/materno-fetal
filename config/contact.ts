// Doctor and contact information
export const DOCTOR_INFO = {
  name: 'Dra. Adriana Lizette Martínez Nuño',
  title: 'Ginecóloga y Obstetra',
  specialty: 'Especialista Materno Fetal',
  yearsExperience: 15,
  profileImage: '/images/profile-picture.jpeg',
  bio: 'Especialista con más de 15 años de experiencia en ultrasonidos avanzados y seguimiento materno-fetal. Comprometida con brindar el mejor cuidado a nuestras mamás y bebés.',
  credentials: [
    'Cédula DGP: 12305898',
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
      phone: '+52 1 33 1328 1956',
      mapsUrl: 'https://maps.app.goo.gl/hd4S3XjEMKgNqZVD9',
    },
    {
      name: 'Consultorio Agaves',
      address: 'Av. Aurora Boreal 84, Paseo de los Agaves, 45675 El Capulín, Jal',
      phone: '+52 1 33 1328 1956',
      mapsUrl: 'https://maps.app.goo.gl/S64YUqvWjtxywaDc9',
    },
  ],
  whatsapp: 'http://wa.link/to2gu3',
  email: 'adriana_lmn93@hotmail.com',
  instagram: 'https://www.instagram.com/dradriana_ginefetalgdl/',
} as const;

export const SOCIAL_LINKS = {
  instagram: CONTACT_INFO.instagram,
  whatsapp: CONTACT_INFO.whatsapp,
} as const;
