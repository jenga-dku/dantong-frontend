import { Category } from '@src/types/news-category';

export type NewsUpload = {
  title: string;
  description: string;
  content: string;
  category?: Category;
  imageFiles?: File[];
  startTime: string;
  endTime: string;
  shown: boolean;
};
