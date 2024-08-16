import {
  PiBellLight,
  PiCalendarCheckLight,
  PiLockKeyLight,
  PiSmileyLight,
} from 'react-icons/pi';

export const menuList = [
  {
    id: 'profile',
    icon: <PiLockKeyLight />,
    menuName: '개인정보 수정',
  },
  {
    id: 'form-my',
    icon: <PiCalendarCheckLight />,
    menuName: '신청 내역',
  },
  {
    id: 'friend',
    icon: <PiSmileyLight />,
    menuName: '친구',
  },
  {
    id: 'notification',
    icon: <PiBellLight />,
    menuName: '알림',
  },
];
