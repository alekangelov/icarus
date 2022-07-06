import { icon } from '@icarus/core';
import React, { forwardRef } from 'react';
import { IconProps } from './types';

export const CloseIcon = forwardRef(
  ({ size, color, ...props }: IconProps, ref: React.Ref<SVGSVGElement>) => (
    <svg
      {...props}
      className={icon({
        size,
        color,
      })}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.00612 4.91287L7.066 7.98744L7.94924 7.09995L4.88937 4.02537L8 0.899797L7.11675 0.0123034L4.00612 3.13788L0.883249 0L0 0.887494L3.12287 4.02537L0.050755 7.11225L0.934004 7.99975L4.00612 4.91287Z"
      />
    </svg>
  )
);
