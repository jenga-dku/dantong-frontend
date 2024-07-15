import moment from 'moment-timezone';

export const events = [
  {
    id: 0,
    title: 'DANFESTA',
    allDay: true,
    start: moment
      .tz('2024-05-21 00:00:00', 'YYYY-MM-DD HH:mm:ss', 'Asia/Seoul')
      .toDate(),
    endDate: moment
      .tz('2024-05-24 23:59:59', 'YYYY-MM-DD HH:mm:ss', 'Asia/Seoul')
      .toDate(),
    desc: '',
  },
  {
    id: 1,
    title: '2024학년도 1학기 기말고사',
    allDay: true,
    start: moment
      .tz('2024-06-11 00:00:00', 'YYYY-MM-DD HH:mm:ss', 'Asia/Seoul')
      .toDate(),
    endDate: moment
      .tz('2024-06-20 23:59:59', 'YYYY-MM-DD HH:mm:ss', 'Asia/Seoul')
      .toDate(),
    desc: '',
  },
  {
    id: 2,
    title: '2024학년도 1학기 공휴일 지정순연일',
    allDay: true,
    start: moment
      .tz('2024-06-17 00:00:00', 'YYYY-MM-DD HH:mm:ss', 'Asia/Seoul')
      .toDate(),
    endDate: moment
      .tz('2024-06-20 23:59:59', 'YYYY-MM-DD HH:mm:ss', 'Asia/Seoul')
      .toDate(),
    desc: '',
  },
];
