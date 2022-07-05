import { style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';
import { percentageString } from '../../box/helpers/calcPercentage';
import { parseColor } from '../../colors';
import { createStyleFactory } from '../../factories/generic';

export const textSize = createStyleFactory(vars.font.size, (size) =>
  style({
    fontSize: size,
    letterSpacing: percentageString(-2.5, size),
    lineHeight: '150%',
  })
);

export const textWeight = createStyleFactory(vars.font.weight, (weight) =>
  style({
    fontWeight: weight,
  })
);

export const textColor = createStyleFactory(vars.colors, (color) =>
  style({
    color: parseColor(color, 1),
  })
);

export type TextProps = {
  size?: keyof typeof textSize;
  weight?: keyof typeof textWeight;
  color?: keyof typeof textColor;
};

export const ellipsis = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
