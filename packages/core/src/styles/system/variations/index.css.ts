import { createColorMap } from '../colors';
import { style } from '@vanilla-extract/css';

export const background = createColorMap(({ color, onColor }) => {
  return style({
    background: color,
    color: onColor,
  });
});

export const textColor = createColorMap(({ color }) => {
  return style({
    color: color,
  });
});
