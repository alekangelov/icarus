import { Colors, OnColors } from '../types/theme';

const colorContracts: {
  default: Colors;
  on: OnColors;
} = {
  default: {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    success: 'success',
    warning: 'warning',
    info: 'info',
    surface: 'surface',
    surfaceMd: 'surface-md',
    surfaceHv: 'surface-hv',
  },
  on: {
    onPrimary: 'on-primary',
    onSecondary: 'on-secondary',
    onDanger: 'on-danger',
    onSuccess: 'on-success',
    onWarning: 'on-warning',
    onInfo: 'on-info',
    onSurface: 'on-surface',
    onSurfaceMd: 'on-surface-md',
    onSurfaceHv: 'on-surface-hv',
  },
};

export const contract = {
  colors: {
    ...colorContracts.default,
    ...colorContracts.on,
  },
  font: {
    size: {
      xs: 'font-xs',
      sm: 'font-sm',
      md: 'font-md',
      lg: 'font-lg',
      xl: 'font-xl',
      xxl: 'font-xxl',
      xxxl: 'font-xxxl',
    },
    weight: {
      light: 'font-light',
      regular: 'font-regular',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  spacing: {
    xs: 'spacing-xs',
    sm: 'spacing-sm',
    md: 'spacing-md',
    lg: 'spacing-lg',
    xl: 'spacing-xl',
    xxl: 'spacing-xxl',
    xxxl: 'spacing-xxxl',
  },
  border: {
    radius: {
      none: 'radius-none',
      sm: 'radius-sm',
      md: 'radius-md',
      lg: 'radius-lg',
      xl: 'radius-xl',
      xxl: 'radius-xxl',
      round: 'radius-round',
    },
    size: {
      none: 'border-size-none',
      sm: 'border-size-sm',
      md: 'border-size-md',
      lg: 'border-size-lg',
      xl: 'border-size-xl',
    },
    color: colorContracts.default,
  },
  elevation: {
    none: 'elevation-none',
    sm: 'elevation-sm',
    md: 'elevation-md',
    lg: 'elevation-lg',
    xl: 'elevation-xl',
    xxl: 'elevation-xxl',
  },
  transition: {
    speed: 'transition-speed',
    easing: 'transition-easing',
  },
};
