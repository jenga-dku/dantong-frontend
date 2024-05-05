import { IoNotifications } from 'react-icons/io5';

export const TopBar = () => {
  return (
    <div className="fixed top-0 z-50 box-border flex h-[40px] w-full max-w-[400px] items-center justify-between bg-[#EBF4FF] px-5 pb-3 pt-5">
      <h1 className="font-SejongHospitalBold text-2xl text-[#AFAFAF]">단통</h1>
      <IoNotifications className="text-3xl text-[#AFAFAF]" />
    </div>
  );
};
