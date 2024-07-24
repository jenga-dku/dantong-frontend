import { CATEGORY, Category } from '@src/types/news-category';

export const getCategoryKoreanName = (categoryId: Category) => {
  return CATEGORY[categoryId];
};
