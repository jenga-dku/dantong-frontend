import { MAJOR, Major } from '@src/types/major';

export const getMajorKoreanName = (majorId?: Major) => {
  if (majorId === undefined) return;
  return MAJOR[majorId];
};
