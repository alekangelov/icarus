import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../variables/index.css';
import { createStyleFactory } from '../../factories/generic';

export const icon = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    size: createStyleFactory(vars.font.size, (value) => ({
      width: value,
      height: value,
    })),
    color: {
      ...createStyleFactory(vars.colors, (value) => ({
        color: value,
      })),
      ...createStyleFactory(
        vars.onColors,
        (value) => ({
          color: value,
        }),
        'on'
      ),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type IconVariants = Parameters<typeof icon>[0];
