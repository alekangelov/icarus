import { button, ButtonStyleProps } from '@icarus/core';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  Ref
} from 'react';

type BProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
function B(
  {
    size,
    color,
    borderRadius,
    ...props
  }: ButtonStyleProps & BProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={button({ size, color, borderRadius })}
      ref={ref}
    />
  );
}

export const Button = forwardRef(B);

export default forwardRef(B);
