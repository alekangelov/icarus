export const breakpoints = {
  tablet: 576,
  laptop: 992,
  desktop: 1440,
};

const up = (breakpoint: keyof typeof breakpoints) =>
  `screen and (min-width: ${breakpoints[breakpoint] + 1}px)`;

const down = (breakpoint: keyof typeof breakpoints) =>
  `screen and (max-width: ${breakpoints[breakpoint]}px)`;

export const responsive = {
  up,
  down,
};
