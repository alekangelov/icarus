import { button, ButtonProps, clsx, GapSize } from '@icarus/core';
import { Children, forwardRef, PropsWithChildren, Ref } from 'react';
import { Spacing } from '../Layout/Spacing';

type Additionals = {
  icon?: JSX.Element;
  iconPosition: 'left' | 'right';
  gap?: GapSize;
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
      iconPosition,
      gap,
      ...props
    }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    const hasOneChild = Children.count(props.children) === 1;
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
                ? (`${size || 'small'}Symmetric` as any)
                : size,
            elevation,
            fullWidth,
            floating,
            radius: hasOneChild && !radius ? 'round' : radius,
          })
        )}
        ref={ref}
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
