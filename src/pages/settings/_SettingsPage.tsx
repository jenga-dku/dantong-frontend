import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useGetUserInfo } from '../../query-hooks/user';
import { HiUser } from 'react-icons/hi';
import { getMajorKoreanName } from '../../utils/getMajorKoreanName';
import {
  PiUsersLight,
  PiLockKeyLight,
  PiCalendarCheckLight,
} from 'react-icons/pi';
import { Fragment } from 'react/jsx-runtime';
import { removeToken } from '../../utils/handleAuth';
import { useAuthStore } from '../../stores/auth-stores';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const { data } = useGetUserInfo();
  const { isLoggedIn, setIsLoggedIn, setUserInfo } = useAuthStore();
  const removeUserInfo = () => {
    setUserInfo({
      name: '',
      role: '',
    });
  };

  const menuList = [
    {
      id: 'my-info',
      icon: <PiLockKeyLight />,
      menuName: '개인정보 수정',
    },
    {
      id: 'friends',
      icon: <PiUsersLight />,
      menuName: '친구',
    },
    {
      id: 'history',
      icon: <PiCalendarCheckLight />,
      menuName: '신청 내역',
    },
  ];

  return (
    <>
      {isLoggedIn ? (
        data && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
              <div className="w-fit rounded-2xl bg-zinc-200 p-1 text-[60px] text-white">
                <HiUser />
              </div>
              <div className="flex flex-col gap-1">
                <p className="w-fit rounded-md text-xs text-primary">
                  {getMajorKoreanName(data.majorName)}
                </p>
                <p className="flex items-center gap-1">
                  <strong>{data?.name}</strong>
                  <span className="text-sm">({data?.studentId})</span>
                </p>
                <p className="text-sm">{data?.phoneNumber}</p>
              </div>
            </div>
            <ul className="rounded-xl bg-white p-5 shadow-lg">
              {menuList.map(({ id, icon, menuName }, index) => (
                <Fragment key={id}>
                  <li
                    onClick={() => {}}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <span className="text-2xl">{icon}</span>
                    <p>{menuName}</p>
                  </li>
                  {index !== menuList.length - 1 && <hr className="my-3" />}
                </Fragment>
              ))}
            </ul>
            <Button
              content="로그아웃"
              size="full"
              onClick={() => {
                removeToken();
                removeUserInfo();
                navigate('/start');
                setIsLoggedIn(false);
              }}
            />
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-white px-3 pb-5 pt-10  shadow-lg">
          <p className="">로그인 후 이용 가능합니다!🥲</p>
          <Button
            onClick={() => {
              navigate('/start');
            }}
            content="로그인"
            size="full"
          />
        </div>
      )}
    </>
  );
};
