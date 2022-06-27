import { defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '../../theme/theme.css';
import { ThemeContract } from '../../theme/types';

type ColorKeys = keyof ThemeContract['color'];
type ColorVariants =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type ColorProperties = `${ColorKeys}-${ColorVariants}`;

const generateColorProps = () => {
  const { color } = vars;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorMap: Record<any, any> = {};
  for (const key in color) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const colorValue = (color as any)[key];
    if (typeof colorValue === 'string') {
      colorMap[key] = colorValue;
    } else {
      for (const variant in colorValue) {
        colorMap[`${key}-${variant}`] = colorValue[variant];
      }
    }
  }
  return colorMap as { [key in ColorProperties]: string };
};

export const colorArray = generateColorProps();

export const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    active: { selector: '&:active' }
  },
  defaultCondition: 'default',
  properties: {
    color: colorArray,
    background: colorArray
    // etc.
  }
} as const);
