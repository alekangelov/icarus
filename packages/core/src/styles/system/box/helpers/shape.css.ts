import { style } from '@vanilla-extract/css';
import { forEachInObject } from '../../../../helpers';
import { vars } from '../../../variables/index.css';

export const borderRadiusClasses = (() => {
  const { radius } = vars.border;
  type R = Record<keyof typeof radius, string>;
  const r: Partial<R> = {};
  forEachInObject(radius, (value, key) => {
    r[key] = style({
      borderRadius: value,
    });
  });
  return r as R;
})();

export const borderSizeClasses = (() => {
  const { size } = vars.border;
  type R = Record<keyof typeof size, string>;
  const r: Partial<R> = {};
  forEachInObject(size, (value, key) => {
    r[key] = style({
      borderWidth: value,
    });
  });
  return r as R;
})();

export const borderColorClasses = (() => {
  const { color } = vars.border;
  type R = Record<keyof typeof color, string>;
  const r: Partial<R> = {};
  forEachInObject(color, (value, key) => {
    r[key] = style({
      borderColor: value,
    });
  });
  return r as R;
})();

export type BorderColor = keyof typeof borderColorClasses;
export type BorderSize = keyof typeof borderSizeClasses;
export type BorderRadius = keyof typeof borderRadiusClasses;
