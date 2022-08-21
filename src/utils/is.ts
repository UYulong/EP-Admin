export const isNumber = (num: unknown): boolean => {
  return !isNaN(parseFloat(num as string)) && isFinite(num as number);
}