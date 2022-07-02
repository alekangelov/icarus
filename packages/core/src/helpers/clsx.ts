type ClassName = string | undefined | false;
type ObjectNotation = {
  [key: string]: boolean;
};
type ArrayNotation = ClassName[];

/**
 * Use to combine multiple class names into a single "React" class name.
 *
 * ```ts
 *    clsx({[someClass]: true, [someOtherClass]: false})
 * ```
 *
 * ```ts
 *    clsx(someClass, someOtherClass, someCondition && conditionalClass)
 * ```
 *
 * @param args Can be a list of strings or an object with keys and values.
 * @returns A normalized list of classnames
 */
export const clsx = <T extends [ObjectNotation] | ArrayNotation>(
  ...args: T
): string => {
  if (args.length === 0) {
    return '';
  }
  if (args.length === 1) {
    const objectN = args[0] as ObjectNotation;
    return Object.entries(objectN).reduce(
      (acc, [key, value]) => `${acc}${value ? ` ${key}` : ''}`,
      ''
    );
  }
  const arrayN = args as ArrayNotation;
  return arrayN.reduce(
    (acc, value) => `${acc}${value ? ` ${value}` : ''}`,
    ''
  ) as string;
};

export const mergeStyles = (...args: (object | undefined)[]) => {
  console.log(args);
  return args.reduce(
    (acc, value) => ({
      ...acc,
      ...value,
    }),
    {}
  );
};
