import { tooltip } from '@icarus/core';
import { PropsWithChildren } from 'react';
import { Dialog } from '../Dialog';

type Props = {
  title?: JSX.Element;
};

export const Tooltip = ({ title, children }: PropsWithChildren<Props>) => {
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
