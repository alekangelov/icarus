import { ComplexStyleRule } from '@vanilla-extract/css';
import { forEachInObject } from '../../../helpers/for';

const canBeAlignedTo = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
};

export const createAlignmentVariations = <T extends ComplexStyleRule | string>(
  fn: (alignment: string) => T
) => {
  type R = Record<keyof typeof canBeAlignedTo, T>;
  const result: Partial<R> = {};
  forEachInObject(canBeAlignedTo, (object, key) => {
    result[key] = fn(object);
  });
  return result as R;
};
