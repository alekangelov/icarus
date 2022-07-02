import { style } from '@vanilla-extract/css';
import { forEachInObject } from '../../../helpers';
import { PaddingProps } from '../layout';
import { AlignmentOptions } from './alignment.css';
import { AspectRatio } from './helpers/aspect.css';
import { BackgroundProps, BgColor, ColorProps } from './helpers/colors.css';
import { BorderColor, BorderRadius, BorderSize } from './helpers/shape.css';

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

export type BoxProperties = {
  /**
   * The display property specifies the type of box, inline, block, table, grid, etc.
   */
  display?: keyof typeof display;
  /**
   * The display text color of the box.
   */
  color?: ColorProps;
  /**
   * The display background color of the box.
   * It also affects the color of the text inside.
   */
  background?: BackgroundProps;
  /**
   * The background of the box, without affecting the text.
   */
  bgColor?: BgColor;
  /**
   * The alignment of the elements inside.
   */
  align?: AlignmentOptions;
  /**
   * The justification of the elements inside.
   */
  justify?: AlignmentOptions;
  /**
   * The aspect ratio of the box
   */
  aspectRatio?: AspectRatio[keyof AspectRatio];
  /**
   * The padding of the box.
   */
  padding?: PaddingProps | PaddingProps['padding'];

  /**
   * The color of the border.
   */
  borderColor?: BorderColor;
  /**
   * The size of the border.
   */
  borderSize?: BorderSize;
  /**
   * The radius of the border.
   */
  borderRadius?: BorderRadius;
};
