import { MAJOR, Major } from '../types/major';

export const getMajorKoreanName = (majorID?: Major) => {
  if (majorID === undefined) return;
  return MAJOR[majorID];
};
