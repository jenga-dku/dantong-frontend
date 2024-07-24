import {
  PiNotebookLight,
  PiNoteLight,
  PiNotePencilLight,
} from 'react-icons/pi';

export const menuList = [
  {
    id: 'form-list',
    icon: <PiNoteLight />,
    menuName: '응답 현황',
  },
  { id: 'news-upload', icon: <PiNotePencilLight />, menuName: '소식 업로드' },
  { id: 'form-upload', icon: <PiNotebookLight />, menuName: '폼 업로드' },
];
