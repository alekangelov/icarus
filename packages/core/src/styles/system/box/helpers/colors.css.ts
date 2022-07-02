import { style } from '@vanilla-extract/css';
import { forEachInObject } from '../../../../helpers';
import { Colors } from '../../../types/theme';
import { vars } from '../../../variables/index.css';
import { parseColor } from '../../colors';

export const backgroundsClasses = (() => {
  const { colors } = vars;
  type R = Record<keyof Colors, string>;
  const backgroundClasses: Partial<R> = {};
  forEachInObject(colors, (value, key) => {
    if (key.indexOf('on') === 0) return;
    backgroundClasses[key as keyof Colors] = style({
      backgroundColor: parseColor(value),
    });
  });
  return backgroundClasses as R;
})();

export const backgroundAndTextColorClasses = (() => {
  const { colors, onColors } = vars;
  type R = Record<keyof Colors, string>;
  const backgroundClasses: Partial<R> = {};
  forEachInObject(colors, (value, key) => {
    if (key.indexOf('on') === 0) return;
    backgroundClasses[key as keyof Colors] = style({
      backgroundColor: parseColor(value),
      color: parseColor(onColors[key]),
    });
  });
  return backgroundClasses as R;
})();

export const textColorClasses = (() => {
  const { onColors } = vars;
  type R = Record<keyof Colors, string>;
  const textColorClasses: Partial<R> = {};
  forEachInObject(onColors, (value, key) => {
    if (key.indexOf('on') !== 0) return;
    textColorClasses[key as keyof Colors] = style({
      color: parseColor(value),
    });
  });
  return textColorClasses as R;
})();

export type BackgroundProps = keyof typeof backgroundAndTextColorClasses;
export type ColorProps = keyof typeof textColorClasses;
export type BgColor = keyof typeof backgroundsClasses;
