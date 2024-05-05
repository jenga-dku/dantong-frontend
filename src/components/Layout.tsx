import { TopBar } from './TopBar';
import { Nav } from './Nav';
import { Outlet } from 'react-router-dom';

export const Layout = ({ className }: { className?: string }) => {
  return (
    <>
      <TopBar />
      <div
        className={`flex w-full flex-col overflow-auto bg-[#EBF4FF] px-5 pb-[100px] pt-[60px] ${className}`}
      >
        <Outlet />
      </div>
      <Nav />
    </>
  );
};
