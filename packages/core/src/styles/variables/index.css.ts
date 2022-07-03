import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';
import { colors } from './colors';
import { contract } from './contract';
import Color from 'color';

const prepColor = (
  colorPrep: Color,
  {
    makeHover,
    makeActive,
  }: {
    makeHover?: boolean;
    makeActive?: boolean;
  } = {
    makeActive: false,
    makeHover: false,
  }
) => {
  let color = colorPrep;
  if (makeHover) {
    color = color.darken(0.1);
  }
  if (makeActive) {
    color = color.darken(0.4);
  }
  return color
    .rgb()
    .array()
    .map((e) => e.toFixed(0))
    .join(', ');
};

export const vars = createGlobalThemeContract(contract);

const colorVars = {
  colors: {
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
  onColors: {
    primary: prepColor(colors.onBlue),
    secondary: prepColor(colors.onTeal),
    danger: prepColor(colors.onRose),
    success: prepColor(colors.onEmerald),
    warning: prepColor(colors.onMdGrey),
    info: prepColor(colors.onSky),
    surface: prepColor(colors.onWhite),
    surfaceMd: prepColor(colors.onGreyHv),
    surfaceHv: prepColor(colors.onMdGrey),
  },
  hoverColors: {
    primary: prepColor(colors.blue, { makeHover: true }),
    secondary: prepColor(colors.teal, { makeHover: true }),
    danger: prepColor(colors.rose, { makeHover: true }),
    success: prepColor(colors.emerald, { makeHover: true }),
    warning: prepColor(colors.mdGrey, { makeHover: true }),
    info: prepColor(colors.sky, { makeHover: true }),
    surface: prepColor(colors.white, { makeHover: true }),
    surfaceHv: prepColor(colors.greyHv, { makeHover: true }),
    surfaceMd: prepColor(colors.mdGrey, { makeHover: true }),
  },
  activeColors: {
    primary: prepColor(colors.blue, { makeActive: true }),
    secondary: prepColor(colors.teal, { makeActive: true }),
    danger: prepColor(colors.rose, { makeActive: true }),
    success: prepColor(colors.emerald, { makeActive: true }),
    warning: prepColor(colors.mdGrey, { makeActive: true }),
    info: prepColor(colors.sky, { makeActive: true }),
    surface: prepColor(colors.white, { makeActive: true }),
    surfaceHv: prepColor(colors.greyHv, { makeActive: true }),
    surfaceMd: prepColor(colors.mdGrey, { makeActive: true }),
  },
};

createGlobalTheme(':root', vars, {
  colors: colorVars.colors,
  onColors: colorVars.onColors,
  hoverColors: colorVars.hoverColors,
  activeColors: colorVars.activeColors,
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
    none: '0px',
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
    color: colorVars.colors,
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
    speed: '0.15s',
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  },
});

export type GapSize = keyof typeof vars.spacing;
