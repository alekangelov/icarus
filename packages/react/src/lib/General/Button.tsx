import {
  button,
  ButtonProps,
  clsx,
  GapSize,
  disabled,
  createButtonRippleEvent,
} from '@icarus/core';
import {
  Children,
  forwardRef,
  PropsWithChildren,
  Ref,
  useEffect,
  useRef,
} from 'react';
import { mergeRefs } from '../internal/mergeRefs';
import { Spacing } from '../Layout/Spacing';

type Additionals = {
  icon?: JSX.Element;
  iconPosition: 'left' | 'right';
  gap?: GapSize;
  disabled?: boolean;
};

type Props = PropsWithChildren<
  ButtonProps & JSX.IntrinsicElements['button'] & Additionals
>;

export const Button = forwardRef(
  (
    {
      color,
      size,
      elevation,
      fullWidth,
      floating,
      radius,
      icon,
      iconPosition = 'left',
      gap,
      disabled: isDisabled,
      ...props
    }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    const hasOneChild = Children.count(props.children) === 1;
    const innerRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
      const { event, cleanup } = createButtonRippleEvent();
      innerRef?.current?.addEventListener('click', event);
      return () => cleanup();
    }, [innerRef]);
    return (
      <button
        {...props}
        className={clsx(
          button({
            color,
            size:
              hasOneChild &&
              !size?.includes('Symmetric') &&
              typeof props.children !== 'string'
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (`${size || 'small'}Symmetric` as any)
                : size,
            elevation,
            fullWidth,
            floating,
            radius: hasOneChild && !radius ? 'round' : radius,
          }),
          isDisabled && disabled
        )}
        ref={mergeRefs([ref, innerRef])}
      >
        <Spacing gap={gap || 'md'} align="center" justify="center">
          {icon && iconPosition === 'left' && icon}
          {props.children}
          {icon && iconPosition === 'right' && icon}
        </Spacing>
      </button>
    );
  }
);
