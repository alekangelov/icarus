import { createSprinkles } from '@vanilla-extract/sprinkles';
import { colorProperties } from './properties/colorProperties.css';
import { responsiveProperties } from './properties/responsiveProperties.css';

export const icarus = createSprinkles(
  responsiveProperties,
  colorProperties
);
