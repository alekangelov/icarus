import { nullColor } from './colors';
import { ThemeContract } from './types';

type OT = {
  [key: string]: null | OT;
};

const contractTemplate: OT = {
  color: {
    primary: nullColor,
    secondary: nullColor,
    success: nullColor,
    warning: nullColor,
    danger: nullColor,
    info: nullColor,
    onSurface: nullColor,
    surface: nullColor
  },
  text: {
    font: {
      base: null,
      body: null,
      code: null
    },
    size: {
      small: null,
      medium: null,
      large: null,
      xlarge: null,
      xxlarge: null,
      xxxlarge: null
    },
    weight: {
      light: null,
      regular: null,
      medium: null,
      bold: null
    }
  },
  shape: {
    radius: {
      small: null,
      medium: null,
      large: null,
      round: null,
      circle: null
    }
  },
  spacing: {
    small: null,
    medium: null,
    large: null,
    xlarge: null,
    xxlarge: null,
    xxxlarge: null
  },
  breakpoints: {
    mobile: null,
    tablet: null,
    laptop: null
  }
};

const createContractFromObject = (
  object: OT,
  previousPath?: string
): ThemeContract => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: Record<any, any> = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    const path = previousPath
      ? `${previousPath}-${key}`
      : key;
    if (value) {
      result[key] = createContractFromObject(value, path);
    } else {
      result[key] = path;
    }
  });
  return result as ThemeContract;
};

export const themeContact = createContractFromObject(
  contractTemplate
);
