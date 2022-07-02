export type Colors = {
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

export type OnColors = {
  onPrimary: string;
  onSecondary: string;
  onDanger: string;
  onSuccess: string;
  onWarning: string;
  onInfo: string;
  onSurface: string;
  onSurfaceMd: string;
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
