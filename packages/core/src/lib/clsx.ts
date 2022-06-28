type ClassName = string | undefined;
type ObjectNotation = {
  [key: string]: boolean;
};
type ArrayNotation = ClassName[];

export const clsx = <
  T extends [ObjectNotation] | ArrayNotation
>(
  ...args: T
) => {
  if (args.length === 0) {
    return '';
  }
  if (args.length === 1) {
    const objectN = args[0] as ObjectNotation;
    return Object.entries(objectN).reduce(
      (acc, [key, value]) =>
        `${acc}${value ? ` ${key}` : ''}`,
      ''
    );
  }
  const arrayN = args as ArrayNotation;
  return arrayN.reduce(
    (acc, value) => `${acc}${value ? ` ${value}` : ''}`,
    ''
  );
};

export const mergeStyles = (
  ...args: (object | undefined)[]
) => {
  return args.reduce(
    (acc, value) => ({
      ...acc,
      ...value
    }),
    {}
  );
};
