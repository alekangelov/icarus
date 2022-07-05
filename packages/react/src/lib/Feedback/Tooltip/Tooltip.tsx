import { tooltip } from '@icarus/core';
import { Children, PropsWithChildren } from 'react';
import { Dialog } from '../Dialog';

type Props = {
  title?: JSX.Element;
};

export const Tooltip = ({ title, children }: PropsWithChildren<Props>) => {
  if (Children.count(children) > 1)
    throw new Error('Tooltip can only have one child');

  return (
    <Dialog
      trigger="hover"
      // visible={true}
      className={tooltip}
      content={title}
    >
      {children}
    </Dialog>
  );
};
