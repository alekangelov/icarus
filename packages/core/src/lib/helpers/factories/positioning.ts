import Big from 'big.js';

const positioningVariants = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch'
};

export const createPositioningVariants = <T extends string>(
  prop: T
) => {
  type RType = Record<
    keyof typeof positioningVariants,
    Record<
      T,
      typeof positioningVariants[keyof typeof positioningVariants]
    >
  >;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};
  Object.keys(positioningVariants).forEach((key) => {
    obj[key] = {
      [prop]:
        positioningVariants[
          key as keyof typeof positioningVariants
        ]
    };
  });
  return obj as RType;
};

type Column =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export const createColumns = <T>(
  fn: (size: string, name: Column) => T
) => {
  const maxColumns = 12;
  const sizes = Array(maxColumns)
    .fill(0)
    .map((_, i) =>
      calcPercentage(maxColumns, i + 1)
    ) as `${number}%`[];

  type RType = Record<Column, T>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  for (const key in sizes) {
    obj[`${Number(key) + 1}`] = fn(
      sizes[key],
      `${Number(key) + 1}` as Column
    );
  }
  return obj as RType;
};

const calcPercentage = (whole: number, part: number) => {
  const big = Big(part).div(whole).mul(100).toFixed(2, 2);
  return `${big}%`;
};
