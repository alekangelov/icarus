type ClassName = string | undefined | false;
type ObjectNotation = {
  [key: string]: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<any, any>;

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
export const clsx = <T extends Array<ObjectNotation | ClassName>>(
  ...args: T
): string => {
  const classes = [];
  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === 'string') {
      classes.push(arg);
      continue;
    }
    if (typeof arg === 'object') {
      for (const key in arg) {
        if ((arg as AnyObject)[key]) classes.push(key);
      }
    }
  }
  console.log(classes);
  return classes.join(' ');
};

export const mergeStyles = (...args: (object | undefined)[]) => {
  return args.reduce(
    (acc, value) => ({
      ...acc,
      ...value,
    }),
    {}
  );
};
