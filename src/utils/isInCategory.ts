import { FilterCategory } from '@src/types/news-category';

const isCategory = (test: string): test is FilterCategory => {
  return (
    test === '' ||
    test === 'PARTNERSHIP' ||
    test === 'NOTICE' ||
    test === 'EVENT' ||
    test === 'LIKE'
  );
};

export const isInCategory = (test: string) => {
  if (isCategory(test)) {
    return test;
  }
};
