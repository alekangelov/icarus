import { clsx, popover } from '@icarus/core';
import { PropsWithChildren } from 'react';
import { Dialog } from '../Dialog';

type PopoverProps = {
  title?: string;
  content: JSX.Element;
};

type P = PropsWithChildren<PopoverProps>;

const PopoverContent = ({ title, content }: PopoverProps) => {
  return (
    <div className={clsx(popover.base)}>
      <div className={clsx(popover.title)}>{title}</div>
      <div className={clsx(popover.content)}>{content}</div>
    </div>
  );
};

export const Popover = ({ children, title, content }: P): JSX.Element => (
  <Dialog content={<PopoverContent title={title} content={content} />}>
    {children}
  </Dialog>
);
