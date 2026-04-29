// TypeScript type definitions for the entire application

export interface Doctor {
  name: string;
  title: string;
  specialty: string;
  yearsExperience: number;
  profileImage: string;
  bio: string;
  credentials: string[];
  equipment: string[];
}

export interface Location {
  name: string;
  address: string;
  phone: string;
  mapsUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}
