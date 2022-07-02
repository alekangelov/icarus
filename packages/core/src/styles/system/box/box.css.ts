import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { forEachInObject } from '../../../helpers';
import { vars } from '../../variables/index.css';
import { getOnColor, getOnColorFromVar, parseColor } from '../colors';

const displays = {
  block: 'block',
  inline: 'inline',
  inlineBlock: 'inline-block',
  none: 'none',
  table: 'table',
  tableCell: 'table-cell',
  tableRow: 'table-row',
  flex: 'flex',
  grid: 'grid',
};

const displayClassNames = (() => {
  type R = Record<keyof typeof displays, string>;
  const displayClasses: Partial<R> = {};
  forEachInObject(displays, (value, key) => {
    displayClasses[key] = style({
      display: value,
    });
  });
  return displayClasses as R;
})();

export const display: Record<keyof typeof displayClassNames, string> =
  new Proxy(displayClassNames, {
    get(target, key) {
      try {
        if (!key) throw new Error('key is required');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (target as any)[key];
      } catch {
        return target['block'];
      }
    },
  });

const backgroundsClasses = (() => {
  const { colors } = vars;
  type R = Record<keyof typeof colors, string>;
  const backgroundClasses: Partial<R> = {};
  forEachInObject(colors, (value, key) => {
    if (key.indexOf('on') === 0)
      backgroundClasses[key] = style({
        backgroundColor: parseColor(value),
        color: getOnColorFromVar(value),
      });
  });
  return backgroundClasses as R;
})();

export const backgrounds: Record<keyof typeof backgroundsClasses, string> =
  new Proxy(backgroundsClasses, {
    get(target, key) {
      try {
        if (!key) throw new Error('key is required');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (target as any)[key];
      } catch {
        return target['surface'];
      }
    },
  });

export type DisplayProps = { display?: keyof typeof display };
