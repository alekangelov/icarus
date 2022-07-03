import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Portal = (props: PropsWithChildren<any>) => {
  const parent = typeof window !== 'undefined' ? document.body : null;
  if (!parent) return null;
  return createPortal(props.children, parent);
};
