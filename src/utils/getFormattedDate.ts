export const getFormattedDate = (date: Date) =>
  date
    .toLocaleDateString()
    .split('.')
    .slice(0, 3)
    .map((item, index) => (index === 0 ? item : item.trim().padStart(2, '0')))
    .join('-');
