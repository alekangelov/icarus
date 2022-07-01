import Color from 'color';

export const parseColor = (color: string, alpha = 1) => {
  return `rgba(${color}, ${alpha})`;
};

export const prepColor = (color: Color) => {
  return color.rgb().array().join(', ');
};

export const getOnColor = (color: string) => {
  return `on${color[0].toUpperCase()}${color.slice(1)}`;
};
