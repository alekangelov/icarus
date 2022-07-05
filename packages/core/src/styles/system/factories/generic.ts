import { ComplexStyleRule } from '@vanilla-extract/css';
import { forEachInObject } from '../../../helpers';

type ValueOf<T> = T[keyof T];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<string, any>;

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

type addPrefix<TKey, TPrefix extends string> = TKey extends string
  ? `${TPrefix}${TKey}`
  : never;

const transformKeysInObject = <
  O extends AnyObject = AnyObject,
  P extends string = ''
>(
  object: O,
  prefix: P
) => {
  const newObject = {} as Record<addPrefix<keyof O, P>, string>;
  forEachInObject(object, (value, key) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (newObject as any)[`${prefix}${String(key)}` as any] = value;
  });
  return newObject;
};

export const createStyleFactory = <
  T,
  X extends ComplexStyleRule | string,
  Prefix extends string = ''
>(
  object: T,
  fn: (value: ValueOf<T>, key: keyof T) => X,
  prefix?: Prefix
) => {
  const newObject = createFactory(object, fn);
  if (prefix) {
    return transformKeysInObject(newObject, prefix);
  }
  return newObject;
};
