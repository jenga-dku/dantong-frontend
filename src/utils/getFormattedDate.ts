export const getFormattedDate = (date: Date) => {
  return new Date(+date + 3240 * 10000).toISOString().slice(0, -2);
};
