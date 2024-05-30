import { MONTH, MonthInEnglish } from '../types/month';

const isMonth = (test: string): test is MonthInEnglish => {
  return (
    test === 'January' ||
    test === 'February' ||
    test === 'March' ||
    test === 'April' ||
    test === 'May' ||
    test === 'June' ||
    test === 'July' ||
    test === 'August' ||
    test === 'September' ||
    test === 'October' ||
    test === 'November' ||
    test === 'December'
  );
};

export const getMonthInKorean = (month: string) => {
  if (isMonth(month)) {
    return MONTH[month];
  }
};
