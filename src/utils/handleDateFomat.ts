export const handleDateFormat = (data: string) => {
  let [date, time] = data.split('T');
  time = time.slice(0, 5);
  date = date.slice(2, 10).replaceAll('-', '.');

  return `${date} ${time}`;
};
