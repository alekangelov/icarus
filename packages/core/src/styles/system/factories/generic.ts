import { ComplexStyleRule } from '@vanilla-extract/css';
import { forEachInObject } from '../../../helpers';

type ValueOf<T> = T[keyof T];

export const createFactory = <T, X>(
  object: T,
  fn: (value: ValueOf<T>, key: keyof T) => X
) => {
  const r: Partial<Record<keyof T, X>> = {};
  forEachInObject(object, (value, key) => {
    r[key] = fn(value, key);
  });
  return r as T;
};

export const createStyleFactory = <T, X extends ComplexStyleRule>(
  object: T,
  fn: (value: ValueOf<T>, key: keyof T) => X
) => createFactory(object, (value, key) => fn(value, key));
