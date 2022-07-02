import { clsx, PaddingProps, getPadding } from '@icarus/core';
import { forwardRef, Ref } from 'react';

export const Padding = forwardRef(
  (
    {
      paddingX,
      paddingY,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      padding,
      ...props
    }: Partial<PaddingProps> & JSX.IntrinsicElements['div'],
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      {...props}
      className={clsx(
        getPadding({
          paddingX,
          paddingY,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          padding,
        }),
        props.className
      )}
      ref={ref}
    />
  )
);
