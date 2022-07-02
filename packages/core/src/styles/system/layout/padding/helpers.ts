import { forEachInObject } from '../../../../helpers';
import { padding, PaddingProps } from './padding.css';

export const getPadding = (props?: Partial<PaddingProps>) => {
  const classNames: string[] = [];

  forEachInObject(props ?? {}, (value, key) => {
    if (!value) return;
    classNames.push(padding[key][value]);
  });

  return classNames;
};
