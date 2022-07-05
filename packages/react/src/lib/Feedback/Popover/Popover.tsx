import { clsx, popover, Colors } from '@icarus/core';
import {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import { Button } from '../../General/Button';
import { Heading } from '../../General/Text';
import { Grid } from '../../Layout/Grid';
import { Spacing } from '../../Layout/Spacing';
import { Dialog } from '../Dialog';

type PopoverProps = {
  title?: string;
  content?: JSX.Element;
};

type PopConfirmProps = {
  title?: string;
  content?: JSX.Element;
  ok?: {
    label?: string;
    color?: Colors;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
  cancel?: {
    label?: string;
    color?: Colors;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
  cancelText?: string;
  footer?: JSX.Element;
  toggleOff?: () => void;
};

const PopoverContent = ({ title, content }: PopoverProps) => {
  return (
    <div className={clsx(popover.base)}>
      {title && <Heading level="4">{title}</Heading>}
      {content && <div className={clsx(popover.content)}>{content}</div>}
    </div>
  );
};

export const Popover = ({
  children,
  title,
  content,
}: PropsWithChildren<PopoverProps>) => (
  <Dialog content={<PopoverContent title={title} content={content} />}>
    {children}
  </Dialog>
);

export const PopConfirmContent = ({
  title,
  content,
  ok,
  cancel,
  toggleOff,
  footer,
}: PopConfirmProps) => {
  return (
    <Spacing gap="md" direction="column">
      {content && <div className={clsx(popover.content)}>{content}</div>}
      {footer ? (
        footer
      ) : (
        <Grid gap="md">
          <Grid.Item size="6">
            <Button
              fullWidth
              color={cancel?.color || 'surfaceMd'}
              onClick={(event) => {
                cancel?.onClick?.(event);
                toggleOff?.();
              }}
            >
              {cancel?.label || 'Cancel'}
            </Button>
          </Grid.Item>
          <Grid.Item size="6">
            <Button
              fullWidth
              color={ok?.color || 'primary'}
              onClick={(event) => {
                ok?.onClick?.(event);
                toggleOff?.();
              }}
            >
              {ok?.label || 'OK'}
            </Button>
          </Grid.Item>
        </Grid>
      )}
    </Spacing>
  );
};

export const PopConfirm = ({
  children,
  title,
  content,
  ok,
  cancel,
}: PropsWithChildren<PopConfirmProps>) => {
  const [visible, setVisible] = useState(false);
  const onVisibleChange = useCallback(
    (e: boolean) => {
      console.log({ e });
      setVisible(e);
    },
    [setVisible]
  );
  return (
    <Dialog
      visible={visible}
      onVisibleChange={onVisibleChange}
      content={
        <PopoverContent
          title={title}
          content={
            <PopConfirmContent
              {...{ content, ok, cancel, toggleOff: () => setVisible(false) }}
            />
          }
        />
      }
    >
      {children}
    </Dialog>
  );
};
