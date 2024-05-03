import { FaHouse } from 'react-icons/fa6';
import { IoIosPaper } from 'react-icons/io';
import { IoCalendarClear } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

export const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageType = pathname.split('?')[0].split('/')[1];

  return (
    <div className="fixed bottom-0 flex h-[80px] w-full max-w-[480px] rounded-t-[10px] bg-white shadow-[0_-2px_5px_1px_rgba(0,0,0,0.05)]">
      {NavButtonDataList.map(({ link, icon }) => (
        <div
          key={`nav-button-${link}`}
          className="flex w-1/4 items-center justify-center text-4xl text-[#DEDEDE]"
        >
          <button
            onClick={() => {
              navigate(link);
            }}
            className={`${pageType === link && 'text-[#8898AB]'}`}
          >
            {icon}
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
  },
  {
    link: '/news',
    icon: <IoIosPaper />,
  },
  {
    link: '/calendar',
    icon: <IoCalendarClear />,
  },
  {
    link: '/settings',
    icon: <FiMenu />,
  },
];
