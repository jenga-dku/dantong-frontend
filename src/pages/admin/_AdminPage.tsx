import { PiNoteLight, PiNotePencilLight } from 'react-icons/pi';
import { MenuContainer } from '../../components/MenuContainer';

export const AdminPage = () => {
  const menuList = [
    {
      id: 'form-list',
      icon: <PiNoteLight />,
      menuName: '응답 현황',
    },
    { id: 'news-upload', icon: <PiNotePencilLight />, menuName: '소식 업로드' },
  ];
  return (
    <>
      <MenuContainer menuList={menuList} />
    </>
  );
};
