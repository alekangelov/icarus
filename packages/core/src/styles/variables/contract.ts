import { Colors } from '../types/theme';

const colorContracts: {
  default: Colors;
  on: Colors;
  hover: Colors;
  active: Colors;
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
    shadow: 'shadow',
  },
  on: {
    primary: 'on-primary',
    secondary: 'on-secondary',
    danger: 'on-danger',
    success: 'on-success',
    warning: 'on-warning',
    info: 'on-info',
    surface: 'on-surface',
    surfaceMd: 'on-surface-md',
    surfaceHv: 'on-surface-hv',
    shadow: 'shadow',
  },
  hover: {
    primary: 'primary-hv',
    secondary: 'secondary-hv',
    danger: 'danger-hv',
    success: 'success-hv',
    warning: 'warning-hv',
    info: 'info-hv',
    surface: 'surface-hv',
    surfaceMd: 'surface-md-hv',
    surfaceHv: 'surface-hv-hv',
    shadow: 'shadow',
  },
  active: {
    primary: 'primary-ac',
    secondary: 'secondary-ac',
    danger: 'danger-ac',
    success: 'success-ac',
    warning: 'warning-ac',
    info: 'info-ac',
    surface: 'surface-ac',
    surfaceMd: 'surface-md-ac',
    surfaceHv: 'surface-hv-ac',
    shadow: 'shadow',
  },
};

export const contract = {
  colors: colorContracts.default,
  onColors: colorContracts.on,
  hoverColors: colorContracts.hover,
  activeColors: colorContracts.active,
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
      heavy: 'font-heavy',
    },
  },
  spacing: {
    none: 'spacing-none',
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
    color: {
      primary: 'border-primary',
      secondary: 'border-secondary',
      danger: 'border-danger',
      success: 'border-success',
      warning: 'border-warning',
      info: 'border-info',
      surface: 'border-surface',
      surfaceMd: 'border-surface-md',
      surfaceHv: 'border-surface-hv',
      shadow: 'shadow',
    },
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
  zIndex: {
    default: 'z-index-default',
    modal: 'z-index-modal',
    overlay: 'z-index-overlay',
  },
};
