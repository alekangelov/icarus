import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';
import { prepColor } from '../system/colors';
import { colors } from './colors';
import { contract } from './contract';

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
    color: colorVars.default,
  },
  elevation: {
    none: 'elevation-none',
    sm: 'elevation-sm',
    md: 'elevation-md',
    lg: 'elevation-lg',
    xl: 'elevation-xl',
    xxl: 'elevation-xxl',
  },
});
