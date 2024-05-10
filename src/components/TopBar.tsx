import { IoNotifications } from 'react-icons/io5';
import { FaAngleLeft } from 'react-icons/fa6';
import { useTopBarStore } from '../stores/topBar-stores';
import { useNavigate } from 'react-router-dom';

export const TopBar = () => {
  const { isBackButtonVisible } = useTopBarStore();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 z-50 box-border flex h-[40px] w-full max-w-[400px] items-center justify-between bg-[#EBF4FF] px-5 pb-3 pt-5 text-[#AFAFAF]">
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
      <IoNotifications className="text-3xl text-[#AFAFAF]" />
    </div>
  );
};
