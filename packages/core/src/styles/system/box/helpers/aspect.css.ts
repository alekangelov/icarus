import { style } from '@vanilla-extract/css';
import { forEachInObject } from 'packages/core/src/helpers';

export const aspectRatioClasses = (() => {
  const ratios = {
    square: '1 / 1',
    widescreen: '16 / 9',
    pal: '4 / 3',
    ntsc: '3 / 2',
    imax: '2 / 1',
  };
  const portraitRatios: Record<`${keyof typeof ratios}Portrait`, string> =
    (() => {
      const ret: Partial<Record<`${keyof typeof ratios}Portrait`, string>> = {};
      forEachInObject(ratios, (value, key) => {
        ret[`${key}Portrait`] = style({
          paddingBottom: `${value}`,
        });
      });
      return ret as Record<`${keyof typeof ratios}Portrait`, string>;
    })();
  const allRatios = { ...ratios, ...portraitRatios };
  type R = Record<keyof typeof allRatios, string>;
  const aspectRatioClasses: Partial<R> = {};
  forEachInObject(allRatios, (value, key) => {
    aspectRatioClasses[key] = style({
      aspectRatio: `${value}`,
    });
  });
  return aspectRatioClasses as R;
})();

export type AspectRatio = {
  [key in keyof typeof aspectRatioClasses]: string;
};
