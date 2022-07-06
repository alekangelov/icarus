import { icon } from '@icarus/core';
import { forwardRef } from 'react';
import { IconProps } from './types';

export const MaximizeIcon = forwardRef(
  (
    { size, color, maximized, ...props }: IconProps & { maximized?: boolean },
    ref: React.Ref<SVGSVGElement>
  ) => {
    if (maximized) {
      return (
        <svg
          {...props}
          className={icon({
            size,
            color,
          })}
          width="10"
          height="2"
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H10V2H0V0Z" fill="white" />
        </svg>
      );
    }
    return (
      <svg
        {...props}
        className={icon({
          size,
          color,
        })}
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.64965 6.64096L10.9874 6.65136L10.9844 5.39926L6.64665 5.38886L6.63608 0.979198L5.38398 0.976196L5.39455 5.38586L0.967529 5.37525L0.97053 6.62735L5.39755 6.63796L5.40799 10.993L6.66009 10.996L6.64965 6.64096Z" />
      </svg>
    );
  }
);
