import {
  gridContainer,
  gridColumn,
  GridColumnProps,
  GridContainerProps,
  clsx,
  mergeStyles,
  assignGap,
  alignmentStyles,
  AlignmentOptions,
  justifyStyles,
} from '@icarus/core';
import { forwardRef, Ref } from 'react';

type GapArguments = Parameters<typeof assignGap>[0];

type GridContainerComponentProps = GridContainerProps &
  JSX.IntrinsicElements['div'] & {
    gap?: GapArguments;
    align?: AlignmentOptions;
    justify?: AlignmentOptions;
  };

const GridContainer = forwardRef(
  (
    { wrap, gap, align, justify, ...props }: GridContainerComponentProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const styles = mergeStyles(assignGap(gap), props.style);
    return (
      <div
        {...props}
        ref={ref}
        className={clsx(
          gridContainer({ wrap }),
          props.className,
          align && alignmentStyles[align],
          justify && justifyStyles[justify]
        )}
        style={styles}
      />
    );
  }
);

type GridItemProps = GridColumnProps & JSX.IntrinsicElements['div'];

const GridItem = forwardRef(
  (
    {
      size,
      tabletSize,
      desktopSize,
      laptopSize,
      offset,
      tabletOffset,
      laptopOffset,
      desktopOffset,
      ...props
    }: GridItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={clsx(
          gridColumn({
            size,
            tabletSize,
            desktopSize,
            laptopSize,
            offset,
            tabletOffset,
            laptopOffset,
            desktopOffset,
          }),
          props.className
        )}
      />
    );
  }
);

type GridContainerComponentType = typeof GridContainer;

interface Grid extends GridContainerComponentType {
  Item: typeof GridItem;
}

const GridPrecursor: Partial<Grid> = GridContainer;
GridPrecursor.Item = GridItem;

export const Grid = GridPrecursor as Grid;
