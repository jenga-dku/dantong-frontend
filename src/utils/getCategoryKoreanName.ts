import { CATEGORY, Category } from '@src/types/news-category';

export const getCategoryKoreanName = (categoryID: Category) => {
  return CATEGORY[categoryID];
};
