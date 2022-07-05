import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from '@vanilla-extract/css';
import { colors } from './colors';
import { contract } from './contract';
import Color from 'color';

export const vars = createGlobalThemeContract(contract);

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
    color = color.darken(0.2);
  }
  return color
    .rgb()
    .array()
    .map((e) => e.toFixed(0))
    .join(', ');
};

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
    shadow: prepColor(colors.black),
  },
  onColors: {
    primary: prepColor(colors.onBlue),
    secondary: prepColor(colors.onTeal),
    danger: prepColor(colors.onRose),
    success: prepColor(colors.onEmerald),
    warning: prepColor(colors.onMdGrey),
    info: prepColor(colors.onSky),
    surface: prepColor(colors.onWhite),
    surfaceMd: prepColor(colors.onMdGrey),
    surfaceHv: prepColor(colors.onGreyHv),
    shadow: prepColor(colors.black),
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
    shadow: prepColor(colors.black),
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
    shadow: prepColor(colors.black),
  },
};

const colorVarsDark = {
  colors: {
    primary: prepColor(colors.blue),
    secondary: prepColor(colors.teal),
    danger: prepColor(colors.rose),
    success: prepColor(colors.emerald),
    warning: prepColor(colors.mdGrey),
    info: prepColor(colors.sky),
    surface: prepColor(colors.hvBlack),
    surfaceHv: prepColor(colors.mdBlack),
    surfaceMd: prepColor(colors.ltBlack),
    shadow: prepColor(colors.black),
  },
  onColors: {
    primary: prepColor(colors.onBlue),
    secondary: prepColor(colors.onTeal),
    danger: prepColor(colors.onRose),
    success: prepColor(colors.onEmerald),
    warning: prepColor(colors.onMdGrey),
    info: prepColor(colors.onSky),
    surface: prepColor(colors.onHvBlack),
    surfaceMd: prepColor(colors.onMdBlack),
    surfaceHv: prepColor(colors.onLtBlack),
    shadow: prepColor(colors.black),
  },
  hoverColors: {
    primary: prepColor(colors.blue, { makeHover: true }),
    secondary: prepColor(colors.teal, { makeHover: true }),
    danger: prepColor(colors.rose, { makeHover: true }),
    success: prepColor(colors.emerald, { makeHover: true }),
    warning: prepColor(colors.mdGrey, { makeHover: true }),
    info: prepColor(colors.sky, { makeHover: true }),
    surface: prepColor(colors.hvBlack, { makeHover: true }),
    surfaceHv: prepColor(colors.mdBlack, { makeHover: true }),
    surfaceMd: prepColor(colors.ltBlack, { makeHover: true }),
    shadow: prepColor(colors.black),
  },
  activeColors: {
    primary: prepColor(colors.blue, { makeActive: true }),
    secondary: prepColor(colors.teal, { makeActive: true }),
    danger: prepColor(colors.rose, { makeActive: true }),
    success: prepColor(colors.emerald, { makeActive: true }),
    warning: prepColor(colors.mdGrey, { makeActive: true }),
    info: prepColor(colors.sky, { makeActive: true }),
    surface: prepColor(colors.hvBlack, { makeActive: true }),
    surfaceHv: prepColor(colors.mdBlack, { makeActive: true }),
    surfaceMd: prepColor(colors.ltBlack, { makeActive: true }),
    shadow: prepColor(colors.black),
  },
};

const defaultGlobalVars = {
  font: {
    size: {
      xs: '0.8rem',
      sm: '0.9rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.2rem',
      xxxl: '2.5rem',
    },
    weight: {
      light: '100',
      regular: '400',
      medium: '600',
      bold: '800',
      heavy: '900',
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
  zIndex: {
    default: '0',
    modal: '10',
    overlay: '20',
  },
};

const lightThemeVars = {
  ...colorVars,
  ...defaultGlobalVars,
} as typeof contract;

lightThemeVars.border.color = colorVars.colors;

const darkThemeVars = {
  ...colorVarsDark,
  ...defaultGlobalVars,
} as typeof contract;

darkThemeVars.border.color = colorVarsDark.colors;

createGlobalTheme('html:root', vars, lightThemeVars);

createGlobalTheme('html.dark:root', vars, darkThemeVars);

globalStyle('html.dark', {
  colorScheme: 'dark',
});

export type GapSize = keyof typeof vars.spacing;
