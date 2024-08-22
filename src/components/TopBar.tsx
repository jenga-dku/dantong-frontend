import { IoNotifications } from 'react-icons/io5';
import { FaAngleLeft } from 'react-icons/fa6';
import { useTopBarStore } from '@stores/topBar-stores';
import { useNavigate } from 'react-router-dom';

export const TopBar = () => {
  const { isBackButtonVisible, isNotificationButtonVisible } = useTopBarStore();
  const navigate = useNavigate();

  return (
    <>
      <div className="screen-width fixed top-0 z-50 box-border flex w-full flex-col bg-[#EBF4FF] px-5 py-[5px] text-[#AFAFAF]">
        <div
          style={{
            width: '100%',
            paddingTop: 'calc(env(safe-area-inset-top) - 1.2rem)',
          }}
        />
        <div className="flex w-full items-center justify-between ">
          {isBackButtonVisible ? (
            <button
              className="text-2xl"
              onClick={() => {
                navigate(-1);
              }}
            >
              <FaAngleLeft />
            </button>
          ) : (
            <h1 className="font-SejongHospitalBold text-2xl">단통</h1>
          )}
          {isNotificationButtonVisible && (
            <IoNotifications className="text-3xl text-[#AFAFAF]" />
          )}
        </div>
      </div>
    </>
  );
};
