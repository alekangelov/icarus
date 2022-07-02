// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const forEachInObject = <T extends Record<any, any>>(
  object: T,
  callback: (value: T[keyof T], key: keyof T) => void
) => {
  for (const i in object) {
    if (Object.hasOwnProperty.call(object, i)) {
      callback(object[i], i);
    }
  }
};
