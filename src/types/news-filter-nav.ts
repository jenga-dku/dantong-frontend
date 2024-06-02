import { FilterCategory } from './news-category';
import { IconType } from 'react-icons';
import { IoHeart } from 'react-icons/io5';

export type FilterNav = {
  name: string | IconType;
  id: FilterCategory;
};

export const FilterNavDataList: FilterNav[] = [
  { name: '전체', id: '' },
  { name: '행사', id: 'EVENT' },
  { name: '공지', id: 'NOTICE' },
  { name: '제휴', id: 'PARTNERSHIP' },
  { name: IoHeart, id: 'LIKE' },
];
