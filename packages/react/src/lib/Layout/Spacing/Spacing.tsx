import { clsx, spacing, SpacingProps } from '@icarus/core';
import { forwardRef, Ref } from 'react';

export const Spacing = forwardRef(
  (
    {
      direction,
      wrap,
      align,
      justify,
      gap,
      ...props
    }: SpacingProps & JSX.IntrinsicElements['div'],
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      {...props}
      ref={ref}
      className={clsx(
        spacing({
          direction,
          wrap,
          align,
          justify,
          gap,
        }),
        props.className
      )}
    />
  )
);
