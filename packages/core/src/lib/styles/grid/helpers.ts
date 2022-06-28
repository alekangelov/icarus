import { assignInlineVars } from '@vanilla-extract/dynamic';
import { orderVar } from './grid.css';

export const assignOrder = (order: string) => {
  return assignInlineVars(
    {
      order: orderVar
    },
    {
      order: order
    }
  );
};
