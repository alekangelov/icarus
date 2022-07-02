import { clsx, forEachInObject } from '../../../../helpers';
import { alignmentStyles, justifyStyles } from '../alignment.css';
import { BoxProperties, display } from '../box.css';
import { AspectRatio } from './aspect.css';
import { padding } from './padding.css';
import {
  borderColor,
  borderRadius,
  borderSize,
  backgroundAndTextColor,
  backgrounds,
  textColor,
  aspectRatio,
} from './proxies';

export const getBoxProperties = (props: BoxProperties): string => {
  const classNames: string[] = [];
  if (props.display) {
    classNames.push(display[props.display]);
  }
  if (props.color) {
    classNames.push(textColor[props.color]);
  }
  if (props.background) {
    classNames.push(backgroundAndTextColor[props.background]);
  }
  if (props.bgColor) {
    classNames.push(backgrounds[props.bgColor]);
  }
  if (props.align) {
    classNames.push(alignmentStyles[props.align]);
  }
  if (props.justify) {
    classNames.push(justifyStyles[props.justify]);
  }
  if (props.aspectRatio) {
    classNames.push(aspectRatio[props.aspectRatio as keyof AspectRatio]);
  }
  if (props.padding) {
    if (typeof props.padding === 'string') {
      classNames.push(padding['padding'][props.padding]);
    }
    if (typeof props.padding === 'object') {
      forEachInObject(props.padding, (value, key) => {
        if (value) classNames.push(padding[key][value]);
      });
    }
  }
  if (props.borderColor) {
    classNames.push(borderColor[props.borderColor]);
  }
  if (props.borderSize) {
    classNames.push(borderSize[props.borderSize]);
  }
  if (props.borderRadius) {
    classNames.push(borderRadius[props.borderRadius]);
  }
  const pureClassNames = classNames.filter(Boolean);
  console.log({ pureClassNames });
  if (pureClassNames.length === 0) {
    return '';
  }
  console.log(classNames, ...classNames);
  const r = clsx(...classNames);
  console.log({ r });
  return r;
};
