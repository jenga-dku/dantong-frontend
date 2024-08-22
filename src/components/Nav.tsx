import { FaHouse } from 'react-icons/fa6';
import { IoIosPaper } from 'react-icons/io';
import { IoCalendarClear } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@stores/auth-stores';

export const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageType = pathname.split('?')[0].split('/')[1];
  const { userInfo } = useAuthStore();
  const isAdminMenu = (link: string) =>
    link === 'settings' && userInfo.role.includes('ROLE_ADMIN');

  return (
    <div className="screen-width navBar fixed bottom-0 z-50 box-border flex h-[55px] w-full rounded-t-[20px] bg-white shadow-[0_-2px_5px_1px_rgba(0,0,0,0.05)]">
      {NavButtonDataList.map(({ link, icon, name }) => (
        <div
          key={`nav-button-${link}`}
          className="flex w-1/4 items-center justify-center text-2xl text-[#acacac]"
        >
          <button
            onClick={() => {
              navigate(`/${isAdminMenu(link) ? 'admin' : link}`);
            }}
            className={`${pageType === link && 'text-[#89abd4]'} clickable flex flex-col items-center gap-1`}
          >
            {icon}
            <p className="text-[0.6rem] leading-tight">{name}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

const NavButtonDataList = [
  {
    link: '',
    icon: <FaHouse />,
    name: '홈',
  },
  {
    link: 'news',
    icon: <IoIosPaper />,
    name: '소식',
  },
  {
    link: 'calendar',
    icon: <IoCalendarClear />,
    name: '캘린더',
  },
  {
    link: 'settings',
    icon: <FiMenu />,
    name: '메뉴',
  },
];
