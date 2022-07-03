import { IconVariants } from '@icarus/core';

export type IconProps = IconVariants &
  JSX.IntrinsicElements['svg'] & {
    ref?: React.Ref<SVGSVGElement>;
  };
