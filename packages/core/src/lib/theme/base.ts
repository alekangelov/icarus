import { colors } from './colors';
import { ThemeContract } from './types';

export const baseTheme: ThemeContract = {
  color: {
    primary: colors.sky,
    secondary: colors.teal,
    info: colors.blue,
    success: colors.emerald,
    warning: colors.amber,
    danger: colors.rose,
    onSurface: colors.zinc,
    surface: colors.zinc
  },
  text: {
    font: {
      base: '--apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      body: 'Inter',
      code: 'IBM Plex Mono, Menlo, monospace'
    },
    size: {
      small: '12px',
      medium: '16px',
      large: '18px',
      xlarge: '24px',
      xxlarge: '32px',
      xxxlarge: '48px'
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700'
    }
  },
  shape: {
    radius: {
      small: '0.25rem',
      medium: '0.5rem',
      large: '1rem',
      round: '50%',
      circle: '50%'
    }
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '32px',
    xxlarge: '64px',
    xxxlarge: '128px'
  },
  breakpoints: {
    mobile: '0px',
    tablet: '992px',
    laptop: '1200px'
  }
};
