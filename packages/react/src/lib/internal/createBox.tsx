import {
  createElement,
  DetailedHTMLProps,
  forwardRef,
  PropsWithChildren,
  Ref,
  useMemo,
} from 'react';
import { BoxProperties, clsx, getBoxProperties } from '@icarus/core';

type ElementProps<T extends keyof HTMLElementTagNameMap> = DetailedHTMLProps<
  React.HTMLAttributes<HTMLElementTagNameMap[T]>,
  HTMLElementTagNameMap[T]
>;

type BoxComponent<T extends keyof HTMLElementTagNameMap> = (
  props: PropsWithChildren<
    Omit<BoxProperties & ElementProps<T>, 'children'>
  > & {
    ref?: Ref<HTMLElementTagNameMap[T]>;
  }
) => JSX.Element;

export type BoxProps<T extends keyof HTMLElementTagNameMap> = PropsWithChildren<
  Omit<BoxProperties & ElementProps<T>, 'children'>
> & {
  ref?: Ref<HTMLElementTagNameMap[T]>;
};

const createCache = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cache = new Map<keyof HTMLElementTagNameMap, any>();
  return {
    get: <T extends keyof HTMLElementTagNameMap>(key: T) => {
      const element = cache.get(key) as BoxComponent<T> | undefined;
      return element;
    },
    set: <T extends keyof HTMLElementTagNameMap>(
      key: T,
      value: BoxComponent<T>
    ) => {
      cache.set(key, value);
    },
  };
};

const componentCache = createCache();

export const createBox = <T extends keyof HTMLElementTagNameMap>(Key: T) => {
  const Component = componentCache.get(Key);
  if (Component) return Component;

  const Box = forwardRef(
    (
      {
        display,
        color,
        background,
        bgColor,
        align,
        justify,
        aspectRatio,
        padding,
        borderColor,
        borderSize,
        borderRadius,
        ...props
      }: PropsWithChildren<BoxProperties & HTMLElementTagNameMap[T]>,
      ref: Ref<HTMLElement>
    ) => {
      const boxClassNames = useMemo(() => {
        const x = getBoxProperties({
          display,
          color,
          background,
          bgColor,
          align,
          justify,
          aspectRatio,
          padding,
          borderColor,
          borderSize,
          borderRadius,
        });
        return x;
      }, [
        display,
        color,
        background,
        bgColor,
        align,
        justify,
        aspectRatio,
        padding,
        borderColor,
        borderSize,
        borderRadius,
      ]);
      return createElement(Key, {
        ...props,
        className: clsx(boxClassNames, props.className),
        ref,
      });
    }
  );
  componentCache.set(Key, Box as unknown as BoxComponent<T>);
  return Box as unknown as BoxComponent<T>;
};
