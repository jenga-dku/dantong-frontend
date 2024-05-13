export const handleDateFormat = (date: string | undefined) => {
  const time = date?.split('T')[1].slice(0, 5);
  return `${date?.slice(2, 10).replaceAll('-', '.')} ${time}`;
};
