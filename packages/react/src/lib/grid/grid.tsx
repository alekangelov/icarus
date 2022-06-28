import {
  gridContainer,
  gridItem,
  GridContainerProps,
  GridItemProps,
  assignOrder,
  clsx,
  mergeStyles
} from '@icarus/core';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type ItemProps = GridItemProps & DivProps;

const Item = ({
  alignSelf,
  justifySelf,
  size,
  order,
  mobileSize,
  tabletSize,
  desktopSize,
  ...props
}: ItemProps) => {
  return (
    <div
      style={mergeStyles(
        typeof order != 'undefined'
          ? assignOrder(`${order}`)
          : undefined,
        props.style
      )}
      className={clsx(
        gridItem({
          alignSelf,
          justifySelf,
          size,
          mobileSize,
          tabletSize,
          desktopSize
        }),
        props.className
      )}
      {...props}
    />
  );
};

export type ContainerProps = GridContainerProps & DivProps;

export const Grid = ({
  gap,
  rowGap,
  columnGap,
  direction,
  justify,
  align,
  wrap,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        gridContainer({
          gap,
          rowGap,
          columnGap,
          direction,
          justify,
          wrap,
          align
        }),
        props.className
      )}
      {...props}
    />
  );
};

Grid.Item = Item;
