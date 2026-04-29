// Services offered
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name for Heroicons or custom SVG
  details: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'detailed-visualization',
    title: 'Visualización Detallada',
    description: 'Ultrasonidos 3D/4D/5D de última generación',
    icon: 'heart',
    details: [
      'Imágenes tridimensionales realistas',
      'Visualización en tiempo real',
      'Detalles precisos del desarrollo fetal',
      'Mejores recuerdos de tu embarazo',
    ],
  },
  {
    id: 'early-detection',
    title: 'Detección Temprana',
    description: 'Diagnóstico oportuno para intervención médica',
    icon: 'sparkles',
    details: [
      'Identificación temprana de variantes',
      'Decisiones médicas informadas',
      'Mayor tranquilidad durante el embarazo',
      'Seguimiento especializado',
    ],
  },
  {
    id: 'clarity-precision',
    title: 'Claridad y Precisión',
    description: 'Evaluación completa con técnicas Doppler avanzadas',
    icon: 'chart-bar',
    details: [
      'Evaluación de todos los órganos fetales',
      'Análisis de flujo sanguíneo',
      'Monitoreo materno integrado',
      'Reportes detallados',
    ],
  },
];
