type Colors = {
  primary: string;
  secondary: string;
  danger: string;
  success: string;
  warning: string;
  info: string;
  surface: string;
  surfaceMd: string;
  surfaceHv: string;
};

type OnColors = {
  onPrimary: string;
  onSecondary: string;
  onDanger: string;
  onSuccess: string;
  onWarning: string;
  onInfo: string;
  onSurface: string;
  onSurfaceHv: string;
};

export interface Theme {
  colors: Colors & OnColors;
  font: {
    size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    weight: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  border: {
    radius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      round: string;
    };
    size: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    color: Colors;
  };
  elevation: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

const colorContracts = {
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
};
