import { IoNotifications } from 'react-icons/io5';

export const TopBar = () => {
  return (
    <div className="fixed top-0 box-border flex h-[60px] w-full max-w-[480px] items-center justify-between bg-[#EBF4FF] px-5">
      <h1 className="font-SejongHospitalBold text-2xl text-[#AFAFAF]">단통</h1>
      <IoNotifications className="text-3xl text-[#AFAFAF]" />
    </div>
  );
};
