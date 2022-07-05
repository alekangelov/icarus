export const percentageString = (
  percentage: string | number,
  value: string | number
) => `calc((${value} / 100) * ${percentage})`;
