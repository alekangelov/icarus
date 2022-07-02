import { ComplexStyleRule } from '@vanilla-extract/css';
import { forEachInObject } from '../../../helpers/for';
import { vars } from '../../variables/index.css';

const { spacing } = vars;
export const createSpaceVariations = <T extends ComplexStyleRule | string>(
  fn: (space: string) => T
) => {
  type R = Record<keyof typeof spacing, T>;
  const result: Partial<R> = {};
  forEachInObject(spacing, (object, key) => {
    result[key] = fn(object);
  });
  return result as R;
};

const maxColumns = 12;
export type ColType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

const createColumns = () => {
  type R = Record<ColType, string>;
  const result: Partial<R> = {};
  for (let i = 1; i <= maxColumns; i++) {
    const col = `${i}` as ColType;
    result[col] = `${((i / maxColumns) * 100).toFixed(1)}%`;
  }
  return result as R;
};

const columns = createColumns();

export const createColumnVariations = <T extends ComplexStyleRule | string>(
  fn: (space: string) => T
) => {
  type R = Record<keyof typeof columns, T>;
  const result: Partial<R> = {};
  forEachInObject(createColumns(), (object, key) => {
    result[key] = fn(object);
  });
  return result as R;
};
