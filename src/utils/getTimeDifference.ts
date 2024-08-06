export const getTimeDifference = (dateString: string): number => {
  let date = parseJsonWithDates(dateString);
  const givenDate = new Date(date);
  const current = new Date();
  const diff = current.getTime() - givenDate.getTime();
  return diff;
};

function parseJsonWithDates(jsonString: string): number {
  return JSON.parse(jsonString, (key, value) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (typeof value === 'string' && dateFormat.test(value)) {
      return new Date(value);
    }
    return value;
  });
}
