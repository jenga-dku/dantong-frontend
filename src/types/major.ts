export const MAJOR = {
  SOFTWARE: '소프트웨어학과',
  COMPUTER: '컴퓨터공학과',
  STATICS: '통계데이터사이언스학과',
  MOBILE: '모바일시스템공학과',
  SECURE: '사이버보안학과',
} as const;

export const MAJOR_KOREAN = {
  소프트웨어학과: 'SOFTWARE',
  컴퓨터공학과: 'COMPUTER',
  통계데이터사이언스학과: 'STATICS',
  모바일시스템공학과: 'MOBILE',
  사이버보안학과: 'SECURE',
} as const;

export type Major = keyof typeof MAJOR;
export type MajorKorean = (typeof MAJOR)[keyof typeof MAJOR];
