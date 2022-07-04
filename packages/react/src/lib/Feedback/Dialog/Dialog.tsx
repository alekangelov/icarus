import {
  clsx,
  dialog,
  DialogPositions,
  getDialogAnimation,
  getDialogPosition,
} from '@icarus/core';
import {
  Children,
  cloneElement,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDelayedUnmount } from '../../internal/hooks/useDelayedUnmount';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { useToggle } from '../../internal/hooks/useToggle';
import { Portal } from '../../internal/Portal';
type P2 = {
  content?: JSX.Element;
  visible?: boolean;
  position?: DialogPositions;
  parentElement: HTMLElement | null;
  className?: string;
  toggle: (event: MouseEvent) => void;
};
type P = Omit<P2, 'parentElement' | 'toggle'> & {
  triggerable?: boolean;
};

const DialogBase = ({
  children,
  visible = false,
  position: positionProp = 'top',
  parentElement,
  className,
  toggle,
}: PropsWithChildren<P2>) => {
  console.log('content', children);
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ left: '0px', top: '0px' });
  useEffect(() => {
    const finalPosition = getDialogPosition(
      positionProp,
      ref.current,
      parentElement
    );
    console.log({
      finalPosition,
      positionProp,
      ref: ref.current,
      parentElement,
    });
    setPosition(finalPosition);
  }, [parentElement, positionProp]);
  useOnClickOutside(ref, toggle, 'mousedown');
  return (
    <Portal>
      <div
        ref={ref}
        className={clsx(dialog, className)}
        style={{
          animation: getDialogAnimation(visible),
          ...position,
        }}
      >
        {children}
      </div>
    </Portal>
  );
};

export const Dialog = ({
  children,
  triggerable = true,
  content,
  visible: visibleProp = false,
  className,
}: PropsWithChildren<P>) => {
  console.log({ content });
  if (Children.count(children) > 1)
    throw Error("Popover can't have more than one child");

  const {
    value: innerVisible,
    toggle: toggleInnerVisible,
    setValue: setInnerVisible,
  } = useToggle(visibleProp);
  const visibleFiltered = triggerable && innerVisible;
  const visible = useDelayedUnmount(visibleFiltered, 500);
  const popRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setInnerVisible(visibleProp);
  }, [setInnerVisible, visibleProp]);

  const listener = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      toggleInnerVisible();
    },
    [toggleInnerVisible]
  );

  useEventListener('mousedown', listener, popRef);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!triggerable || !content) return <>{children}</>;

  return (
    <>
      {visible && (
        <DialogBase
          {...{
            visible: visibleFiltered,
            parentElement: popRef.current,
            className,
            toggle: listener,
          }}
        >
          {content}
        </DialogBase>
      )}
      {cloneElement(children as JSX.Element, {
        ref: popRef,
      })}
    </>
  );
};
