import { ComplexStyleRule } from '@vanilla-extract/css';
import { Colors } from '../types/theme';
import { vars } from '../variables/index.css';

export const parseColor = (color: `var(--${string})`, alpha = 1) => {
  return `rgba(${color}, ${alpha})`;
};

export const getColor = (color: keyof typeof vars.colors, alpha = 1) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorVariable = vars.colors[color];
  return parseColor(colorVariable, alpha);
};

export const getOnColor = (color: keyof typeof vars.colors, alpha = 1) => {
  const onVar = `on${`${color.at(0)?.toUpperCase()}${color.slice(1)}`}`;
  return getColor(onVar as keyof typeof vars.colors, alpha);
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
    console.log(props);
    colors[xColor] = fn(props, xColor);
  }
  return colors as R;
};
