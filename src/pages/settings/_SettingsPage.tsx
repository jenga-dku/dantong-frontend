import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useGetUserInfo } from '../../query-hooks/user';
import { HiUser } from 'react-icons/hi';
import { getMajorKoreanName } from '../../utils/getMajorKoreanName';
import { PiLockKeyLight, PiCalendarCheckLight } from 'react-icons/pi';
import { removeToken } from '../../utils/handleAuth';
import { useAuthStore } from '../../stores/auth-stores';
import { MenuContainer } from '../../components/MenuContainer';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const { data: userInfo } = useGetUserInfo();
  const { isLoggedIn, setIsLoggedIn, setUserInfo } = useAuthStore();
  const menuList = [
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
  ];

  return (
    <>
      {isLoggedIn ? (
        userInfo && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
              <div className="w-fit rounded-2xl bg-zinc-200 p-1 text-[60px] text-white">
                <HiUser />
              </div>
              <div className="flex flex-col gap-1">
                <p className="w-fit rounded-md text-xs text-primary">
                  {getMajorKoreanName(userInfo?.majorName)}
                </p>
                <p className="flex items-center gap-1">
                  <strong>{userInfo?.name}</strong>
                  <span className="text-sm">({userInfo?.studentId})</span>
                </p>
                <p className="text-sm">{userInfo?.phoneNumber}</p>
              </div>
            </div>
            <MenuContainer menuList={menuList} />
            <Button
              content="로그아웃"
              size="full"
              onClick={() => {
                removeToken();
                setUserInfo({
                  name: '',
                  role: '',
                  studentID: '',
                });
                setIsLoggedIn(false);
                navigate('/start');
              }}
            />
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-white px-3 pb-5 pt-10  shadow-lg">
          <p>로그인 후 이용 가능합니다</p>
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
