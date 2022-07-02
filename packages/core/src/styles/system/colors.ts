import { ComplexStyleRule } from '@vanilla-extract/css';
import { Colors } from '../types/theme';
import { vars } from '../variables/index.css';

export const parseColor = (color: `var(--${string})`, alpha = 1) => {
  return `rgba(${color}, ${alpha})`;
};

export const getColor = (color: keyof Colors, alpha = 1) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorVariable = vars.colors[color];
  return parseColor(colorVariable, alpha);
};

export const getOnColorFromVar = (color: `var(--${string})`, alpha = 1) => {
  const variableName = color.split('var(--')[1].slice(0, -1);
  return getOnColor(variableName as keyof Colors, alpha);
};

export const getOnColor = (color: keyof Colors, alpha = 1) => {
  const colorVariable = vars.onColors[color];
  return parseColor(colorVariable, alpha);
};

export const getHoverColor = (color: keyof Colors, alpha = 1) => {
  const colorVariable = vars.hoverColors[color];
  return parseColor(colorVariable, alpha);
};

export const createColorMap = <T extends ComplexStyleRule | string>(
  fn: (
    props: {
      color: string;
      onColor: string;
    },
    name: string
  ) => T
) => {
  type R = { [key in keyof Colors]: T };
  const { colors: varColors } = vars;
  const colors: Partial<R> = {};
  for (const color in varColors) {
    const xColor = color as keyof Colors;
    if (xColor.indexOf('on') === 0) continue;
    const props = {
      color: getColor(xColor),
      onColor: getOnColor(xColor),
    };
    colors[xColor] = fn(props, xColor);
  }
  return colors as R;
};
