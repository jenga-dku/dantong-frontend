import { MAJOR, Major } from '../types/major';

export const getMajorKoreanName = (majorID: Major) => {
  return MAJOR[majorID];
};
