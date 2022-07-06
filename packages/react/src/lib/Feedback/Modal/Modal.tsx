import {
  clsx,
  getModalAnimation,
  modal,
  MODAL_ANIMATION_TIMING,
} from '@icarus/core';
import { forwardRef, Ref, useCallback, useState } from 'react';
import { useBoolean } from 'usehooks-ts';
import { Button } from '../../General/Button';
import { Heading } from '../../General/Text';
import { CloseIcon, MaximizeIcon } from '../../Icons';
import { useDelayedUnmount } from '../../internal/hooks/useDelayedUnmount';
import { Portal } from '../../internal/Portal';
import { Box } from '../../Layout/Box';
import { Container } from '../../Layout/Container';
import { Spacing } from '../../Layout/Spacing';

type ModalFooterProps = {
  ok?: {
    label?: string;
    onClick?: () => void;
  };
  cancel?: {
    label?: string;
    onClick?: () => void;
  };
};

type ModalProps = {
  footer?: JSX.Element;
  title?: string;
  content?: JSX.Element;
  visible?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
  className?: string;
  maximizable?: boolean;
  maximized?: boolean;
  maskClassName?: string;
} & ModalFooterProps;

const opposite = (prevState: boolean) => !prevState;

export const useClosure = (initialValue?: boolean) => {
  const [value, setValue] = useState(initialValue || false);
  const onClick = useCallback(() => {
    setValue(opposite);
  }, [setValue]);
  return {
    onClick,
  };
};

const ModalFooter = ({
  ok = {
    label: 'Ok',
  },
  cancel = {
    label: 'Cancel',
  },
}: ModalFooterProps) => {
  return <div className={clsx(modal.footer, 'modal-footer')}>Footer</div>;
};

export const Modal = forwardRef(
  (
    {
      title,
      footer,
      content,
      visible: visibleProp,
      onVisibilityChange,
      className,
      maskClassName,
      ok,
      maximized: mxProp = false,
      maximizable,
      cancel,
    }: ModalProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const { value: maximized, toggle: toggleMaximized } = useBoolean(mxProp);
    const visible = useDelayedUnmount(
      visibleProp || false,
      MODAL_ANIMATION_TIMING
    );
    const contentJsx = (
      <div className={clsx(modal.content, 'modal-content')}>{content}</div>
    );
    if (!visible) return null;
    return (
      <Portal>
        <div
          className={clsx(
            modal.mask,
            maximized && modal.maskMaximized,
            maskClassName
          )}
          style={{
            animation: getModalAnimation(visibleProp),
          }}
        >
          <div
            className={clsx(
              modal.body,
              maximized && modal.bodyMaximized,
              className,
              'modal-body'
            )}
          >
            <div className={clsx(modal.header, 'modal-header')}>
              {title && (
                <Heading level="4" className={clsx(modal.header.title)}>
                  {title}
                </Heading>
              )}
              <Spacing
                gap="md"
                className={clsx(modal.actions.base, 'modal-actions')}
              >
                {maximizable && (
                  <Button
                    radius="round"
                    color="success"
                    onClick={toggleMaximized}
                    size="small"
                    className={clsx(modal.actions.button, 'modal-maximize')}
                  >
                    <MaximizeIcon
                      maximized={maximized}
                      color="onsurface"
                      size="xs"
                    />
                  </Button>
                )}
                <Button
                  radius="round"
                  color="danger"
                  size="small"
                  className={clsx('modal-close')}
                >
                  <CloseIcon color="onsurface" size="xs" />
                </Button>
              </Spacing>
            </div>
            {content && contentJsx}
            {footer && <ModalFooter ok={ok} cancel={ok} />}
          </div>
        </div>
      </Portal>
    );
  }
);
