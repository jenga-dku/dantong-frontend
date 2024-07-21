import { MAJOR, Major } from '@src/types/major';

export const getMajorKoreanName = (majorID?: Major) => {
  if (majorID === undefined) return;
  return MAJOR[majorID];
};
