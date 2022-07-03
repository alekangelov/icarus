import { icon, loadingIconLine } from '@icarus/core';
import React, { forwardRef } from 'react';
import { IconProps } from './types';

const animationDelays = (() => {
  return [0, 1, 2, 3, 4, 5, 6].map((timing) => ({
    animationDelay: timing * 0.14 + 's',
  }));
})();

export const LoadingIcon = forwardRef(
  ({ size, color, ...props }: IconProps, ref: React.Ref<SVGSVGElement>) => (
    <svg
      {...props}
      className={icon({
        size,
        color,
      })}
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <line
        className={loadingIconLine}
        style={animationDelays[0]}
        x1="12"
        x2="12"
        y1="2"
        y2="6"
      />
      <line
        className={loadingIconLine}
        style={animationDelays[1]}
        x1="16.24"
        x2="19.07"
        y1="7.76"
        y2="4.93"
      />
      <line
        className={loadingIconLine}
        style={animationDelays[2]}
        x1="18"
        x2="22"
        y1="12"
        y2="12"
      />
      <line
        className={loadingIconLine}
        style={animationDelays[3]}
        x1="16.24"
        x2="19.07"
        y1="16.24"
        y2="19.07"
      />
      <line
        className={loadingIconLine}
        style={animationDelays[4]}
        x1="12"
        x2="12"
        y1="18"
        y2="22"
      />
      <line
        className={loadingIconLine}
        style={animationDelays[5]}
        x1="4.93"
        x2="7.76"
        y1="19.07"
        y2="16.24"
      />
      <line
        className={loadingIconLine}
        style={animationDelays[6]}
        x1="2"
        x2="6"
        y1="12"
        y2="12"
      />
      <line
        className={loadingIconLine}
        style={animationDelays[7]}
        x1="4.93"
        x2="7.76"
        y1="4.93"
        y2="7.76"
      />
    </svg>
  )
);
