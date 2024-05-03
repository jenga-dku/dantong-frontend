import { ReactNode } from 'react';
import { TopBar } from './TopBar';
import { Nav } from './Nav';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopBar />
      <div className="flex w-full flex-col overflow-auto bg-[#EBF4FF] px-5 pb-[100px] pt-[60px]">
        {children}
      </div>
      <Nav />
    </>
  );
};
