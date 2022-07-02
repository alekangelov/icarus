import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';
import { colors } from './colors';
import { contract } from './contract';
import Color from 'color';

const prepColor = (color: Color) => {
  return color.rgb().array().join(', ');
};
export const vars = createGlobalThemeContract(contract);

const colorVars = {
  default: {
    primary: prepColor(colors.blue),
    secondary: prepColor(colors.teal),
    danger: prepColor(colors.rose),
    success: prepColor(colors.emerald),
    warning: prepColor(colors.mdGrey),
    info: prepColor(colors.sky),
    surface: prepColor(colors.white),
    surfaceHv: prepColor(colors.greyHv),
    surfaceMd: prepColor(colors.mdGrey),
  },
  on: {
    onPrimary: prepColor(colors.onBlue),
    onSecondary: prepColor(colors.onTeal),
    onDanger: prepColor(colors.onRose),
    onSuccess: prepColor(colors.onEmerald),
    onWarning: prepColor(colors.onMdGrey),
    onInfo: prepColor(colors.onSky),
    onSurface: prepColor(colors.onWhite),
    onSurfaceHv: prepColor(colors.onGreyHv),
    onSurfaceMd: prepColor(colors.onMdGrey),
  },
};

createGlobalTheme(':root', vars, {
  colors: {
    ...colorVars.default,
    ...colorVars.on,
  },
  font: {
    size: {
      xs: '8px',
      sm: '10px',
      md: '14px',
      lg: '18px',
      xl: '24px',
      xxl: '36px',
      xxxl: '38px',
    },
    weight: {
      light: '100',
      regular: '400',
      medium: '600',
      bold: '800',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '36px',
    xxxl: '48px',
  },
  border: {
    radius: {
      none: '0px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '32px',
      xxl: '48px',
      round: '999px',
    },
    size: {
      none: '0px',
      sm: '1px',
      md: '2px',
      lg: '4px',
      xl: '8px',
    },
    color: colorVars.default,
  },
  elevation: {
    none: '4px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  transition: {
    speed: '0.2s',
    easing: 'ease-in-out',
  },
});
