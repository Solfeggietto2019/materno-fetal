// Brand color definitions
export const COLORS = {
  primary: '#ff99d8',      // Soft pink - accents, CTAs
  secondary: '#9440dd',    // Purple - titles, headings
  dark: '#333333',         // Dark gray - body text
  lightBg: '#f5f5f5',      // Light gray - section backgrounds
  white: '#ffffff',        // White - cards, overlays
  border: '#e5e5e5',       // Light border color
  success: '#10b981',      // Green - success states
  error: '#ef4444',        // Red - errors
} as const;

export type ColorKey = keyof typeof COLORS;
