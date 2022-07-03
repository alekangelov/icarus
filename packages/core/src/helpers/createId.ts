export const createId = (prefix: string) => {
  let i = 0;
  return () => `${prefix}-${i++}`;
};
