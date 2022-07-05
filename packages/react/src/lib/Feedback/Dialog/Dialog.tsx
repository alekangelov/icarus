import {
  clsx,
  createId,
  dialog,
  DialogPositions,
  DIALOG_ANIMATION_LENGTH,
  getDialogAnimation,
  getDialogPosition,
} from '@icarus/core';
import {
  Children,
  cloneElement,
  forwardRef,
  PropsWithChildren,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDelayedUnmount } from '../../internal/hooks/useDelayedUnmount';
import { useEventListener } from 'usehooks-ts';
import { useToggle } from '../../internal/hooks/useToggle';
import { Portal } from '../../internal/Portal';
import { mergeRefs } from '../../internal/mergeRefs';
type P2 = {
  content?: JSX.Element;
  visible?: boolean;
  position?: DialogPositions;
  parentElement: HTMLElement | null;
  className?: string;
  toggle: (event: MouseEvent) => void;
  id: string;
};
type P = Omit<P2, 'parentElement' | 'toggle' | 'id'> & {
  triggerable?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  listenersEscapeHatch?: boolean;
  trigger?: 'click' | 'hover';
};

const dialogId = createId('dialog');

const DialogBase = forwardRef(
  (
    {
      id,
      children,
      visible = false,
      position: positionProp = 'top',
      parentElement,
      className,
    }: PropsWithChildren<P2>,
    propRef: Ref<HTMLDivElement>
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ left: '0px', top: '0px' });
    useEffect(() => {
      const finalPosition = getDialogPosition(
        positionProp,
        ref.current,
        parentElement
      );

      setPosition(finalPosition);
    }, [parentElement, positionProp]);
    return (
      <Portal>
        <div
          id={id}
          ref={mergeRefs([ref, propRef])}
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
  }
);

export const Dialog = forwardRef(
  (
    {
      children,
      triggerable = true,
      content,
      visible: visibleProp,
      className,
      position,
      onVisibleChange,
      trigger = 'click',
    }: PropsWithChildren<P>,
    ref: Ref<HTMLDivElement>
  ) => {
    if (Children.count(children) > 1)
      throw Error("Popover can't have more than one child");
    const id = useRef(dialogId());
    const dialogRef = useRef<HTMLDivElement>(null);
    const {
      value: innerVisible,
      toggle: toggleInnerVisible,
      setValue: setInnerVisible,
      setFalse,
      setTrue,
    } = useToggle(visibleProp || false);
    const visibleFiltered = triggerable && innerVisible;
    console.log({ visibleFiltered, visibleProp });
    const visible = useDelayedUnmount(
      typeof visibleProp === 'boolean'
        ? visibleProp || visibleFiltered
        : visibleFiltered,
      DIALOG_ANIMATION_LENGTH * 1000
    );
    const childRef = useRef<HTMLElement>(null);
    useEffect(() => {
      if (typeof visibleProp !== 'boolean') return;
      setInnerVisible(visibleProp);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visibleProp]);

    useEffect(() => {
      onVisibleChange?.(visible);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    const onListener = useCallback(
      (event: MouseEvent) => {
        if (visible) return;
        event.preventDefault();
        event.stopPropagation();
        setTrue();
      },
      [setTrue, visible]
    );

    const offListener = useCallback(
      (event: MouseEvent) => {
        if (!visible) return;
        event.preventDefault();
        event.stopPropagation();
        const target = event.target as HTMLElement;
        if (target === childRef.current) return setFalse();
        if (!target.closest(`#${id.current}`)) return setFalse();
      },
      [setFalse, visible]
    );

    useEventListener(
      trigger === 'click' ? 'mousedown' : 'mouseover',
      onListener,
      childRef
    );
    useEventListener(
      trigger === 'click' ? 'mousedown' : 'mouseout',
      offListener,
      trigger === 'click' ? { current: null } : childRef
    );
    // eslint-disable-next-line react/jsx-no-useless-fragment
    if (!triggerable || !content) return <>{children}</>;
    return (
      <>
        {visible && (
          <DialogBase
            {...{
              id: id.current,
              ref: mergeRefs([ref, dialogRef]),
              visible: visibleFiltered,
              parentElement: childRef.current,
              className,
              toggle: toggleInnerVisible,
              position,
            }}
          >
            {content}
          </DialogBase>
        )}
        {cloneElement(children as JSX.Element, {
          ref: childRef,
        })}
      </>
    );
  }
);
