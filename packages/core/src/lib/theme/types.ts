import { ColorType } from './colors';

export type ThemeContract = {
  color: {
    primary: ColorType;
    secondary: ColorType;
    success: ColorType;
    warning: ColorType;
    danger: ColorType;
    info: ColorType;
    onSurface: ColorType;
    surface: ColorType;
  };
  text: {
    font: {
      base: string;
      body: string;
      code: string;
    };
    size: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
    weight: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
  };
  shape: {
    radius: {
      small: string;
      medium: string;
      large: string;
      round: string;
      circle: string;
    };
  };
  spacing: {
    none: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    laptop: string;
  };
};
