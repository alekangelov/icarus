import { ContainerProps, container, clsx } from '@icarus/core';
import { forwardRef, Ref } from 'react';

type CProps = ContainerProps & JSX.IntrinsicElements['div'];

export const Container = forwardRef(
  ({ fluid, ...props }: CProps, ref: Ref<HTMLDivElement>) => (
    <div
      {...props}
      className={clsx(container({ fluid }), props.className)}
      ref={ref}
    />
  )
);
