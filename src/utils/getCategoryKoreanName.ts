import { CATEGORY, Category } from '../types/news-category';

export const getCategoryKoreanName = (categoryID: Category) => {
  return CATEGORY[categoryID];
};
