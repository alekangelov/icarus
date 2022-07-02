import { ContainerProps, container, clsx } from '@icarus/core';

type CProps = ContainerProps & JSX.IntrinsicElements['div'];

export const Container = ({ fluid, ...props }: CProps) => (
  <div {...props} className={clsx(container({ fluid }), props.className)} />
);
